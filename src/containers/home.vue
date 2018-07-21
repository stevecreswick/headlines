<script>
  import navbar from '../components/navbar/navbar';
  import articles from '../components/articles/articles';
  import sources from '../components/sources/sources';

  export default {
    name: 'home',
    components: { navbar: navbar, articles: articles, sources: sources }
  }
</script>

<template>
  <div id="home">
    <navbar></navbar>
    <sources></sources>
    <articles></articles>
  </div>
</template>