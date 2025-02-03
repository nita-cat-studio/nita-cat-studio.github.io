// Translation definitions for website title and meta information
const metaTranslations = {
  'zh': {
    'page.title': 'Nita Cat Studio - 專業網頁開發',
    'meta.description': '獨立開發者的接案服務與作品展示',
    'meta.og.title': 'Nita Cat Studio - 專業網頁開發',
    'meta.og.description': '獨立開發者的接案服務與作品展示'
  },
  'en': {
    'page.title': 'Nita Cat Studio - Professional Web Development',
    'meta.description': 'Freelance Developer\'s Portfolio & Services',
    'meta.og.title': 'Nita Cat Studio - Professional Web Development',
    'meta.og.description': 'Freelance Developer\'s Portfolio & Services'
  }
};

// Translation definitions for page content
const translations = {
    'en': {
        'hero.title': 'Hi, I\'m a Freelance Developer',
        'hero.subtitle': 'Crafting Professional Web Solutions',
        'hero.cta': 'Explore My Work',
        'domains.title': 'My Services',
        'domains.subtitle': 'Professional development services and project showcases',
        'domains.dev.title': 'Professional Portfolio',
        'domains.dev.description': 'Technical resume, project portfolio, and consulting services',
        'domains.demo.title': 'Project Demos',
        'domains.demo.description': 'Live demonstrations of completed projects',
        'contact.title': 'Get in Touch',
        'contact.email': 'Email: contact@nitacat.com',
        'common.visit': 'Visit',
        'contact.emailLabel': 'Email'
    },
    'zh': {
        'hero.title': '專業網站開發與技術顧問',
        'hero.subtitle': '打造專業網頁解決方案',
        'hero.cta': '探索作品',
        'domains.title': '我的服務',
        'domains.subtitle': '專業開發服務與專案展示',
        'domains.dev.title': '專業作品集',
        'domains.dev.description': '技術履歷、專案作品與諮詢服務',
        'domains.demo.title': '專案展示',
        'domains.demo.description': '已完成專案的實際運行展示',
        'contact.title': '與我聯絡',
        'contact.email': 'Email: contact@nitacat.com',
        'common.visit': '前往',
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