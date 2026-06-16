const cheerio = require('cheerio');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

fetch('https://orion.clasnet.co.id/?page_id=14')
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    const images = [];
    $('img').each((i, el) => {
      images.push($(el).attr('src'));
    });
    console.log(images);
  })
  .catch(console.error);
