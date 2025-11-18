<!-- زر المساعد -->
<button class="assistant-btn" id="assistantBtn">
    <i class="fas fa-robot"></i>
</button>

<!-- لوحة المساعد -->
<div class="assistant-panel" id="assistantPanel">
    <div class="assistant-header">
        <i class="fas fa-robot"></i>
        <h3>مساعد OBP الذكي</h3>
    </div>
    <div class="chat-messages" id="chatMessages"></div>
    <div class="chat-input">
        <input type="text" id="questionInput" placeholder="اكتب سؤالك هنا...">
        <button id="sendQuestion">
            <i class="fas fa-paper-plane"></i>
        </button>
    </div>
</div>

<!-- تضمين ملف المساعد -->
<script src="ai-assistant.js"></script>
