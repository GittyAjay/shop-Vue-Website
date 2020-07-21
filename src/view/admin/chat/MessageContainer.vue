<template>
  <div v-if="id==parent">
    <div id="mchat" ref="mchat">
      <div>
        <Message
          v-for="message in conversation.messages"
          :message="message"
          :key="message.created"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "MessageContainer",

  data() {
    return {
      newMessageText: ""
    };
  },

  props: {
    conversation: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    parent: {
      type: String,
      required: true
    }
  },

  created() {
    this.$store.state.db
      .collection("conversations")
      .doc(this.id)
      .onSnapshot(convo => {
        // let source = convo.metadata.hasPendingWrites ? "Local" : "Server";
        if (convo && convo.data()) {
          convo.data().messages.forEach(message =>
            this.$store.commit("conversations/ADD_MESSAGE", {
              conversationId: this.id,
              message
            })
          );
        }
      });
  },
  components: {
    Message
  }
};
</script>
<style>
#mchat {
  border: solid 1px #eee;
  display: flex;
  flex-direction: column;
  padding: 15px;
  max-height: 70vh;
  overflow: auto;
}
</style>