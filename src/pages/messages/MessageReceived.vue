<template>
  <div>
    <section>
      <header>
        <h2>Messages Received</h2>
      </header>
      <ul v-if="hasMessages && !isLoading">
        <MessagesItem
          v-for="msg in receivedMessages"
          :key="msg.id"
          :email="msg.email"
          :message="msg.message"
        />
      </ul>
      <h3 v-else>There is no messages!</h3>
    </section>
  </div>
</template>

<script>
import MessagesItem from "../../components/messages/MessagesItem";

export default {
  components: {
    MessagesItem
  },

  computed: {
    receivedMessages() {
      return this.$store.getters["messages/messages"];
    },
    hasMessages() {
      return this.$store.getters["messages/hasMessages"];
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
  color: #e24a3b;
}

ul {
  list-style: none;

  width: 40%;
  margin: 1rem 0;
  border: 1px solid #e24a3b;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 3rem auto;
  color: #e24a3b;
}

h3 {
  text-align: center;
  color: #e24a3b;
}
</style>
