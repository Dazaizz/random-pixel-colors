function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createPixelGrid() {
    const pixelGrid = document.getElementById('pixel-grid');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelSize = 10;
    const cols = Math.floor(width / pixelSize);
    const rows = Math.floor(height / pixelSize);

    for (let i = 0; i < cols * rows; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = getRandomColor();
        pixelGrid.appendChild(pixel);
    }
}

window.onload = createPixelGrid;
window.onresize = () => location.reload();
