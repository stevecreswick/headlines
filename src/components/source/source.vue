<script>
  import styles from './styles';
  import API from '../../services/news';

  const NEWS = new API();
  
  export default {
    name: 'source',
    data() {
      return {
        source: {},
        headlines: []
      }
    },
    async beforeCreate() {
      // const res = await NEWS.get('sources', { language: 'en' });
      // this.sources = res.sources;
      // console.log(this.sources);
    }
  }
</script>

<template>
  <div class="source__container">
    <h1>This is a source</h1>
    <!-- <a href="/">Will this change?</a>
    <div>{{sources.length}}</div>

    <template v-if="sources.length">
      <ul>
        <li v-for="source in sources" :key="source.id">
          {{ source.name }}
        </li>
      </ul>
    </template>
    <p v-else>Loading</p> -->
  </div>
</template>