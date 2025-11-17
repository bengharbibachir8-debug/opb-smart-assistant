// ai-assistant.js - المساعد الذكي أيفا لـ OBP
class AIAssistant {
    constructor() {
        this.name = "أيفا";
        this.knowledgeBase = this.initializeKnowledgeBase();
        this.conversationHistory = [];
    }

    // قاعدة المعرفة من موقع OBP.dz
    initializeKnowledgeBase() {
        return {
            greetings: {
                patterns: ['مرحبا', 'اهلا', 'السلام', 'hello', 'hi', '你好', '嗨'],
                responses: {
                    ar: ['مرحباً بك! كيف يمكنني مساعدتك اليوم؟', 'أهلاً وسهلاً! أنا أيفا، مساعدتك الذكية في OBP'],
                    en: ['Hello! How can I assist you today?', 'Welcome! I am Eva, your smart assistant at OBP'],
                    zh: ['你好！今天我能为您提供什么帮助？', '欢迎！我是伊娃，您在OBP的智能助手']
                }
            },

            buildings: {
                patterns: ['مباني', 'مبنى', 'بناء', 'buildings', 'building', '大楼', '建筑'],
                responses: {
                    ar: [
                        'مجمع OBP يتكون من 4 مباني رئيسية:\n\n🏢 **المبنى A** - المكاتب الإدارية\n🏢 **المبنى B** - قاعات الاجتماعات\n🏢 **المبنى C** - المعامل والتجارب\n🏢 **المبنى D** - الغرف والسكن\n\nأي مبنى تريد معرفة المزيد عنه؟'
                    ],
                    en: [
                        'OBP complex consists of 4 main buildings:\n\n🏢 **Building A** - Administrative offices\n🏢 **Building B** - Meeting halls\n🏢 **Building C** - Laboratories and experiments\n🏢 **Building D** - Rooms and accommodation\n\nWhich building would you like to know more about?'
                    ],
                    zh: [
                        'OBP园区由4座主要建筑组成：\n\n🏢 **大楼 A** - 行政办公室\n🏢 **大楼 B** - 会议室\n🏢 **大楼 C** - 实验室和实验区\n🏢 **大楼 D** - 房间和住宿区\n\n您想了解哪座大楼的更多信息？'
                    ]
                }
            },

            navigation: {
                patterns: ['توجيه', 'طريق', 'وصل', 'كيف اذهب', 'navigation', 'direction', '如何到达', '导航'],
                responses: {
                    ar: [
                        'يمكنني توجيهك إلى أي مكان في المجمع! 🗺️\n\n• لبدء التوجيه إلى غرفتك، اضغط على "التوجيه إلى الغرفة"\n• المسافة بين المباني: 35-40 خطوة\n• جميع المسارات مؤرشدة بوضوح\n\nهل تريد البدء في التوجيه الآن؟'
                    ],
                    en: [
                        'I can guide you anywhere in the complex! 🗺️\n\n• To start navigation to your room, click "Navigation to Room"\n• Distance between buildings: 35-40 steps\n• All paths are clearly marked\n\nWould you like to start navigation now?'
                    ],
                    zh: [
                        '我可以引导您到园区的任何地方！🗺️\n\n• 要开始导航到您的房间，请点击"导航到房间"\n• 楼宇之间的距离：35-40步\n• 所有路径都有清晰标记\n\n您现在想开始导航吗？'
                    ]
                }
            },

            services: {
                patterns: ['خدمات', 'خدمة', 'service', 'services', '服务', '设施'],
                responses: {
                    ar: [
                        '**خدمات مجمع OBP:**\n\n🛎️ **الخدمات الأساسية:**\n• نظام توجيه ذكي\n• إنترنت مجاني عالي السرعة\n• أمن ومراقبة 24/7\n• مواقف سيارات\n\n🏢 **المرافق:**\n• قاعات اجتماعات مجهزة\n• معامل متطورة\n• مناطق استراحة\n• مكاتب مخصصة\n\n🍽️ **خدمات إضافية:**\n• كافيتيريا\n• خدمات تنظيف\n• صيانة مستمرة\n\nأي خدمة تريد معرفة المزيد عنها؟'
                    ],
                    en: [
                        '**OBP Complex Services:**\n\n🛎️ **Basic Services:**\n• Smart navigation system\n• Free high-speed internet\n• 24/7 security and monitoring\n• Parking facilities\n\n🏢 **Facilities:**\n• Equipped meeting halls\n• Advanced laboratories\n• Rest areas\n• Dedicated offices\n\n🍽️ **Additional Services:**\n• Cafeteria\n• Cleaning services\n• Continuous maintenance\n\nWhich service would you like to know more about?'
                    ],
                    zh: [
                        '**OBP园区服务：**\n\n🛎️ **基本服务：**\n• 智能导航系统\n• 免费高速互联网\n• 24/7安保和监控\n• 停车设施\n\n🏢 **设施：**\n• 配备齐全的会议室\n• 先进实验室\n• 休息区\n• 专用办公室\n\n🍽️ **附加服务：**\n• 自助餐厅\n• 清洁服务\n• 持续维护\n\n您想了解哪项服务的更多信息？'
                    ]
                }
            },

            help: {
                patterns: ['مساعدة', 'ساعد', 'help', 'support', '帮助', '支持'],
                responses: {
                    ar: [
                        '**كيف يمكنني مساعدتك؟** 🤔\n\n📍 **للتوجيه:** اطلب "أريد التوجيه إلى غرفتي" أو اضغط على زر التوجيه\n🏢 **للمباني:** اسأل عن أي مبنى (A, B, C, D)\n🛎️ **للخدمات:** استفسر عن خدمات المجمع\n🌐 **لللغات:** يمكنني التحدث بالعربية، الإنجليزية، والصينية\n\nما الذي تحتاج مساعدة فيه بالتحديد؟'
                    ],
                    en: [
                        '**How can I help you?** 🤔\n\n📍 **For navigation:** Say "I need navigation to my room" or click the navigation button\n🏢 **For buildings:** Ask about any building (A, B, C, D)\n🛎️ **For services:** Inquire about complex services\n🌐 **For languages:** I can speak Arabic, English, and Chinese\n\nWhat do you need help with specifically?'
                    ],
                    zh: [
                        '**我如何帮助您？** 🤔\n\n📍 **导航：** 说"我需要导航到我的房间"或点击导航按钮\n🏢 **大楼：** 询问任何大楼（A、B、C、D）\n🛎️ **服务：** 咨询园区服务\n🌐 **语言：** 我会说阿拉伯语、英语和中文\n\n您具体需要什么帮助？'
                    ]
                }
            },

            buildingDetails: {
                A: {
                    ar: '**المبنى A - المكاتب الإدارية**\n🏢 الطابق الأرضي: الاستقبال الرئيسي\n🏢 الطابق الأول: الإدارة التنفيذية\n🏢 الطابق الثاني: المكاتب الإدارية\n• المسافة من الاستقبال: 35 خطوة على اليسار',
                    en: '**Building A - Administrative Offices**\n🏢 Ground floor: Main reception\n🏢 First floor: Executive management\n🏢 Second floor: Administrative offices\n• Distance from reception: 35 steps to the left',
                    zh: '**大楼 A - 行政办公室**\n🏢 底层：主接待处\n🏢 一楼：行政管理\n🏢 二楼：行政办公室\n• 距离接待处：向左35步'
                },
                B: {
                    ar: '**المبنى B - قاعات الاجتماعات**\n🏢 قاعة الاجتماعات الرئيسية (100 شخص)\n🏢 قاعات صغيرة للاجتماعات (10-20 شخص)\n🏢 منطقة استراحة\n• المسافة من المبنى A: 35 خطوة على اليمين',
                    en: '**Building B - Meeting Halls**\n🏢 Main meeting hall (100 people)\n🏢 Small meeting rooms (10-20 people)\n🏢 Rest area\n• Distance from Building A: 35 steps to the right',
                    zh: '**大楼 B - 会议室**\n🏢 主会议室（100人）\n🏢 小型会议室（10-20人）\n🏢 休息区\n• 距离大楼 A：向右35步'
                },
                C: {
                    ar: '**المبنى C - المعامل والتجارب**\n🏢 معامل الأبحاث المتطورة\n🏢 مناطق التجارب العملية\n🏢 غرف التحكم والمراقبة\n• المسافة من المبنى B: 35 خطوة على اليسار',
                    en: '**Building C - Laboratories and Experiments**\n🏢 Advanced research laboratories\n🏢 Practical experiment areas\n🏢 Control and monitoring rooms\n• Distance from Building B: 35 steps to the left',
                    zh: '**大楼 C - 实验室和实验区**\n🏢 先进研究实验室\n🏢 实践实验区\n🏢 控制和监控室\n• 距离大楼 B：向左35步'
                },
                D: {
                    ar: '**المبنى D - الغرف والسكن**\n🏢 غرف النوم والمبيت\n🏢 مناطق الاستراحة الشخصية\n🏢 مرافق الحياة اليومية\n• المسافة من المبنى C: 35 خطوة على اليمين',
                    en: '**Building D - Rooms and Accommodation**\n🏢 Bedrooms and lodging\n🏢 Personal rest areas\n🏢 Daily life facilities\n• Distance from Building C: 35 steps to the right',
                    zh: '**大楼 D - 房间和住宿区**\n🏢 卧室和住宿\n🏢 个人休息区\n🏢 日常生活设施\n• 距离大楼 C：向右35步'
                }
            },

            fallback: {
                responses: {
                    ar: ['عذراً، لم أفهم سؤالك بالكامل. يمكنني المساعدة في:\n• التوجيه إلى المباني والغرف\n• معلومات عن خدمات OBP\n• شرح نظام المجمع\n\nكيف يمكنني مساعدتك؟'],
                    en: ['Sorry, I didn\'t fully understand your question. I can help with:\n• Navigation to buildings and rooms\n• Information about OBP services\n• Explanation of the complex system\n\nHow can I assist you?'],
                    zh: ['抱歉，我没有完全理解您的问题。我可以帮助：\n• 导航到大楼和房间\n• 关于OBP服务的信息\n• 解释园区系统\n\n我如何帮助您？']
                }
            }
        };
    }

