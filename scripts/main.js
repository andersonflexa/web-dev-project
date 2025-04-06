document.getElementById('lang-pt').addEventListener('click', () => {
    alert('Idioma alterado para Português');
});

document.getElementById('lang-en').addEventListener('click', () => {
    alert('Language switched to English');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
