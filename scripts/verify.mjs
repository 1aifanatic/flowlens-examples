import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
process.chdir(fileURLToPath(new URL('../', import.meta.url)));
const base = process.argv[2] || JSON.parse(fs.readFileSync('.archify/latest.json', 'utf8')).directory;
const results = JSON.parse(fs.readFileSync(`${base}/results.json`, 'utf8'));
assert.equal(results.version, '0.10.0');
for (const example of results.examples) {
  assert.equal(example.ok, true, `${example.id} failed`);
  const output = `${base}/${example.id}`;
  assert.ok(fs.statSync(`${output}/${example.entry}`).size > 1000);
  const diagram = JSON.parse(fs.readFileSync(`${output}/${example.diagram}.json`, 'utf8'));
  assert.equal(diagram.diagram_type, example.diagram);
  if (example.args[0] !== 'flow') {
    const analysis = JSON.parse(fs.readFileSync(`${output}/analysis.json`, 'utf8'));
    assert.equal(analysis.modelTokens, 0, `${example.id} must use zero model tokens`);
    if (example.id === 'uipath-flowchart') assert.deepEqual(analysis.diagram.edges.map(edge => edge.label).sort(), ['False', 'True']);
    if (example.id.endsWith('-architecture') && example.source.startsWith('uipath-')) assert.ok(analysis.calls.some(call => call.to === 'Steps/Validate.xaml'));
    if (example.id === 'maestro-workflow') assert.equal(analysis.workflows.length, 2);
  }
}
function checkLinks(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name);
    if (item.isDirectory()) checkLinks(file);
    else if (file.endsWith('.html')) {
      for (const [, href] of fs.readFileSync(file, 'utf8').matchAll(/href="([^"#]+\.html)(?:#[^"]*)?"/g)) {
        if (!/^https?:/.test(href)) assert.ok(fs.existsSync(path.resolve(directory, href)), `Broken link ${file}: ${href}`);
      }
    }
  }
}
checkLinks(base);
console.log(`Verified ${results.examples.length} examples, local HTML links and zero model-token records.`);
