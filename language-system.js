// language-system.js - نظام موحد للغات
const translations = {
    ar: {
        welcomeTitle: "مرحباً بكم في OBP",
        welcomeSubtitle: "نظام التوجيه الذكي لراحتكم",
        mainTitle: "ابحث عن وجهتك بسهولة",
        mainDescription: "بعد رحلة السفر الطويلة، نظامنا الذكي سيرشدك إلى مكتبك في المجمع بدقة وسهولة. اختر لغتك المفضلة وابدأ رحلتك.",
        startButton: "ابدأ الرحلة"
    },
    en: {
        welcomeTitle: "Welcome to OBP",
        welcomeSubtitle: "Smart Navigation System for Your Comfort",
        mainTitle: "Find Your Destination Easily",
        mainDescription: "After your long journey, our smart system will guide you to your office in the complex with accuracy and ease. Choose your preferred language and start your journey.",
        startButton: "Start Journey"
    },
    zh: {
        welcomeTitle: "欢迎来到OBP",
        welcomeSubtitle: "智能导航系统，让您舒适安心",
        mainTitle: "轻松找到您的目的地",
        mainDescription: "长途旅行后，我们的智能系统将准确轻松地引导您到园区内的办公室。选择您喜欢的语言，开始您的旅程。",
        startButton: "开始旅程"
    }
};

let currentLang = 'ar';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('obp_language', lang);
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    applyTranslations();
}

function t(key) {
    return translations[currentLang][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = t(key);
    });
    
    // تطبيق على العناصر ذات ID
    for (const [key, value] of Object.entries(translations[currentLang])) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
}

// تطبيق تلقائي عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
});
