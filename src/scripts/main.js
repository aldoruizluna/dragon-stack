// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i><span class="ml-2">Theme</span>';
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i><span class="ml-2">Theme</span>';
        localStorage.setItem('theme', 'dark');
    }
}

// Language Toggle
const langToggleBtn = document.getElementById('lang-toggle');
const currentLangSpan = document.getElementById('current-lang');
const enElements = document.querySelectorAll('.lang-en');
const esElements = document.querySelectorAll('.lang-es');

function toggleLanguage() {
    if (currentLangSpan.textContent === 'EN') {
        currentLangSpan.textContent = 'ES';
        enElements.forEach(el => el.classList.add('hidden-lang'));
        esElements.forEach(el => el.classList.remove('hidden-lang'));
        localStorage.setItem('language', 'es');
    } else {
        currentLangSpan.textContent = 'EN';
        esElements.forEach(el => el.classList.add('hidden-lang'));
        enElements.forEach(el => el.classList.remove('hidden-lang'));
        localStorage.setItem('language', 'en');
    }
}

// Initialize theme and language from localStorage
function initApp() {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i><span class="ml-2">Theme</span>';
    }

    // Language initialization
    const savedLanguage = localStorage.getItem('language') || 'en';
    if (savedLanguage === 'es') {
        currentLangSpan.textContent = 'ES';
        enElements.forEach(el => el.classList.add('hidden-lang'));
        esElements.forEach(el => el.classList.remove('hidden-lang'));
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initApp);
themeToggleBtn.addEventListener('click', toggleTheme);
langToggleBtn.addEventListener('click', toggleLanguage);

// Add any additional interactive components here
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('ring-2');
        card.classList.toggle('ring-primary');
    });
});
