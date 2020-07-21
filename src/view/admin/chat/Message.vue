<template>
  <div :class="getPosition">
    <div class="message last">{{ message.text }}</div>
  </div>
</template>
<script>
export default {
  name: "Message",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    getPosition() {
      console.log(this.$store.state.user);
      if (this.message.sender === this.$store.state.user.email) {
        return "mine messages";
      } else {
        return "yours messages";
      }
    }
  }
};
</script>

<style>
.messages {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.message {
  max-width: 60%;
  border-radius: 20px;
  padding: 15px 25px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
}

.yours {
  align-items: flex-start;
}

.yours .message {
  margin-right: 25%;
  background-color: #eee;
  position: relative;
}

.yours .message.last:before {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: -7px;
  height: 20px;
  width: 20px;
  background: #eee;
  border-bottom-right-radius: 15px;
}
.yours .message.last:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: -10px;
  width: 10px;
  height: 20px;
  background: white;
  border-bottom-right-radius: 10px;
}

.mine {
  align-items: flex-end;
}

.mine .message {
  color: white;
  margin-left: 25%;
  background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
  background-attachment: fixed;
  position: relative;
}

.mine .message.last:before {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: -8px;
  height: 20px;
  width: 20px;
  background: linear-gradient(to bottom, #00d0ea 0%, #0085d1 100%);
  background-attachment: fixed;
  border-bottom-left-radius: 15px;
  padding-right: 10px;
}

.mine .message.last:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: -10px;
  width: 10px;
  height: 20px;
  background: white;
  border-bottom-left-radius: 10px;
}
</style>
