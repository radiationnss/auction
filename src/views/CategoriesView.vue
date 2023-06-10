<template>
    <h1>categories</h1>
    <div class="container">
      <div class="row">
        <div
        v-for="category in allCategory"
        :key= "category.id"
        class="card">
          <div class="card-body">
            <h5 class="card-title">{{ category.title }}</h5>
            <p class="card-text">{{ category.Description }}</p>
            <router-link :to="category.get_absolute_url">go to category</router-link>
          </div>
        </div>
      </div>
    </div>
    
</template>
  
  <script>

  import axios from 'axios';

  export default {
    data() {
      return {
            allCategory: [],
    }
  },
    mounted() {
      this.getAllCategory()
    },
    methods: {
      getAllCategory() {
        axios
            .get('/api/all-category/')
            .then(response => {
              this.allCategory = response.data
            })
            .catch(error => {
              console.log(error)
            })
      }
    }
  }
  </script>