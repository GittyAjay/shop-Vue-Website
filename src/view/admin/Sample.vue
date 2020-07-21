<template>
  <div class="row d-flex justify-content-center mt-3">
    <b-card class="col-8">
      <div class="row">
        <div class="col-12">
          <draggable tag="ul" :list="list" class="list-group" handle=".handle">
            <b-card
            bg-variant="grey"
            class="my-2"
            no-body
              header-tag="header"
              footer-tag="footer"
              v-for="(element, idx) in list"
              :key="element.name"
            >
              <template v-slot:header>
                <div class="d-flex align-items-center">
                  <i class="fa fa-align-justify handle"></i>
                  <span class="text flex-grow-1 my-1">{{ element.name }}</span>
                  <i class="fa fa-times close" @click="removeAt(idx)"></i>
                </div>
              </template>
              <div>
                <h1>Hello From Section</h1>
              </div>
            </b-card>
          </draggable>
        </div>
        <rawDisplayer class="col-3" :value="list" title="List" />
      </div>
    </b-card>
    <b-card class="col-8 my-3">
      <div class="row">
        <div class="col-12">
          <b-card header-tag="header" footer-tag="footer">
            <template v-slot:header>
              <h6 class="mb-0">New Section</h6>
            </template>
            <cv-text-input placeholder="Section Name" class="m-0" v-model="sefForm.name"></cv-text-input>
            <cv-text-input placeholder="Section Objective" class="m-0" v-model="sefForm.text"></cv-text-input>
            <div class="d-flex justify-content-end mt-2">
              <b-button class="mr-1">Close</b-button>
              <b-button @click="add">Save</b-button>
            </div>
          </b-card>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between my-3">
          <b-list-group-item class="d-flex justify-content-center" button>Section</b-list-group-item>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
let id = 3;
// import draggable from "vuedraggable";
export default {
  name: "handle",
  display: "Handle",
  instruction: "Drag using the handle icon",
  order: 5,
  components: {
    // draggable
  },
  data() {
    return {
      sefForm: {
        name: "",
        text: ""
      },
      list: [{ name: "Introduction", text: "", id: 0 }],
      dragging: false
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function() {
      id++;
      this.list.push({ name: this.sefForm.name, id, text: this.sefForm.text });
    }
  }
};
</script>
<style scoped>
.lable {
  display: none;
}
.button {
  margin-top: 35px;
}
.handle {
  float: left;
  font-size: 1.2rem;
}
.close {
  float: right;
  font-size: 1.3rem;
}
input {
  display: inline-block;
  width: 50%;
}
.text {
  margin: 20px;
}
</style>