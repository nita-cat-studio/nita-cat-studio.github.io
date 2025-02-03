// Breakpoint for mobile menu visibility
const MOBILE_BREAKPOINT = 768;

// Theme management
const THEME_KEY = 'color-theme';
const DARK = 'dark';
const LIGHT = 'light';

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
}

function setTheme(theme) {
    document.documentElement.classList.remove(DARK, LIGHT);
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update logo based on theme
    const logo = document.getElementById('siteLogo');
    if (logo) {
        logo.src = theme === DARK 
            ? 'assets/images/logo-white.png'
            : 'assets/images/logo-black.png';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains(DARK) ? DARK : LIGHT;
    const newTheme = currentTheme === DARK ? LIGHT : DARK;
    setTheme(newTheme);
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    setTheme(getPreferredTheme());
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
});

/**
 * Toggles the mobile menu visibility state
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
}

/**
 * Handles responsive behavior when window is resized
 * Hides mobile menu when viewport exceeds mobile breakpoint
 */
window.addEventListener('resize', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
        mobileMenu.classList.add('hidden');
    }
});