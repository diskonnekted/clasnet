process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testArif() {
  try {
    const res = await fetch('https://arifsusilo.com/kreator/');
    const text = await res.text();
    const cheerio = require('cheerio');
    const $ = cheerio.load(text);
    
    // Find the wrapper of h2
    $('h2').each((i, el) => {
        const card = $(el).parent().parent();
        console.log('--- CARD ---');
        console.log('Title:', $(el).text().trim());
        console.log('Desc:', card.find('p').text().trim());
        console.log('Image:', card.parent().find('img').attr('src'));
        console.log('Link:', card.parent().find('a').attr('href'));
        // wait maybe the link is on the card or h2
        console.log('Direct Link:', card.find('a').attr('href') || $(el).closest('a').attr('href') || $(el).parent().find('a').attr('href'));
    });
  } catch(e) { console.error(e.message); }
}
testArif();
