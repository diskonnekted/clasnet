process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testArif() {
  try {
    const res = await fetch('https://arifsusilo.com/kreator/');
    const text = await res.text();
    console.log(text.substring(0, 1500));
    
    // let's try to find class names inside
    const cheerio = require('cheerio');
    const $ = cheerio.load(text);
    console.log('Images:', $('img').length);
    console.log('H2s:', $('h2').length);
    $('h2').each((i, el) => console.log('H2 text:', $(el).text()));
  } catch(e) { console.error(e.message); }
}
testArif();
