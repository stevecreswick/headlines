<script>
  import navbar from '../components/navbar/navbar';
  import articles from '../components/articles/articles';
  
  export default {
    name: 'home',
    components: { navbar: navbar, articles: articles }
  }
</script>

<template>
  <div id="home">
    <navbar></navbar>
    <articles></articles>
  </div>
</template>