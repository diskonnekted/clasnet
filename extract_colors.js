const fs = require('fs');
const path = require('path');

const colorDir = path.join(__dirname, '..', 'docs', 'color');
const files = fs.readdirSync(colorDir).filter(f => f.endsWith('.css'));

const themes = {};

files.forEach(file => {
    const name = file.replace('.css', '');
    const content = fs.readFileSync(path.join(colorDir, file), 'utf8');
    
    const colors = [];
    const lines = content.split('\n');
    lines.forEach(line => {
        const match = line.match(/--([^:]+):\s*([^;]+);/);
        if (match) {
            colors.push({ name: match[1], value: match[2].trim().replace('ff', '') }); // remove trailing ff from hex if present and valid (like #606c38ff -> #606c38) Wait, 8 digit hex is supported but 6 digit is better for clarity.
        }
    });
    
    themes[name] = colors;
});

console.log(JSON.stringify(themes, null, 2));
