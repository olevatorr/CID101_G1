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
        <button @click="deleteItem(item.K_ID)">删除</button>
        <button>修改</button>
      </li>
    </ul>

    <div v-if="error">{{ errorMsg }}</div>
  </div>
  <div v-if="edit">
    <div class="lightbox-test">
      <ul>
      <li v-for="item in knowledge" :key="item.id">
        <div>
          <input v-model="item.K_TITLE">
          <input v-model="item.K_CONTENT">
          <input v-model="item.K_FROM">
          <input v-model="item.K_URL">
          <input v-model="item.K_DATE" type="date">
          <button @click="updateItem(item)">保存</button>
        </div>
      </li>
    </ul>
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
    async updateItem(id){
      console.log(id);
    try {
        const response = await axios.get('http://localhost/cid101/g1/api/knowledgeUpdate.php', {
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

    }

  },
};
</script>

<style scoped>
.text123 {
  margin-top: 100px;
}
</style>
