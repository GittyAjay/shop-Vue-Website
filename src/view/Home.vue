<template>
  <section class="section">
    <Header/>
    <h1 class="title has-text-centered">Home</h1>
    <article class="notification is-primary">
      <p>This is the home page for the app, it is <strong>not secured</strong>.</p>
    </article>
  </section>
</template>

<script>
import Header from './Header.vue';
export default {
  components:{
    Header,
  }
}
</script>

<style lang="scss">
// Basic styles are pulled in from the Bulma framework https://bulma.io/
// These style tags could be omitted as they arre not used.
</style>
