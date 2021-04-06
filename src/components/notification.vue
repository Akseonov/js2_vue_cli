<template>
  <div class="notification" v-show="notification">
    <div class="notification__content">
      <p class="notification__p">you must log in for this action</p>
      <button class="button" @click.prevent="close">CLOSE</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "notification",

    data() {
      return {

      }
    },

    computed: {
      notification() {
        return this.$store.getters['account/notification'];
      }
    },

    methods: {
      close() {
        this.$store.commit('account/falseNotification');
      }
    }
  }
</script>

<style scoped>

</style>