// Translation definitions for website title and meta information
const metaTranslations = {
  'zh': {
    'page.title': 'Nitacat - 開發者與創作者的數位空間',
    'meta.description': '專業開發作品集、技術部落格與創意內容平台',
    'meta.og.title': 'Nitacat - 開發者與創作者的數位空間',
    'meta.og.description': '專業開發作品集、技術部落格與創意內容平台'
  },
  'en': {
    'page.title': 'Nitacat - Digital Space for Developers and Creators',
    'meta.description': 'Professional development portfolio, technical blog, and creative content platform',
    'meta.og.title': 'Nitacat - Digital Space for Developers and Creators',
    'meta.og.description': 'Professional development portfolio, technical blog, and creative content platform'
  }
};

// Translation definitions for page content
const translations = {
    'en': {
        'hero.title': 'Welcome to Nita Cat Studio',
        'hero.subtitle': 'Professional Web Development Solutions',
        'domains.dev.title': 'dev.nitacat.com',
        'domains.dev.description': 'Development documentation and technical resources',
        'domains.demo.title': 'demo.nitacat.com',
        'domains.demo.description': 'Project demonstrations and showcases',
        'contact.title': 'Contact Us',
        'contact.email': 'Email: contact@nitacat.com',
        'common.visit': 'Visit Site',
        'contact.emailLabel': 'Email'
    },
    'zh': {
        'hero.title': '歡迎來到 Nita Cat Studio',
        'hero.subtitle': '專業網頁開發解決方案',
        'domains.dev.title': 'dev.nitacat.com',
        'domains.dev.description': '開發文件與技術資源',
        'domains.demo.title': 'demo.nitacat.com',
        'domains.demo.description': '專案展示與示範',
        'contact.title': '聯絡我們',
        'contact.email': 'Email: contact@nitacat.com',
        'common.visit': '造訪網站',
        'contact.emailLabel': '電子郵件'
    }
};

// Default language setting and local storage key
const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'preferred-language';

/**
 * I18nManager - Handles internationalization of the website
 * Manages language switching, content updates, and persistence
 */
class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        this.bindEvents();
    }

    /**
     * Updates all meta tags with translated content
     * @param {string} lang - Target language code
     */
    updateMetaTags(lang) {
        const meta = metaTranslations[lang];
        document.title = meta['page.title'];
        this.updateMetaContent('description', meta['meta.description']);
        this.updateMetaContent('og:title', meta['meta.og.title'], 'property');
        this.updateMetaContent('og:description', meta['meta.og.description'], 'property');
    }

    /**
     * Updates specific meta tag content
     * @param {string} name - Meta tag name or property
     * @param {string} content - New content value
     * @param {string} attr - Attribute type (name or property)
     */
    updateMetaContent(name, content, attr = 'name') {
        document.querySelector(`meta[${attr}="${name}"]`)?.setAttribute('content', content);
    }

    /**
     * Updates all translatable page content
     * @param {string} lang - Target language code
     */
    updatePageContent(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    /**
     * Toggles between available languages
     */
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem(STORAGE_KEY, this.currentLang);
        this.updateContent();
    }

    /**
     * Updates all content based on current language
     */
    updateContent() {
        this.updateMetaTags(this.currentLang);
        this.updatePageContent(this.currentLang);
    }

    /**
     * Binds event listeners for language switching
     */
    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateContent();
            document.getElementById('langToggle')?.addEventListener('click', 
                () => this.toggleLanguage());
        });
    }
}

// Initialize I18n manager instance
const i18nManager = new I18nManager();