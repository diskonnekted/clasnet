process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testArif() {
  try {
    const res = await fetch('https://arifsusilo.com/kreator/');
    const text = await res.text();
    const cheerio = require('cheerio');
    const $ = cheerio.load(text);
    
    $('img').each((i, el) => {
        console.log('Img:', $(el).attr('src'));
    });
  } catch(e) { console.error(e.message); }
}
testArif();
