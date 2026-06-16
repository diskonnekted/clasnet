process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function testArif() {
  try {
    const res = await fetch('https://arifsusilo.com/wp-json/wp/v2/posts?_embed=true&per_page=5');
    const data = await res.json();
    console.log('Arif API length:', data.length);
    if (data.length > 0) {
        console.log('Title:', data[0].title.rendered);
        console.log('Link:', data[0].link);
    }
  } catch(e) { console.error(e.message); }
}
testArif();
