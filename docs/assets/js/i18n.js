// 定義網站標題和 meta 資訊的翻譯
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

// 定義頁面內容的翻譯
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

const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'preferred-language';

class I18nManager {
    constructor() {
        this.currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        this.bindEvents();
    }

    updateMetaTags(lang) {
        const meta = metaTranslations[lang];
        document.title = meta['page.title'];
        this.updateMetaContent('description', meta['meta.description']);
        this.updateMetaContent('og:title', meta['meta.og.title'], 'property');
        this.updateMetaContent('og:description', meta['meta.og.description'], 'property');
    }

    updateMetaContent(name, content, attr = 'name') {
        document.querySelector(`meta[${attr}="${name}"]`)?.setAttribute('content', content);
    }

    updatePageContent(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem(STORAGE_KEY, this.currentLang);
        this.updateContent();
    }

    updateContent() {
        this.updateMetaTags(this.currentLang);
        this.updatePageContent(this.currentLang);
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.updateContent();
            document.getElementById('langToggle')?.addEventListener('click', 
                () => this.toggleLanguage());
        });
    }
}

// 初始化 I18n 管理器
const i18nManager = new I18nManager();