    // معالجة الرسالة من المستخدم
    processMessage(userMessage, language = 'ar') {
        const message = userMessage.toLowerCase().trim();
        this.conversationHistory.push({ type: 'user', content: userMessage, lang: language });

        // البحث في قاعدة المعرفة
        let response = this.findResponse(message, language);
        
        // حفظ رد المساعد في السجل
        this.conversationHistory.push({ type: 'ai', content: response, lang: language });
        
        return response;
    }

    // البحث عن رد مناسب
    findResponse(message, language) {
        // التحقق من التحية
        if (this.isGreeting(message)) {
            return this.getRandomResponse(this.knowledgeBase.greetings.responses[language]);
        }

        // التحقق من طلب التوجيه
        if (this.isNavigationRequest(message)) {
            return this.getRandomResponse(this.knowledgeBase.navigation.responses[language]);
        }

        // التحقق من طلب المباني
        if (this.isBuildingRequest(message)) {
            // البحث عن مبنى محدد
            const buildingMatch = message.match(/(a|b|c|d|مبنى|building|大楼)/i);
            if (buildingMatch) {
                const buildingChar = this.extractBuildingChar(message);
                if (buildingChar && this.knowledgeBase.buildingDetails[buildingChar]) {
                    return this.knowledgeBase.buildingDetails[buildingChar][language];
                }
            }
            return this.getRandomResponse(this.knowledgeBase.buildings.responses[language]);
        }

        // التحقق من طلب الخدمات
        if (this.isServiceRequest(message)) {
            return this.getRandomResponse(this.knowledgeBase.services.responses[language]);
        }

        // التحقق من طلب المساعدة
        if (this.isHelpRequest(message)) {
            return this.getRandomResponse(this.knowledgeBase.help.responses[language]);
        }

        // رد افتراضي
        return this.getRandomResponse(this.knowledgeBase.fallback.responses[language]);
    }

