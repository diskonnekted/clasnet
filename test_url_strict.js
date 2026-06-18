async function test() {
    try {
        const res = await fetch('https://clasnet.co.id/uploads/6834f30d1c644.png', { method: 'HEAD' });
        console.log(res.status);
    } catch (e) {
        console.log("Error:", e.message);
    }
}
test();
