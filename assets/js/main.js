document.addEventListener('DOMContentLoaded', () => {
    // Verwijder welcome screen na animatie
    setTimeout(() => {
        const welcomeScreen = document.querySelector('.welcome-screen');
        welcomeScreen.style.display = 'none';
    }, 3000);

    // Voeg hover effect toe aan skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Share button functionaliteit
    const shareButton = document.getElementById('share-button');
    const shareTooltip = document.getElementById('share-tooltip');

    shareButton.addEventListener('click', async () => {
        try {
            if (navigator.share) {
                // Gebruik Web Share API als beschikbaar
                await navigator.share({
                    title: 'Pascal Koster Portfolio',
                    text: 'Bekijk het portfolio van Pascal Koster!',
                    url: window.location.href
                });
            } else {
                // Fallback: kopieer URL naar klembord
                await navigator.clipboard.writeText(window.location.href);
                
                // Toon tooltip
                shareTooltip.classList.add('show');
                
                // Verberg tooltip na 2 seconden
                setTimeout(() => {
                    shareTooltip.classList.remove('show');
                }, 2000);
            }
        } catch (err) {
            console.error('Delen mislukt:', err);
        }
    });
}); 