    // أدوات مساعدة
    isGreeting(message) {
        return this.knowledgeBase.greetings.patterns.some(pattern => 
            message.includes(pattern.toLowerCase())
        );
    }

    isNavigationRequest(message) {
        return this.knowledgeBase.navigation.patterns.some(pattern => 
            message.includes(pattern.toLowerCase())
        );
    }

    isBuildingRequest(message) {
        return this.knowledgeBase.buildings.patterns.some(pattern => 
            message.includes(pattern.toLowerCase())
        ) || /(a|b|c|d|مبنى|building|大楼)/i.test(message);
    }

    isServiceRequest(message) {
        return this.knowledgeBase.services.patterns.some(pattern => 
            message.includes(pattern.toLowerCase())
        );
    }

    isHelpRequest(message) {
        return this.knowledgeBase.help.patterns.some(pattern => 
            message.includes(pattern.toLowerCase())
        );
    }

    extractBuildingChar(message) {
        const buildingMatch = message.match(/(a|b|c|d)/i);
        return buildingMatch ? buildingMatch[0].toUpperCase() : null;
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // الحصول على سجل المحادثة
    getConversationHistory() {
        return this.conversationHistory;
    }

    // مسح سجل المحادثة
    clearConversationHistory() {
        this.conversationHistory = [];
    }
}

// إنشاء نسخة عالمية من المساعد
const evaAssistant = new AIAssistant();

// وظائف التفاعل مع الواجهة
function addMessage(type, content) {
    const chatContainer = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const avatar = type === 'ai' ? 
        '<div class="avatar"><i class="fas fa-robot"></i></div>' : 
        '<div class="avatar"><i class="fas fa-user"></i></div>';
    
    messageDiv.innerHTML = `
        ${avatar}
        <div class="content">${content.replace(/\n/g, '<br>')}</div>
    `;
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // إضافة رسالة المستخدم
    addMessage('user', message);
    input.value = '';
    
    // معالجة الرسالة والحصول على الرد
    setTimeout(() => {
        const response = evaAssistant.processMessage(message, currentLang);
        addMessage('ai', response);
    }, 1000);
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('مساعد أيفا الذكي جاهز للعمل!');
});
