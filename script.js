let coinCount = 100; // Jumlah koin awal
const gachaCost = 10; // Biaya koin untuk sekali gacha
let inventory = [];

const items = [
    { name: "Common Item", image: "common.png", rarity: "common", price: 10 },
    { name: "Uncommon Item", image: "uncommon.png", rarity: "uncommon", price: 20 },
    { name: "Rare Item", image: "rare.png", rarity: "rare", price: 50 },
    { name: "Epic Item", image: "epic.png", rarity: "epic", price: 100 },
    { name: "Legendary Item", image: "legendary.png", rarity: "legendary", price: 200 }
];

document.getElementById('coinCount').textContent = coinCount;

document.getElementById('gachaButton').addEventListener('click', function() {
    if (coinCount >= gachaCost) {
        coinCount -= gachaCost;
        document.getElementById('coinCount').textContent = coinCount;
        performGacha(); // Panggil fungsi gacha
    } else {
        alert("Koin tidak cukup! Silakan tambah koin.");
    }
});

document.getElementById('addCoins').addEventListener('click', function() {
    addCoins(50); // Tambah 50 koin
});

function performGacha() {
    const resultIndex = Math.floor(Math.random() * items.length);
    const resultItem = items[resultIndex];

    // Tambahkan item ke inventory
    inventory.push(resultItem);
    updateInventoryDisplay();

    document.getElementById('result').textContent = `You got: ${resultItem.name}`;
    document.getElementById('resultImage').src = resultItem.image;

    // Tampilkan modal hasil
    showModal();
}

function updateInventoryDisplay() {
    const inventoryList = document.getElementById('inventory');
    inventoryList.innerHTML = ""; // Kosongkan inventory sebelum menambahkan item baru

    inventory.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.rarity} - ${item.price} Coins`;
        listItem.classList.add('inventory-item');
        
        const sellButton = document.createElement('button');
        sellButton.textContent = "Sell";
        sellButton.classList.add('sell-button');
        sellButton.addEventListener('click', () => sellItem(index));
        
        listItem.appendChild(sellButton);
        inventoryList.appendChild(listItem);
    });
}

function sellItem(index) {
    const soldItem = inventory.splice(index, 1)[0]; // Hapus item dari inventory dan simpan
    coinCount += soldItem.price; // Tambah koin berdasarkan harga item
    document.getElementById('coinCount').textContent = coinCount;
    updateInventoryDisplay(); // Perbarui tampilan inventory
}

function addCoins(amount) {
    coinCount += amount;
    document.getElementById('coinCount').textContent = coinCount;
    alert(`Anda telah menambahkan ${amount} koin!`);
}

function showModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = "block";
}

// Event listener untuk menutup modal
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('resultModal');
    modal.style.display = "none";
});
// Menutup modal saat klik di luar konten modal
window.addEventListener('click', function(event) {
    const modal = document.getElementById('resultModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
