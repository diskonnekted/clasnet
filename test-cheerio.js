const fs = require('fs');
const cheerio = require('cheerio');

// Parse Kegiatan
const htmlKegiatan = fs.readFileSync('kegiatan.html', 'utf-8');
const $keg = cheerio.load(htmlKegiatan);
const kegiatans = [];
$keg('.blog-item').each((i, el) => {
    const $el = $keg(el);
    kegiatans.push({
        title: $el.find('h4').text().trim(),
        image: $el.find('img').attr('src') ? ('https://sid.clasnet.co.id/' + $el.find('img').attr('src').replace('../', '')) : '',
        date: $el.find('.p-4 small').first().text().trim(),
        desc: $el.find('.p-4 p').text().trim(),
        link: $el.find('a').attr('href')
    });
});
console.log('Kegiatans:', kegiatans.slice(0, 2));

// Parse Orion
const htmlOrion = fs.readFileSync('orion.html', 'utf-8');
const $ori = cheerio.load(htmlOrion);
const orions = [];
$ori('.blog-item').each((i, el) => {
    const $el = $ori(el);
    orions.push({
        title: $el.find('h4').text().trim(),
        image: $el.find('img').attr('src') ? ('https://orionapp.clasnet.co.id/' + $el.find('img').attr('src').replace('../', '')) : '',
        date: $el.find('.p-4 small').first().text().trim(),
        desc: $el.find('.p-4 p').text().trim(),
        link: $el.find('a').attr('href')
    });
});
console.log('Orions:', orions.slice(0, 2));
