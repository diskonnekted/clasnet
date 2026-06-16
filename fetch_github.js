const fs = require('fs');

const repos = [
    "Ujian-Online-AKM", "Simad-Non-CI", "Field-Service-Installation-Management-System", "black-metal-communnity-black-march", "black-march-records-shop", "Otomasi-kantor-Desa", "dasbor-iot-umum", "aplikasi-prakerin", "aplikasi-pbj-desa", "Elementary-School-Website", "dasbor-bencana-alam", "E-Ticketing-Destinasi-Wisata", "Lidar-Load-Scanner", "VPDS-Python-AI-CAM", "LMS-SKB-Banjarnegara", "Sidara---Sistem-Informasi-Database-Potensi-Desa", "Veda-Dashboard-Sijenggung", "Perpustakaan-Dengan-Open-Library", "Go-Lora-EWS-Dashboard", "Orion-Pro-CMS", "Web-Komunitas-Pondokrejo", "verdes", "SintaDes", "TTG-Pondokrejo", "orionpro", "trimulyo-open-library", "next-trimulyo", "jdih", "nxt-sijenggung", "WEB-SMK-Cokroaminoto-2", "tradematch-b2b", "web-smk-bhairava", "OrionVersa-Dashboard-Pro", "Horus", "AI-Predictive-Disaster-MAP", "creazi", "thoth", "portal-klikdesa", "clasnet-prd", "pinjolwatch", "Deteksi-Bencaya-Gempa-Pondokrejo", "next-pondokrejo", "pawon-pondokrejo", "e-farm-melon", "Otomasi-Pertanian-Dengan-IoT-Drone", "ESP32-Flood-Warning-System"
];

async function fetchAll() {
    const results = [];
    // We'll process them in batches or sequentially to avoid rate limit bans if possible, 
    // though github api limits unauth to 60/hr. We have 46 repos. It should exactly fit.
    console.log("Fetching", repos.length, "repos...");
    
    for (let i=0; i<repos.length; i++) {
        const repo = repos[i];
        try {
            const res = await fetch(`https://api.github.com/repos/diskonnekted/${repo}`, {
                headers: {
                    'User-Agent': 'node.js fetch'
                }
            });
            if (res.status === 403) {
                console.log("Rate limited! Stopping.");
                break;
            }
            if (res.ok) {
                const data = await res.json();
                results.push({
                    title: data.name.replace(/-/g, ' '),
                    desc: data.description || "Inovasi dan pengembangan open source dari Clasnet",
                    link: data.html_url,
                    source: 'GitHub',
                    image: '/images/Clasnet Group - Logo Fullcolor.png' // We will use a standard github icon or clasnet logo
                });
                console.log(`[${i+1}/${repos.length}] Fetched: ${repo}`);
            } else {
                console.log(`[${i+1}/${repos.length}] Failed: ${repo} - ${res.status}`);
                // fallback
                results.push({
                    title: repo.replace(/-/g, ' '),
                    desc: "Inovasi dan pengembangan open source dari Clasnet",
                    link: `https://github.com/diskonnekted/${repo}`,
                    source: 'GitHub',
                    image: '/images/Clasnet Group - Logo Fullcolor.png'
                });
            }
        } catch(e) {
            console.log(`[${i+1}/${repos.length}] Error: ${repo}`);
        }
    }
    
    if (!fs.existsSync('./data')) {
        fs.mkdirSync('./data');
    }
    fs.writeFileSync('./data/github_inovasi.json', JSON.stringify(results, null, 2));
    console.log("Done saving to data/github_inovasi.json");
}

fetchAll();
