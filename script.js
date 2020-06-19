const container = document.querySelector('.container')
const whiteSection = container.querySelector('.white')
const blackSection = container.querySelector('.black')
window.addEventListener('mousemove', (event) =>
{
    setTimeout(() => {
        whiteSection.style.width = `${event.x/innerWidth * 100}%`
    }, 200);
})