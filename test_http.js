async function test() {
    try {
        const res = await fetch('http://clasnet.co.id/uploads/6834f30d1c644.png', { method: 'HEAD' });
        console.log("HTTP status:", res.status);
    } catch (e) {
        console.log("HTTP Error:", e.message);
    }
}
test();
