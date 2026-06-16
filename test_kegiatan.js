const cheerio = require('cheerio');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test(page) {
  const url = `https://sid.clasnet.co.id/kegiatan.php?hal=${page}`;
  console.log('fetching', url);
  const res = await fetch(url);
  const text = await res.text();
  const $ = cheerio.load(text);
  console.log(`Page ${page}: ${$('article, .post, .blog-item, .card').length} items found`);
}

test(1);
test(2);
