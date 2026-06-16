const cheerio = require('cheerio');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
  for (let i = 1; i <= 5; i++) {
    const res = await fetch('https://clasnet.co.id/ajax.php', {
      method: 'POST',
      body: `page=${i}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    const text = await res.text();
    const $ = cheerio.load(text);
    console.log(`Page ${i}: ${$('.blog-item').length} items`);
  }
}
test();
