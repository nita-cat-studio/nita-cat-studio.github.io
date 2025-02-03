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
const I18N_CONFIG = {
    DEFAULT_LANG: 'en',
    STORAGE_KEY: 'preferred-language',
    SUPPORTED_LANGS: ['en', 'zh']
};

/**
 * I18nManager - Handles internationalization of the website
 * Manages language switching, content updates, and persistence
 */
class I18nManager {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.translations = translations; // from existing translations object
        this.metaTranslations = metaTranslations; // from existing metaTranslations object
    }

    getInitialLanguage() {
        return localStorage.getItem(I18N_CONFIG.STORAGE_KEY) || I18N_CONFIG.DEFAULT_LANG;
    }

    updateContent() {
        this.updateMetaTags();
        this.updatePageContent();
    }

    updateMetaTags() {
        const meta = this.metaTranslations[this.currentLang];
        Object.entries(meta).forEach(([key, value]) => {
            this.updateMetaTag(key, value);
        });
    }

    updateMetaTag(key, value) {
        const selector = key.startsWith('og:') ? `meta[property="${key}"]` : `meta[name="${key}"]`;
        document.querySelector(selector)?.setAttribute('content', value);
    }

    updatePageContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[this.currentLang][key];
            if (translation) element.textContent = translation;
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem(I18N_CONFIG.STORAGE_KEY, this.currentLang);
        this.updateContent();
    }

    init() {
        this.updateContent();
        document.getElementById('langToggle')?.addEventListener('click', () => this.toggleLanguage());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const i18n = new I18nManager();
    i18n.init();
});