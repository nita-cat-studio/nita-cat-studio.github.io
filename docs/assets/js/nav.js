// Breakpoint for mobile menu visibility
const MOBILE_BREAKPOINT = 768;

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