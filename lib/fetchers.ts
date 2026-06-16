import * as cheerio from 'cheerio';

// Mengabaikan error sertifikat SSL self-signed saat pengembangan lokal
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export interface Portofolio {
    title: string;
    image: string;
    category: string;
    client: string;
    year: string;
    desc: string;
}

export interface Kegiatan {
    title: string;
    image: string;
    date?: string;
    desc?: string;
    link?: string;
}

export interface OrionNews {
    title: string;
    image?: string;
    date?: string;
    desc?: string;
    link?: string;
}

export interface Arsip {
    title: string;
    link: string;
    date: string;
    image?: string;
    excerpt?: string;
}

export async function getPortofolios(page: number = 1): Promise<Portofolio[]> {
    try {
        const res = await fetch('https://clasnet.co.id/ajax.php', {
            method: 'POST',
            body: `page=${page}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            next: { revalidate: 3600 }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        const ports: Portofolio[] = [];

        $('.blog-item').each((i, el) => {
            const $el = $(el);
            let imageStr = $el.find('.blog-img img').attr('src') || '';
            if (imageStr && imageStr.startsWith('../')) {
                imageStr = 'https://clasnet.co.id/' + imageStr.replace('../', '');
            } else if (imageStr && !imageStr.startsWith('http')) {
                imageStr = 'https://clasnet.co.id/' + imageStr;
            }

            ports.push({
                title: $el.find('h4').text().trim(),
                image: imageStr,
                category: $el.find('.position-absolute').text().trim(),
                client: $el.find('.p-4 small.me-3').text().trim(),
                year: $el.find('.p-4 small:not(.me-3)').text().trim(),
                desc: $el.find('.p-4 p').text().trim(),
            });
        });
        return ports;
    } catch (e) {
        console.error("Error fetching portofolio", e);
        return [];
    }
}

export async function getKegiatans(page: number = 1): Promise<Kegiatan[]> {
    try {
        const res = await fetch(`https://sid.clasnet.co.id/kegiatan.php?hal=${page}`, {
            next: { revalidate: 3600 }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        const kegiatans: Kegiatan[] = [];

        $('article, .post, .blog-item').each((i, el) => {
            const $el = $(el);
            const title = $el.find('h2, h3, h4').first().text().trim();
            if (!title) return;

            let imageStr = $el.find('img').first().attr('src') || '';
            if (imageStr && !imageStr.startsWith('http')) {
                imageStr = 'https://sid.clasnet.co.id/' + imageStr.replace(/^\/?/, '');
            }

            kegiatans.push({
                title,
                image: imageStr || '/images/Clasnet Group - Logo Fullcolor.png',
                desc: $el.find('p').first().text().trim() || title,
                link: $el.find('a').first().attr('href') || '#',
            });
        });
        return kegiatans;
    } catch (e) {
        console.error("Error fetching kegiatans", e);
        return [];
    }
}

export async function getOrionNews(): Promise<OrionNews[]> {
    try {
        const res = await fetch('https://orionapp.clasnet.co.id/', {
            next: { revalidate: 3600 }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        const orions: OrionNews[] = [];

        $('article, .post, .blog-item').each((i, el) => {
            const $el = $(el);
            const title = $el.find('h2, h3, h4').first().text().trim();
            if (!title) return;

            let imageStr = $el.find('img').first().attr('src') || '';
            if (imageStr && !imageStr.startsWith('http')) {
                imageStr = 'https://orionapp.clasnet.co.id/' + imageStr.replace(/^\/?/, '');
            }

            orions.push({
                title,
                image: imageStr || '/images/Clasnet Group - Logo Fullcolor.png',
                desc: $el.find('p').first().text().trim() || title,
                link: $el.find('a').first().attr('href') || '#',
            });
        });
        return orions;
    } catch (e) {
        console.error("Error fetching orion news", e);
        return [];
    }
}

export async function getArsipData(page: number = 1): Promise<Arsip[]> {
    try {
        // WP REST API for WordPress.com sites
        const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/streaming.data.blog/posts?number=4&page=${page}`, {
            next: { revalidate: 3600 }
        });
        const data = await res.json();
        
        if (!data || !data.posts) return [];

        return data.posts.map((post: any) => {
            return {
                title: post.title,
                link: post.URL,
                date: new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' }),
                image: post.featured_image || '/images/Clasnet Group - Logo Fullcolor.png',
                excerpt: post.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...',
            }
        });
    } catch (e) {
        console.error("Error fetching arsip", e);
        return [];
    }
}

export interface Inovasi {
    title: string;
    desc: string;
    image: string;
    link: string;
    source: string;
}

export async function getInovasiSid(): Promise<Inovasi[]> {
    try {
        const res = await fetch('https://sid.clasnet.co.id/inovasi.php', {
            next: { revalidate: 3600 }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const results: Inovasi[] = [];
        $('article, .post, .blog-item, .card').each((i, el) => {
            const title = $(el).find('h2, h3, .title').text().trim();
            if (!title) return;
            const link = $(el).find('a').attr('href') || '#';
            let image = $(el).find('img').attr('src') || '';
            if (image && !image.startsWith('http')) {
                image = 'https://sid.clasnet.co.id/' + image.replace(/^\//, '');
            }
            let desc = $(el).find('p, .excerpt, .desc').text().trim();
            if (desc.length > 150) desc = desc.substring(0, 150) + '...';
            results.push({ title, desc, image: image || '/images/Clasnet Group - Logo Fullcolor.png', link, source: 'Clasnet SID' });
        });
        return results;
    } catch (e) {
        console.error("Error fetching inovasi SID", e);
        return [];
    }
}

export async function getInovasiArif(): Promise<Inovasi[]> {
    try {
        const res = await fetch('https://arifsusilo.com/kreator/', {
            next: { revalidate: 3600 }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const results: Inovasi[] = [];
        const imgs: string[] = [];
        $('img').each((idx, imgEl) => {
            const src = $(imgEl).attr('src');
            if (src && src.includes('kreator')) {
                imgs.push(src);
            }
        });

        $('h2').each((i, el) => {
            const title = $(el).text().trim();
            if (!title) return;
            const card = $(el).parent().parent();
            let desc = card.find('p').text().trim();
            if (desc.length > 150) desc = desc.substring(0, 150) + '...';
            const link = card.find('a').attr('href') || $(el).closest('a').attr('href') || $(el).parent().find('a').attr('href') || '#';
            
            let image = imgs[i] || '';
            if (image && !image.startsWith('http')) {
                image = 'https://arifsusilo.com' + (image.startsWith('/') ? '' : '/') + image;
            }
            results.push({ title, desc, image: image || '/images/Clasnet Group - Logo Fullcolor.png', link, source: 'Arif Susilo Kreator' });
        });
        return results;
    } catch(e) {
        console.error("Error fetching inovasi Arif", e);
        return [];
    }
}

export async function getInovasiGithub(): Promise<Inovasi[]> {
    try {
        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(process.cwd(), 'data', 'github_inovasi.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);
        return data as Inovasi[];
    } catch(e) {
        console.error("Error reading github inovasi", e);
        return [];
    }
}
