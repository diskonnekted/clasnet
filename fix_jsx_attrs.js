const fs = require('fs');
let code = fs.readFileSync('components/ui/custom/LegacyContent.tsx', 'utf8');

// fix JSX attribute casing
code = code.replace(/tabindex/g, 'tabIndex');
code = code.replace(/colspan/g, 'colSpan');
code = code.replace(/readonly/g, 'readOnly');
code = code.replace(/maxlength/g, 'maxLength');
code = code.replace(/autocomplete/g, 'autoComplete');
code = code.replace(/autoplay/g, 'autoPlay');

// also replace 'charset' with 'charSet' if it exists
code = code.replace(/charset/g, 'charSet');

fs.writeFileSync('components/ui/custom/LegacyContent.tsx', code);
console.log('Fixed JSX attribute casing in LegacyContent.tsx');
