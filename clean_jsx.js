const fs = require('fs');
let code = fs.readFileSync('components/ui/custom/LegacyContent.tsx', 'utf8');

// remove all script tags
code = code.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// remove scribe-shadow tags
code = code.replace(/<scribe-shadow[\s\S]*?<\/scribe-shadow>/gi, '');

fs.writeFileSync('components/ui/custom/LegacyContent.tsx', code);
console.log('Cleaned up LegacyContent.tsx');
