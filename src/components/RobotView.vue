<template>
    <div class="chat-container" :class="chatClass">
        <div class="icon" @click="openChat" v-show="!isChatOpen">
            <img src="/img/robot.png" alt="">
        </div>
        <div v-show="isChatOpen">
            <div class="chat-header">
                <h2 class="ori">客服機器人</h2>
                <i class="fas fa-times close-icon" @click="closeChat"></i>
            </div>
            <div class="chat-messages" ref="chatMessages">
                <div v-for="(message, index) in messages" :key="index" class="message" :class="message.sender">
                    <img v-if="message.sender === 'chatbot-message'" src="/img/robot.png" alt="Chatbot Avatar"
                        class="avatar">
                    <div class="message-text">
                        <span v-if="message.sender === 'user-message'" v-html="message.text"></span>
                        <span v-else v-html="message.typedText"></span>
                        <span class="cursor" v-if="message.sender === 'chatbot-message'">|</span>
                    </div>
                    <img v-if="message.sender === 'user-message'" src="/img/user.png" alt="User Avatar" class="avatar">
                </div>
            </div>
            <div class="input-container">
                <input type="text" v-model="userInput" placeholder="請輸入您的問題..." @keyup.enter="sendMessage">
                <button @click="sendMessage">發送</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onUpdated, computed } from 'vue';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const messages = ref([]);
const userInput = ref('');
const chatMessages = ref(null);
const isChatOpen = ref(false);

const chatClass = computed(() => ({
    'chat-window': true,
    'open': isChatOpen.value
}));

const openChat = () => {
    isChatOpen.value = true;
};

const closeChat = () => {
    isChatOpen.value = false;
};
const sendMessage = () => {
    if (userInput.value.trim() !== '') {
        messages.value.push({ text: userInput.value, sender: 'user-message', typedText: '' });
        userInput.value = '';

        setTimeout(() => {
            const response = getResponse(messages.value[messages.value.length - 1].text);
            messages.value.push({ text: response, sender: 'chatbot-message', typedText: '' });
        }, 500);
    }
};

const getResponse = (userMessage) => {
    const responses = {
        '你好': '您好,歡迎來到客服中心!有什麼可以幫助您的嗎?',
        '產品': '我們提供各種愛心產品,包括衣服、配件等。請問您對哪種產品感興趣?您可以瀏覽我們的<a href="/shop" target="_blank">產品目錄</a>。',
        '商城': '我們提供各種愛心產品,包括衣服、配件等。請問您對哪種產品感興趣?您可以瀏覽我們的<a href="/shop" target="_blank">產品目錄</a>。',
        '訂單': '請提供您的訂單編號,我們將為您查詢訂單狀態。您也可以前往<a href="/ProfileView" target="_blank">訂單查詢頁面</a>自行查詢。',
        '捐款': '如果您想為海洋盡一份心力，也歡迎至<a href="/donate" target="_blank">捐款頁面</a>了解詳情',
        '活動': '我們的淨灘活動都是免費的，想了解哪一天有活動，請至<a href="/events" target="_blank">訂單查詢頁面</a>自行查詢。',
        '遊戲': '我們提供輕鬆小遊戲，讓您可以用愉快的方式了解更多海廢知識。遊戲一<a href="/beachgame" target="_blank">淨灘大作戰</a>遊戲二<a href="/mallcart" target="_blank">海廢小知識</a>。',
        'game': '我們提供輕鬆小遊戲，讓您可以用愉快的方式了解更多海廢知識。遊戲一<a href="/beachgame" target="_blank">淨灘大作戰</a>遊戲二<a href="/mallcart" target="_blank">海廢小知識</a>。',
        '知識': '想了解更多海廢知識嗎?您也可以立即前往<a href="/Knowledge" target="_blank">教育中心</a>使用各種數據來了解海廢知識。',
        '消息': '想了解更多BlueAlert最新消息嗎?您也可以立即前往<a href="/news" target="_blank">最新消息</a>查看更多。',
    };

    const defaultResponse = '很抱歉,我無法理解您的問題。請嘗試以其他方式提問或致電人工客服(03) - 4251108。';

    for (const keyword in responses) {
        if (userMessage.includes(keyword)) {
            return responses[keyword];
        }
    }

    return defaultResponse;
};

const typeMessage = (text, index) => {
    const typedText = messages.value[index].typedText;
    if (typedText.length < text.length) {
        messages.value[index].typedText = text.slice(0, typedText.length + 1);
        setTimeout(() => typeMessage(text, index), 50);
    } else {
        gsap.to('.cursor', { opacity: 0, duration: 0.5, repeat: -1, yoyo: true });
    }
};

onUpdated(() => {
    chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    const lastMessage = messages.value[messages.value.length - 1];
    if (lastMessage && lastMessage.sender === 'chatbot-message' && lastMessage.typedText === '') {
        typeMessage(lastMessage.text, messages.value.length - 1);
    }
});
</script>