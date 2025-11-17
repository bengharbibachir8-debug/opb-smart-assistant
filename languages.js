const translations = {
    ar: {
        welcome: "مرحباً بك في نظام التوجيه الذكي",
        company: "اسم الشركة",
        office: "رقم المكتب", 
        next: "التالي",
        destination: "وجهتك",
        distance: "المسافة",
        steps: "خطوة",
        showMap: "عرض الخريطة",
        yourPath: "مسارك",
        reception: "الاستقبال",
        terrace: "الطيراس",
        building: "مبنى",
        back: "رجوع",
        required: "الرجاء إدخال كل المعلومات"
    },
    en: {
        welcome: "Welcome to Smart Navigation System",
        company: "Company Name",
        office: "Office Number",
        next: "Next",
        destination: "Your Destination", 
        distance: "Distance",
        steps: "steps",
        showMap: "Show Map",
        yourPath: "Your Path",
        reception: "Reception",
        terrace: "Terrace",
        building: "Building",
        back: "Back",
        required: "Please enter all information"
    },
    zh: {
        welcome: "欢迎使用智能导航系统",
        company: "公司名称",
        office: "办公室号码",
        next: "下一步",
        destination: "您的目的地",
        distance: "距离", 
        steps: "步",
        showMap: "显示地图",
        yourPath: "您的路径",
        reception: "接待处",
        terrace: "露台",
        building: "大楼",
        back: "返回",
        required: "请输入所有信息"
    }
};

let currentLang = 'ar';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
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
    
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        element.placeholder = t(key);
    });
}
