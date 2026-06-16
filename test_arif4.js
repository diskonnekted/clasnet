process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testArif() {
  try {
    const res = await fetch('https://arifsusilo.com/kreator/');
    const text = await res.text();
    const cheerio = require('cheerio');
    const $ = cheerio.load(text);
    
    // Looks like the cards might have a specific class. Let's find 'img' and their closest 'a' or container.
    $('h2').each((i, el) => {
        // usually it's in a flex/grid row
        const card = $(el).parent().parent();
        console.log('Title:', $(el).text().trim());
        const link = card.find('a').attr('href') || $(el).closest('a').attr('href') || $(el).parent().find('a').attr('href');
        // Let's find the img inside the grandparent or something
        // let's just search the nearest sibling or parent that has img
        const img = $(el).closest('div.card-animate, section, div.group').find('img').attr('src');
        // if not found, search the whole block
        const block = $(el).parent().parent().parent();
        const img2 = block.find('img').attr('src');
        
        console.log('Link:', link);
        console.log('Img:', img2);
        console.log('-----------------');
    });
  } catch(e) { console.error(e.message); }
}
testArif();
