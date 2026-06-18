const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('public/uploads/clasnet group.html', 'utf8');
const $ = cheerio.load(html);

// Remove elements that duplicate the main app's layout
$('#spinner').remove();
$('.bg-dark.d-lg-block').remove(); // Topbar
$('.navbar').remove();
$('#header-carousel').parent().remove(); // Carousel and its container
$('#header-carousel').remove(); 
$('.bg-dark.text-light.mt-5').remove(); // Footer
$('.text-white[style*="background: #061429"]').remove(); // Copyright
$('.back-to-top').remove();

// Inject iframe resizer script
$('body').append(`
<script>
  function sendHeight() {
    window.parent.postMessage({ type: 'legacy-resize', height: document.documentElement.scrollHeight }, '*');
  }
  window.onload = sendHeight;
  window.addEventListener('resize', sendHeight);
  if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(sendHeight).observe(document.body, { childList: true, subtree: true, attributes: true });
  }
</script>
<style>
  body { overflow: hidden; background: transparent; }
</style>
`);

// Save
fs.writeFileSync('public/legacy-content.html', $.html());
console.log('Legacy HTML processed successfully.');
