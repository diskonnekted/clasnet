process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const urls = [
        'https://clasnet.co.id/uploads/6834f30d1c644.png',
        'https://sid.clasnet.co.id/uploads/6834f30d1c644.png',
        'https://clasnet.co.id/admin/uploads/6834f30d1c644.png'
    ];
    for (const url of urls) {
        const res = await fetch(url, { method: 'HEAD' });
        console.log(url, res.status);
    }
}
test();
