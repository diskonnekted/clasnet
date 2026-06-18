const cheerio = require('cheerio');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function fetchIndex() {
    try {
        const res = await fetch('https://clasnet.co.id/index.php');
        const html = await res.text();
        const $ = cheerio.load(html);
        
        console.log("Sections found:");
        $('section, div.container').each((i, el) => {
            const heading = $(el).find('h1, h2, h3').first().text().trim();
            if (heading) {
                console.log(`[Section ${i}] Heading: ${heading}`);
                // print snippet of text
                const text = $(el).text().replace(/\s+/g, ' ').substring(0, 100);
                console.log(`Snippet: ${text}`);
                console.log('---');
            }
        });
    } catch(e) {
        console.error("Error", e);
    }
}
fetchIndex();
