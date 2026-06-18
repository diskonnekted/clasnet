const cheerio = require('cheerio');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const res = await fetch('https://clasnet.co.id/ajax.php', { method: 'POST', body: 'page=1', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
    const html = await res.text();
    const $ = cheerio.load(html);
    
    $('.blog-item').each((i, el) => {
        if(i < 3) {
            console.log("src:", $(el).find('.blog-img img').attr('src'));
        }
    });
}
test();
