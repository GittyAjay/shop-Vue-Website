<template>
  <div class="d-flex">
    <cv-tile class="p-0 m-0 user-panel border-right">
      <div>
        <div class="search-box">
          <b-form-input type="text" id="myInput" placeholder="Student name" @input="Search()"></b-form-input>
        </div>
        <b-list-group-item
          button
          class="d-flex justify-content-between align-items-center"
          v-for="user in FilteredStudent"
          :key="user.name"
          @click="showChat(user)"
        >
          <div class="d-flex">
            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            <div class="mx-3">
              <h6>{{user.name}}</h6>
              <small>{{user.mobile}}</small>
            </div>
          </div>
          <b-badge variant="primary" pill>{{user.message}}</b-badge>
        </b-list-group-item>
      </div>
    </cv-tile>
    <div class="flex-grow-1">
      <ChatDetail :data="current" />
    </div>
  </div>
</template>
<script>
import ChatDetail from "./ChatDetail";
export default {
  data() {
    return {
      current: {},
      student: [
        {
          sid: "student1",
          name: "Abhay Yadav",
          mobile: "8574967458",
          image: "https://placekitten.com/300/300",
          message: 14
        },
        {
          sid: "student2",
          name: "Chandrama Singh",
          mobile: "8574967458",
          image: "https://placekitten.com/300/300",
          message: 14
        },
        {
          sid: "student3",
          name: "Ajay Pandey",
          mobile: "8574967458",
          image: "https://placekitten.com/300/300",
          message: 14
        },
        {
          sid: "student4",
          name: "Abhijeet Mishra",
          mobile: "8574967458",
          image: "https://placekitten.com/300/300",
          message: 14
        },
        {
          sid: "student5",
          name: "Manoj Kumar",
          mobile: "8574967458",
          image: "https://placekitten.com/300/300",
          message: 14
        },
        {
          sid: "student6",
          name: "Neelam Kumari",
          mobile: "8574967458",
          image: "https://placekitten.com/300/300",
          message: 14
        }
      ],
      FilteredStudent: []
    };
  },
  components: {
    ChatDetail
  },
  computed: {},
  mounted() {
    this.FilteredStudent = this.student;
  },
  methods: {
    Search() {
      var input, filterValue, listOfstudent;
      input = document.getElementById("myInput");
      filterValue = input.value.toUpperCase();
      listOfstudent = this.student;
      listOfstudent = listOfstudent.filter(function(user) {
        return user.name.toUpperCase().indexOf(filterValue) != -1; // returns true or false
      });
      this.FilteredStudent = listOfstudent;
    },
    showChat(user) {
      this.current = user;
      console.log(this.current);
    }
  }
};
</script>

<style scoped>
.user-panel {
  height: -webkit-calc(100vh - 48px);
  height: -moz-calc(100vh - 48px);
  height: calc(100vh - 48px);
  bottom: 0px;
}
.list-group-item {
  border-right: 0px;
}
.list-group-item:first-child,
.list-group-item:last-child {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.search-box {
  margin: 11px;
}
.chat-header {
  position: relative;
  height: 61px;
  right: 0px;
}
</style>