<script>
  import styles from './styles';
  
  export default {
    name: 'navbar',
    data() {
      return {
        categories: []
      }
    }
  }
</script>

<template>
  <div class="navbar__container" id="navbar">
    <a href="/">Will this change?</a>
    <div>{{categories.length}}</div>
  </div>
</template>