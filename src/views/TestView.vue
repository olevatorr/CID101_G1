<template>
  <div class="text123">
    <h1>Knowledge Data from PHP API</h1>
    <ul>
      <li v-for="item in knowledgeData" :key="item.id">{{ item.E_TITLE }}: {{ item.E_ADDRESS }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      knowledgeData: []
    };
  },
  created() {
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
