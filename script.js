// Animate skill bars on load
window.onload = function() {
    document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
    });
};
