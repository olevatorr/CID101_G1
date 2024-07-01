<template>
  <div class="text123">
    <h1>Knowledge Data from PHP API</h1>
    <ul>
      <li v-for="item in knowledgeData" :key="item.id">{{ item.E_TITLE }}: {{ item.E_ADDRESS }}</li>
    </ul>
  </div>
  <input type="text" name="box" id="" v-model="again">
  <button>新增</button>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      knowledgeData: []
    };
  },
  mounted() {
    this.fetchKnowledgeData();
  },
  methods: {
    async fetchKnowledgeData() {
      try {
        const response = await axios.get('http://localhost/api/knowledge.php');
        this.knowledgeData = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
.text123 {
  margin-top: 100px
}
</style>
