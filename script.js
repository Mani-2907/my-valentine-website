// Play audio on first user interaction
const audio = document.querySelector('audio');
document.addEventListener('click', () => {
    if (audio && audio.paused) {
        audio.play().catch(err => console.log('Audio play failed:', err));
    }
}, { once: true });

const photoInput = document.getElementById('photoInput');
const photoDisplay = document.getElementById('photoDisplay');

photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            photoDisplay.innerHTML = '';
            photoDisplay.appendChild(img);
            photoInput.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

const button = document.getElementById('heart');

button.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️❤️❤️';
        heart.className = 'falling-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
});
