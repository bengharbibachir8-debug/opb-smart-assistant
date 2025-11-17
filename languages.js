// نظام اللغات المتقدم مع التخزين التلقائي
const translations = {
    ar: {
        welcome: "مرحباً بكم في فندق OBP",
        subtitle: "نرحب بكم بعد رحلة السفر الطويلة",
        company: "اسم الشركة",
        office: "رقم الغرفة", 
        next: "ابدأ الرحلة",
        destination: "وجهتك",
        distance: "المسافة",
        steps: "خطوة",
        showMap: "عرض الخريطة",
        yourPath: "مسارك إلى الغرفة",
        reception: "قاعة الاستقبال",
        terrace: "الطيراس",
        building: "مبنى",
        back: "رجوع",
        required: "الرجاء إدخال كل المعلومات",
        relax: "استرح، نحن نرشدك",
        room: "الغرفة",
        welcomeBack: "مرحباً بعودتك"
    },
    en: {
        welcome: "Welcome to OBP Hotel",
        subtitle: "We welcome you after your long journey",
        company: "Company Name",
        office: "Room Number",
        next: "Start Journey", 
        destination: "Your Destination",
        distance: "Distance",
        steps: "steps",
        showMap: "Show Map",
        yourPath: "Your Path to Room",
        reception: "Reception Hall",
        terrace: "Terrace",
        building: "Building",
        back: "Back",
        required: "Please enter all information",
        relax: "Relax, we guide you",
        room: "Room",
        welcomeBack: "Welcome Back"
    },
    zh: {
        welcome: "欢迎来到OBP酒店",
        subtitle: "长途旅行后，我们热烈欢迎您",
        company: "公司名称",
        office: "房间号码",
        next: "开始旅程",
        destination: "您的目的地", 
        distance: "距离",
        steps: "步",
        showMap: "显示地图",
        yourPath: "前往房间的路径",
        reception: "接待大厅",
        terrace: "露台",
        building: "大楼",
        back: "返回",
        required: "请输入所有信息",
        relax: "放松，我们为您指引",
        room: "房间",
        welcomeBack: "欢迎回来"
    }
};

// الحصول على اللغة المحفوظة أو استخدام العربية كافتراضي
let currentLang = localStorage.getItem('obp_language') || 'zh';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('obp_language', lang);
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
    
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        element.placeholder = t(key);
    });
}

// تطبيق اللغة تلقائياً عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
});
