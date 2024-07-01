<template>
  <div class="text123">
    <h1>Knowledge List</h1>
    <input v-model="newItem.K_TITLE" placeholder="名稱" />
    <input v-model="newItem.K_CONTENT" placeholder="內容" />
    <input v-model="newItem.K_FROM" placeholder="來源" />
    <input v-model="newItem.K_URL" placeholder="URL" />
    <input v-model="newItem.K_DATE" type="date" placeholder="日期" />
    <button @click="addItem">新增</button>

    <ul>
      <li v-for="item in knowledge" :key="item.id">
        {{ item.K_TITLE }} - {{ item.K_CONTENT }} - {{ item.K_FROM }} - {{ item.K_URL }} - {{ item.K_DATE }}
        <button @click="deleteItem(item.K_ID  )">删除</button>
      </li>
    </ul>

    <div v-if="error">{{ errorMsg }}</div>
  </div>
  <div v-if="edit">
    <div class="lightbox-test">
      <div>
        名稱
        <input type="text">
      </div>
      <div>
        內容
        <textarea type="text">
        </textarea>
      </div>
      <div>
        來源
        <input type="text">
      </div>
      <div>
        URL
        <input type="text">
      </div>
      <div>
        <input type="date">
      </div>
      <input type="button" value="儲存">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      knowledge: [],
      newItem: {
        K_TITLE: '',
        K_CONTENT: '',
        K_FROM: '',
        K_URL: '',
        K_DATE: ''
      },
      error: false,
      errorMsg: '',
      edit:true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost/cid101/g1/api/knowledge.php');
        if (!response.data.error) {
          this.knowledge = response.data.knowledge;
          // console.log(this.knowledge);
        } else {
          this.error = true;
          this.errorMsg = response.data.msg;
        }
      } catch (error) {
        this.error = true;
        this.errorMsg = error.message;
      }
    },
    async addItem() {
      try {
        const response = await axios.post('http://localhost/cid101/g1/api/knowledgeAdd.php', JSON.stringify(this.newItem), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.data.error) {
          this.fetchData();
          this.newItem = {
            K_TITLE: '',
            K_CONTENT: '',
            K_FROM: '',
            K_URL: '',
            K_DATE: ''
          };
        } else {
          this.error = true;
          this.errorMsg = response.data.msg;
        }
      } catch (error) {
        this.error = true;
        this.errorMsg = error.message;
      }
    },
    async deleteItem(id) {
      console.log(id);
    try {
        const response = await axios.get('http://localhost/cid101/g1/api/knowledgeDelete.php', {
            params: { K_ID: id }
        });console.log(id);
        if (!response.data.error) {
            this.fetchData();
        } else {
            this.error = true;
            this.errorMsg = response.data.msg;
        }
    } catch (error) {
        this.error = true;
        this.errorMsg = error.message;
    }
    },

  },
};
</script>

<style scoped>
.text123 {
  margin-top: 100px;
}
.lightbox-test {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color: #fff;
}
</style>
