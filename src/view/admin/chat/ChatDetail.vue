<template>
  <div id="chat-container">
    <div>
      <cv-tile
        class="d-flex justify-content-between align-items-center chat-header border-bottom p-0 m-0"
      >
        <div class="d-flex ml-3">
          <b-avatar src="https://placekitten.com/300/300"></b-avatar>
          <div class="mr-5 ml-3">
            <h6>{{data.name}}</h6>
            <small>{{data.mobile}}</small>
          </div>
        </div>
        <b-badge variant="primary" class="mr-3" pill>{{data.message}}</b-badge>
      </cv-tile>
    </div>
    <div style="float:top;">
      <div class="chatwindow d-flex align-items-center" v-if="!convoIds.includes(data.sid)">
        <div class="center">
          <h3>Welcome</h3>
          <h4>Lets Begin Chat</h4>
          <h6>{{data.name}}</h6>
          <small>{{data.mobile}}</small>
        </div>
      </div>
      <MessageContainer
        v-for="id in convoIds"
        :conversation="conversations[id]"
        :id="id"
        :key="id"
        :parent="(data.sid)?data.sid:''"
      />
      <div id="message-box" v-if="data.name">
        <cv-tile class="border-top">
          <b-form-input
            v-model="newMessageText"
            @keyup.enter="send"
            placeholder="Type something..."
          ></b-form-input>
        </cv-tile>
      </div>
    </div>
  </div>
</template>
<script>
import MessageContainer from "./MessageContainer";
import { mapState } from "vuex";
export default {
  props: {
    data: Object
  },
  data() {
    return {
      newMessageText: ""
    };
  },
  components: {
    MessageContainer
  },
  methods: {
    send() {
      this.$store.dispatch("conversations/sendMessage", {
        text: this.newMessageText,
        created: Date.now(),
        conversationId: this.data.sid,
        sender: this.$store.state.user.email
      });
      console.log("send");
      console.log(this.data.sid);
      console.log(this.conversations);
      console.log(this.convoIds);
    },
    scrollToEnd: function() {
      var container = this.$refs.mchat;
      container.scrollTop = container.scrollHeight;
      console.log(container.scrollHeight);
    }
  },
  computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  },
  created() {
    this.$store.dispatch("conversations/get");
  },
  // watch: {
  //   data: {
  //     immediate: true,
  //     handler() {
  //      this.$store.dispatch("conversations/get");
  //     }
  //   }
  // },
};
</script>
<style>
.chat-header {
  position: relative;
  height: 61px;
  right: 0px;
}
#chat-container {
  height: 100%;
  position: relative;
}
.chatwindow {
  height: 400px;

  padding: 100px;

  text-align: center;
}
.center {
  width: fit-content;
  margin: auto;
}

#message-box {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding-right: 348px;
  overflow: hidden;
  z-index: 9999;
}
</style>