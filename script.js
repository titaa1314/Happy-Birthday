// JavaScript untuk animasi
document.addEventListener('DOMContentLoaded', () => {
    // Membuat animasi bunga dandelion jatuh
    const dandelionContainer = document.querySelector('.dandelion-animation');
    
    for (let i = 0; i < 30; i++) {
        let dandelion = document.createElement('div');
        dandelion.className = 'dandelion';
        dandelion.style.left = `${Math.random() * 100}vw`;
        dandelion.style.animationDuration = `${Math.random() * 10 + 10}s`;
        dandelionContainer.appendChild(dandelion);
    }

    // Animasi kecepatan saat di-scroll
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        dandelionContainer.style.animationPlayState = scrollPos > 100 ? 'running' : 'paused';
    });

    // Menampilkan pesan setelah scroll ke bawah
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            document.getElementById('scroll-message').textContent = 'Tú eres mi por siempre y para siempre';
            document.getElementById('scroll-message').style.display = 'block';
        }
    });
});