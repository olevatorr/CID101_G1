<template>
  <div class="chat-container" :class="chatClass">
    <div class="icon" @click="openChat" v-show="!isChatOpen">
      <img src="/img/robot.png" alt="" />
    </div>
    <div v-show="isChatOpen">
      <div class="chat-header">
        <h2 class="ori">客服機器人</h2>
        <i class="fas fa-times close-icon" @click="closeChat"></i>
      </div>
      <div class="chat-messages" ref="chatMessages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="message"
          :class="message.sender"
        >
          <img
            v-if="message.sender === 'chatbot-message'"
            src="/img/robot.png"
            alt="Chatbot Avatar"
            class="avatar"
          />
          <div class="message-text">
            <span v-if="message.sender === 'user-message'" v-html="message.text"></span>
            <span v-else v-html="message.typedText"></span>
            <span class="cursor" v-if="message.sender === 'chatbot-message'">|</span>
          </div>
          <img
            v-if="message.sender === 'user-message'"
            src="/img/user.png"
            alt="User Avatar"
            class="avatar"
          />
        </div>
      </div>
      <div class="input-container">
        <input
          type="text"
          v-model="userInput"
          placeholder="請輸入您的問題..."
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage">發送</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import axios from 'axios'

gsap.registerPlugin(TextPlugin)

const messages = ref([])
const userInput = ref('')
const chatMessages = ref(null)
const isChatOpen = ref(false)
const responses = ref([])

const chatClass = computed(() => ({
  'chat-window': true,
  open: isChatOpen.value
}))

const openChat = () => {
  isChatOpen.value = true
}

const closeChat = () => {
  isChatOpen.value = false
}
const sendMessage = () => {
  if (userInput.value.trim() !== '') {
    messages.value.push({ text: userInput.value, sender: 'user-message', typedText: '' })
    userInput.value = ''

    setTimeout(() => {
      const response = getResponse(messages.value[messages.value.length - 1].text)
      messages.value.push({ text: response, sender: 'chatbot-message', typedText: '' })
    }, 500)
  }
}
const fetchRobot = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/robot.php`)
    if (!response.data.error) {
      responses.value = response.data.ROBOT
    } else {
      alert(response.data.msg || '資料獲取失敗')
    }
  } catch (error) {
    alert('資料獲取失敗: ' + error.message)
  }
}
onMounted(() => {
  fetchRobot()
})

const getResponse = (userMessage) => {
  const defaultResponse =
    '很抱歉,我無法理解您的問題。請嘗試以其他方式提問或致電人工客服(03) - 4251108。'

  if (!Array.isArray(responses.value)) {
    return defaultResponse
  }

  for (const item of responses.value) {
    if (typeof item.R_QUESTION === 'string' && typeof item.R_ANSWER === 'string') {
      if (userMessage.toLowerCase().includes(item.R_QUESTION.toLowerCase())) {
        return item.R_ANSWER
      }
    } else {
      console.error('Invalid item in responses:', item)
    }
  }

  return defaultResponse
}

const typeMessage = (text, index) => {
  const typedText = messages.value[index].typedText
  if (typedText.length < text.length) {
    messages.value[index].typedText = text.slice(0, typedText.length + 1)
    setTimeout(() => typeMessage(text, index), 50)
  } else {
    gsap.to('.cursor', { opacity: 0, duration: 0.5, repeat: -1, yoyo: true })
  }
}

onUpdated(() => {
  chatMessages.value.scrollTop = chatMessages.value.scrollHeight
  const lastMessage = messages.value[messages.value.length - 1]
  if (lastMessage && lastMessage.sender === 'chatbot-message' && lastMessage.typedText === '') {
    typeMessage(lastMessage.text, messages.value.length - 1)
  }
})
</script>
