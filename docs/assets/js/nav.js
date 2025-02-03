// Breakpoint for mobile menu visibility
const MOBILE_BREAKPOINT = 768;

// Constants
const THEME = {
    KEY: 'color-theme',
    DARK: 'dark',
    LIGHT: 'light'
};

// Theme management class
class ThemeManager {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.setTheme(this.getPreferredTheme());
        this.bindEvents();
    }

    getPreferredTheme() {
        return localStorage.getItem(THEME.KEY) || 
               (window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT);
    }

    setTheme(theme) {
        document.documentElement.classList.remove(THEME.DARK, THEME.LIGHT);
        document.documentElement.classList.add(theme);
        localStorage.setItem(THEME.KEY, theme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.classList.contains(THEME.DARK) ? THEME.DARK : THEME.LIGHT;
        this.setTheme(currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
    }

    bindEvents() {
        document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => new ThemeManager());

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