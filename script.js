function getRandomResult() {
    const results = [
        "Khodam Burung Puyuh", "Khodam Harimau", "Khodam Naga", "Khodam Kuda",
        "Khodam Elang", "sempak mamel", "kripik kaca", "kang asep", "sop buntut",
        "laba-laba sunda", "manuk dadali", "sempak ronaldo", "sempak gusion",
        "rawa rontek", "kosong", "kosong", "kosong", "kosong", "kosong",
        "belut listrik mas hardin", "skibidi cenat"
    ];
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
}

function main() {
    const form = document.getElementById('khodamForm');
    const welcomeText = document.getElementById('welcomeText');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Mencegah pengiriman formulir secara default

        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim();

        if (name) {
            const result = getRandomResult();
            document.getElementById('result').innerHTML = `Khodam '${name}': ${result}`;
            
            // Menyembunyikan form dan teks selamat datang setelah nama diinput
            form.classList.add('hidden');
            welcomeText.classList.add('hidden');
        }
    });
}

main();