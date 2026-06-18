const fs = require('fs');
const path = require('path');

const files = [
  'app/api/iot/route.ts',
  'app/api/iot/stream/route.ts',
  'app/api/wilayah/route.ts',
  'app/api/pembangunan/route.ts',
  'app/api/ppid/route.ts',
  'app/inovasi/page.tsx'
];

files.forEach(f => {
  const filePath = path.join(__dirname, f);
  if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (!content.includes('export const dynamic')) {
         if (content.startsWith('"use client"') || content.startsWith("'use client'")) {
             content = content.replace(/("use client";?|'use client';?)\r?\n/, "$1\nexport const dynamic = \"force-dynamic\";\n");
         } else {
             content = "export const dynamic = \"force-dynamic\";\n" + content;
         }
         fs.writeFileSync(filePath, content);
         console.log('Fixed ' + f);
      }
  } else {
      console.log('Not found: ' + f);
  }
});
