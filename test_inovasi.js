const cheerio = require('cheerio');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testSIDInovasi() {
  try {
    const res = await fetch('https://sid.clasnet.co.id/inovasi.php');
    const text = await res.text();
    const $ = cheerio.load(text);
    console.log('--- SID INOVASI ---');
    console.log('Items found:', $('article, .post, .blog-item, .card').length);
    $('article, .post, .blog-item, .card').first().each((i, el) => {
        console.log('Title:', $(el).find('h2, h3, .title').text().trim());
        console.log('Image:', $(el).find('img').attr('src'));
        console.log('Link:', $(el).find('a').attr('href'));
        console.log('Desc:', $(el).find('p, .excerpt, .desc').text().trim().substring(0, 100));
    });
  } catch(e) { console.error('SID Error', e.message); }
}

async function testArifKreator() {
  try {
    const res = await fetch('https://arifsusilo.com/kreator/');
    const text = await res.text();
    const $ = cheerio.load(text);
    console.log('--- ARIF KREATOR ---');
    console.log('Items found:', $('article, .post, .blog-item, .card, .elementor-post').length);
    $('article, .post, .blog-item, .card, .elementor-post').first().each((i, el) => {
        console.log('Title:', $(el).find('h2, h3, .elementor-post__title, .title').text().trim());
        console.log('Image:', $(el).find('img').attr('src'));
        console.log('Link:', $(el).find('a').attr('href'));
        console.log('Desc:', $(el).find('p, .elementor-post__excerpt, .excerpt, .desc').text().trim().substring(0, 100));
    });
  } catch(e) { console.error('Arif Error', e.message); }
}

testSIDInovasi().then(testArifKreator);
