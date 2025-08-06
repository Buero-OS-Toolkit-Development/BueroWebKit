document.addEventListener("DOMContentLoaded", function() {
    const flyIn = document.querySelectorAll('.fly-in-text');
    flyIn.forEach(el => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 300);
    });
});