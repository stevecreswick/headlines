<script>
  import styles from './styles';
  import API from '../../services/news';

  const NEWS = new API();
  
  export default {
    name: 'sources',
    data() {
      return {
        sources: []
      }
    },
    async beforeCreate() {
      const res = await NEWS.get('sources', { language: 'en' });
      this.sources = res.sources;
    }
  }
</script>

<template>
  <div class="sources__container">
    <template v-if="sources.length">
      <ul>
        <li v-for="source in sources" :key="source.id">
          <a :href="`/source/${source.id}`">
            {{ source.name }}
          </a>
        </li>
      </ul>
    </template>
    <p v-else>Loading</p>
  </div>
</template>