async function test() {
    try {
        const res = await fetch('https://clasnet.co.id/ajax.php', { method: 'POST', body: 'page=1' });
        console.log(res.status);
    } catch(e) {
        console.error(e.message);
    }
}
test();
