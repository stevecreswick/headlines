<script>
  import styles from './styles';
  
  export default {
    name: 'articles',
    data() {
      return {
        articles: []
      }
    },
    async beforeCreate() {            

    }
  }
</script>

<template>
  <div id="articles" class="articles__container">
    <h1>{{ articles.length }}</h1>

      <template v-if="articles.length > 0">
    <ol>
      <li v-for="article in articles" :key="article.name">
        Rate: {{ article.title }}
      </li>
    </ol>
  </template>
  <p v-else>Loading</p>
  </div>
</template>