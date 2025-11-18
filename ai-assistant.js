// ai-assistant.js - المساعدة الذكية لأوبي بي
class OBPAssistant {
    constructor() {
        this.name = "أيفا";
        this.version = "2.0";
        this.isActive = false;
        this.conversationHistory = [];
        this.init();
    }

    init() {
        console.log('🎯 تهيئة المساعد الذكي...');
        this.loadSiteData();
        this.createAssistantUI();
        this.setupEventListeners();
        setTimeout(() => this.showWelcomeMessage(), 500);
    }

    // إنشاء واجهة المساعد ديناميكياً
    createAssistantUI() {
        // زر المساعد العائم
        const assistantBtn = document.createElement('button');
        assistantBtn.id = 'assistantBtn';
        assistantBtn.className = 'assistant-btn';
        assistantBtn.innerHTML = '<i class="fas fa-robot"></i>';
        document.body.appendChild(assistantBtn);

        // لوحة الدردشة
        const assistantPanel = document.createElement('div');
        assistantPanel.id = 'assistantPanel';
        assistantPanel.className = 'assistant-panel';
        assistantPanel.innerHTML = `
            <div class="assistant-header">
                <i class="fas fa-robot"></i>
                <h3>مساعد OBP الذكي - ${this.name}</h3>
                <button class="close-btn" id="closeAssistant">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chat-messages" id="chatMessages"></div>
            <div class="chat-input">
                <input type="text" id="questionInput" placeholder="اكتب سؤالك هنا..." autocomplete="off">
                <button id="sendQuestion">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        document.body.appendChild(assistantPanel);
    }

    // بيانات الموقع الشاملة
    loadSiteData() {
        this.siteInfo = {
            general: {
                name: "OBP - One Billion Palestinians",
                description: "منصة مخصصة لدعم القضية الفلسطينية وتقديم محتوى تعليمي وثقافي",
                mission: "تمكين المليار فلسطيني عبر المحتوى الرقمي والتوعية",
                vision: "أن تكون المنصة الرقمية الرائدة لدعم القضية الفلسطينية عالمياً"
            },

            buildings: {
                a: {
                    name: "المبنى A",
                    description: "مبنى الإدارة والقيادة",
                    floors: 5,
                    facilities: ["مكتب المدير العام", "قاعة الاجتماعات", "مكاتب الإدارة"],
                    rooms: {
                        "101": "مكتب المدير العام",
                        "102": "قاعة الاجتماعات الكبرى",
                        "103": "قاعة الاجتماعات الصغرى"
                    }
                },
                b: {
                    name: "المبنى B", 
                    description: "مبنى الإنتاج والتكنولوجيا",
                    floors: 4,
                    facilities: ["استوديوهات الإنتاج", "معامل التكنولوجيا", "مركز البيانات"],
                    rooms: {
                        "101": "استوديو البث المباشر",
                        "102": "معمل التصميم الجرافيكي",
                        "103": "قاعة التحرير"
                    }
                },
                c: {
                    name: "المبنى C",
                    description: "مبنى التعليم والتدريب", 
                    floors: 6,
                    facilities: ["الفصول الدراسية", "المكتبة", "معامل اللغات"],
                    rooms: {
                        "101": "القاعة الرئيسية",
                        "102": "مكتبة الوسائط المتعددة", 
                        "103": "معمل اللغات"
                    }
                },
                d: {
                    name: "المبنى D",
                    description: "مبنى الخدمات والدعم",
                    floors: 3,
                    facilities: ["الكافتيريا", "العيادة", "مركز الخدمات"],
                    rooms: {
                        "101": "الكافتيريا الرئيسية",
                        "102": "العيادة الطبية",
                        "103": "مركز الخدمات الإدارية"
                    }
                }
            },

            facilities: {
                reception: {
                    name: "قاعة الاستقبال الرئيسية",
                    location: "الطابق الأرضي - المدخل الرئيسي",
                    services: ["استقبال الزوار", "توجيه المراجعين", "معلومات عامة"],
                    hours: "8:00 ص - 6:00 م"
                },
                terrace: {
                    name: "الطيراس",
                    location: "بجوار قاعة الاستقبال", 
                    description: "مساحة مفتوحة للاستراحة والاجتماعات غير الرسمية",
                    capacity: 50
                }
            },

            services: {
                educational: [
                    "دورات تعليم اللغة العربية",
                    "برامج التوعية بالقضية الفلسطينية", 
                    "ورش عمل الإعلام الرقمي",
                    "دورات البرمجة والتكنولوجيا"
                ],
                cultural: [
                    "المعارض الفنية",
                    "الأمسيات الشعرية",
                    "عروض الأفلام الوثائقية",
                    "المحاضرات الثقافية"
                ]
            },

            team: {
                management: [
                    { name: "أحمد محمد", position: "المدير العام", building: "A", room: "101" },
                    { name: "فاطمة إسماعيل", position: "نائب المدير", building: "A", room: "102" }
                ]
            },

            workingHours: {
                sunday: "8:00 ص - 6:00 م",
                monday: "8:00 ص - 6:00 م", 
                tuesday: "8:00 ص - 6:00 م",
                wednesday: "8:00 ص - 6:00 م",
                thursday: "8:00 ص - 2:00 م",
                friday: "مغلق",
                saturday: "8:00 ص - 6:00 م"
            },

            contact: {
                phone: "+970-1-234-5678",
                email: "info@obp.ps",
                website: "www.obp.ps"
            },

            upcomingEvents: [
                {
                    title: "معرض التراث الفلسطيني",
                    date: "2024-03-15",
                    location: "المبنى C - القاعة الرئيسية",
                    description: "معرض يعرض التراث الفلسطيني الأصيل"
                }
            ],

            faq: {
                "ساعات العمل": "نعمل من الأحد إلى الخميس من 8:00 صباحاً حتى 6:00 مساءً، ويوم الخميس حتى 2:00 ظهراً",
                "كيفية الوصول": "يمكنك استخدام خريطة المسار التفاعلية للوصول إلى أي مبنى أو غرفة",
                "المواقف": "هناك مواقف سيارات مجانية تتسع لـ 100 سيارة في الجهة الشرقية",
                "التسجيل في الدورات": "يمكنك التسجيل عبر الموقع الإلكتروني أو التوجه إلى المبنى C"
            }
        };
    }

    // إعداد مستمعي الأحداث
    setupEventListeners() {
        // زر فتح/إغلاق المساعد
        document.getElementById('assistantBtn').addEventListener('click', () => {
            this.toggleAssistant();
        });

        // زر الإغلاق
        document.getElementById('closeAssistant').addEventListener('click', () => {
            this.hideAssistant();
        });

        // زر إرسال السؤال
        document.getElementById('sendQuestion').addEventListener('click', () => {
            this.handleQuestion();
        });

        // إدخال السؤال بزر Enter
        document.getElementById('questionInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleQuestion();
            }
        });

        // النقر خارج المساعد لإغلاقه
        document.addEventListener('click', (e) => {
            const panel = document.getElementById('assistantPanel');
            const btn = document.getElementById('assistantBtn');
            if (panel.classList.contains('active') && 
                !panel.contains(e.target) && 
                !btn.contains(e.target)) {
                this.hideAssistant();
            }
        });

        console.log('✅ تم إعداد مستمعي الأحداث بنجاح');
    }

    // معالجة السؤال
    handleQuestion() {
        const input = document.getElementById('questionInput');
        const question = input.value.trim();
        
        if (!question) return;

        console.log('📝 معالجة السؤال:', question);
        this.addMessage(question, 'user');
        input.value = '';

        // محاكاة التفكير
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            const answer = this.generateAnswer(question);
            this.addMessage(answer, 'assistant');
        }, 1000 + Math.random() * 1000);
    }

    // عرض مؤشر الكتابة
    showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typingIndicator';
        typingDiv.className = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span>${this.name} تكتب...</span>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // إخفاء مؤشر الكتابة
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // توليد الإجابة
    generateAnswer(question) {
        const lowerQuestion = question.toLowerCase();
        
        // الأسئلة الشائعة
        for (const [key, answer] of Object.entries(this.siteInfo.faq)) {
            if (lowerQuestion.includes(key.toLowerCase())) {
                return answer;
            }
        }

        // المباني
        if (lowerQuestion.includes('مبنى') || lowerQuestion.includes('بناء')) {
            return this.handleBuildingQuery(lowerQuestion);
        }

        // المرافق
        if (lowerQuestion.includes('مرفق') || lowerQuestion.includes('مرافق')) {
            return this.handleFacilitiesQuery();
        }

        // الخدمات
        if (lowerQuestion.includes('خدمة') || lowerQuestion.includes('خدمات')) {
            return this.handleServicesQuery();
        }

        // الأوقات
        if (lowerQuestion.includes('وقت') || lowerQuestion.includes('ساعة')) {
            return this.handleHoursQuery();
        }

        // فريق العمل
        if (lowerQuestion.includes('موظف') || lowerQuestion.includes('فريق')) {
            return this.handleTeamQuery();
        }

        // الأحداث
        if (lowerQuestion.includes('حدث') || lowerQuestion.includes('فعالية')) {
            return this.handleEventsQuery();
        }

        // الاتصال
        if (lowerQuestion.includes('اتصل') || lowerQuestion.includes('رقم')) {
            return this.handleContactQuery();
        }

        // الترحيب
        if (lowerQuestion.includes('مرحبا') || lowerQuestion.includes('اهلا')) {
            return `مرحباً بك! أنا ${this.name}، مساعدك الذكي في موقع OBP. كيف يمكنني مساعدتك اليوم؟`;
        }

        // إذا لم يتعرف على السؤال
        return this.getRandomResponse();
    }

    // معالجة استفسارات المباني
    handleBuildingQuery(question) {
        const buildings = ['a', 'b', 'c', 'd'];
        for (const building of buildings) {
            if (question.includes(`المبنى ${building}`) || question.includes(`مبنى ${building}`)) {
                const bldg = this.siteInfo.buildings[building];
                return `
<strong>${bldg.name}</strong><br>
${bldg.description}<br>
<strong>الطوابق:</strong> ${bldg.floors}<br>
<strong>المرافق:</strong> ${bldg.facilities.join('، ')}<br>
<strong>الغرف:</strong><br>
${Object.entries(bldg.rooms).map(([room, desc]) => `• ${room}: ${desc}`).join('<br>')}
                `;
            }
        }
        
        return `
<strong>المباني المتاحة:</strong><br>
• <strong>المبنى A:</strong> الإدارة والقيادة<br>
• <strong>المبنى B:</strong> الإنتاج والتكنولوجيا<br>  
• <strong>المبنى C:</strong> التعليم والتدريب<br>
• <strong>المبنى D:</strong> الخدمات والدعم<br>
أي مبنى تريد معرفة المزيد عنه؟
        `;
    }

    // معالجة استفسارات المرافق
    handleFacilitiesQuery() {
        let response = "<strong>المرافق المتاحة:</strong><br>";
        for (const [key, facility] of Object.entries(this.siteInfo.facilities)) {
            response += `
• <strong>${facility.name}</strong><br>
  📍 ${facility.location}<br>
  ${facility.description ? `📝 ${facility.description}<br>` : ''}
  ${facility.hours ? `⏰ ${facility.hours}<br>` : ''}
            `;
        }
        return response;
    }

    // معالجة استفسارات الخدمات
    handleServicesQuery() {
        return `
<strong>الخدمات المتاحة:</strong><br>
<strong>الخدمات التعليمية:</strong><br>
${this.siteInfo.services.educational.map(s => `• ${s}`).join('<br>')}<br><br>
<strong>الخدمات الثقافية:</strong><br>  
${this.siteInfo.services.cultural.map(s => `• ${s}`).join('<br>')}
        `;
    }

    // معالجة استفسارات الأوقات
    handleHoursQuery() {
        return `
<strong>أوقات العمل:</strong><br>
• الأحد - الأربعاء: 8:00 ص - 6:00 م<br>
• الخميس: 8:00 ص - 2:00 م<br>
• الجمعة: مغلق<br>
• السبت: 8:00 ص - 6:00 م
        `;
    }

    // معالجة استفسارات فريق العمل
    handleTeamQuery() {
        return `
<strong>فريق الإدارة:</strong><br>
${this.siteInfo.team.management.map(person => 
    `• ${person.name} - ${person.position}<br>  📍 المبنى ${person.building} - الغرفة ${person.room}`
).join('<br>')}
        `;
    }

    // معالجة استفسارات الأحداث
    handleEventsQuery() {
        if (this.siteInfo.upcomingEvents.length === 0) {
            return "لا توجد أحداث قادمة في الوقت الحالي.";
        }
        
        return `
<strong>الأحداث القادمة:</strong><br>
${this.siteInfo.upcomingEvents.map(event => 
    `• <strong>${event.title}</strong><br>  📅 ${event.date}<br>  📍 ${event.location}<br>  📝 ${event.description}`
).join('<br><br>')}
        `;
    }

    // معالجة استفسارات الاتصال
    handleContactQuery() {
        return `
<strong>معلومات الاتصال:</strong><br>
📞 الهاتف: ${this.siteInfo.contact.phone}<br>
📧 البريد: ${this.siteInfo.contact.email}<br>
🌐 الموقع: ${this.siteInfo.contact.website}
        `;
    }

    // إجابات عشوائية للأسئلة غير المعروفة
    getRandomResponse() {
        const responses = [
            "أعتذر، لم أفهم سؤالك بالكامل. هل يمكنك إعادة صياغته؟",
            "ممم... هذا السؤال مثير للاهتمام! لكنني لا أملك معلومات كافية عنه حالياً.",
            "أستطيع مساعدتك في معلومات عن المباني، الخدمات، الأوقات، والفعاليات. هل لديك سؤال محدد؟",
            "رائع! لو تخصصت أكثر في سؤالك، سأتمكن من مساعدتك بشكل أفضل.",
            "أنا متخصص في معلومات موقع OBP. اسألني عن المباني، الغرف، الخدمات، أو الفعاليات!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // إضافة رسالة للدردشة
    addMessage(content, sender) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = content;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // حفظ في السجل
        this.conversationHistory.push({
            sender,
            content,
            timestamp: new Date().toISOString()
        });
    }

    // عرض رسالة الترحيب
    showWelcomeMessage() {
        const welcomeMsg = `
مرحباً! 👋 أنا <strong>${this.name}</strong>، المساعدة الذكية لموقع OBP.

أستطيع مساعدتك في:<br>
• 🏢 <strong>المباني والغرف</strong> - معلومات عن جميع المباني<br>  
• 🛠️ <strong>المرافق والخدمات</strong> - ما هو متاح للاستخدام<br>
• 🕐 <strong>أوقات العمل</strong> - متى نفتح ومتى نغلق<br>
• 📅 <strong>الفعاليات</strong> - الأحداث القادمة<br>
• 👥 <strong>فريق العمل</strong> - من يمكنك مقابلته<br>

<em>جرب أن تسألني: "ما هي أوقات العمل؟" أو "أخبرني عن المبنى A"</em>
        `;
        this.addMessage(welcomeMsg, 'assistant');
    }

    // تفعيل/إلغاء تفعيل المساعد
    toggleAssistant() {
        const panel = document.getElementById('assistantPanel');
        panel.classList.toggle('active');
        this.isActive = panel.classList.contains('active');
        
        if (this.isActive) {
            document.getElementById('questionInput').focus();
        }
    }

    // إخفاء المساعد
    hideAssistant() {
        const panel = document.getElementById('assistantPanel');
        panel.classList.remove('active');
        this.isActive = false;
    }
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 تحميل المساعد الذكي...');
    window.obpAssistant = new OBPAssistant();
});

// أنماط CSS المطلوبة - أضفها في ملف CSS الخاص بك
const assistantStyles = `
.assistant-btn {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #1a472a, #2d5a3d);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.assistant-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0,0,0,0.4);
}

.assistant-panel {
    position: fixed;
    bottom: 90px;
    left: 20px;
    width: 350px;
    height: 500px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 10001;
    display: none;
    flex-direction: column;
    border: 2px solid #1a472a;
    overflow: hidden;
}

.assistant-panel.active {
    display: flex;
}

.assistant-header {
    background: linear-gradient(135deg, #1a472a, #2d5a3d);
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.assistant-header h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
}

.close-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
}

.chat-messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    background: #f8fafc;
}

.message {
    margin-bottom: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 15px;
    max-width: 85%;
    line-height: 1.4;
}

.user-message {
    background: #1a472a;
    color: white;
    margin-left: auto;
    border-bottom-right-radius: 5px;
}

.assistant-message {
    background: white;
    border: 1px solid #e2e8f0;
    margin-right: auto;
    border-bottom-left-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.chat-input {
    padding: 1rem;
    border-top: 1px solid #e2e8f0;
    display: flex;
    gap: 0.5rem;
    background: white;
}

.chat-input input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 25px;
    outline: none;
    font-family: inherit;
}

.chat-input input:focus {
    border-color: #1a472a;
}

.chat-input button {
    background: #1a472a;
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.typing-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748b;
    font-style: italic;
    padding: 0.5rem;
}

.typing-dots {
    display: flex;
    gap: 3px;
}

.typing-dots span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #64748b;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-dots span:nth-child(1) { animation-delay: -0.32s; }
.typing-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
    0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
    40% { transform: scale(1); opacity: 1; }
}

/* التجاوب مع الشاشات الصغيرة */
@media (max-width: 768px) {
    .assistant-panel {
        width: 90vw;
        left: 5vw;
        height: 70vh;
        bottom: 80px;
    }
    
    .assistant-btn {
        bottom: 20px;
        left: 20px;
    }
}
`;

// إضافة الأنماط تلقائياً
const styleSheet = document.createElement('style');
styleSheet.textContent = assistantStyles;
document.head.appendChild(styleSheet);
