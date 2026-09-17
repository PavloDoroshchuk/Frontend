document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.toggle-btn');

    if (!themeToggleBtn) return;

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggleBtn.setAttribute('aria-pressed', String(isDark));
    });
});