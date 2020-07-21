import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/plugins/firebase'
import conversations from './conversations'
import firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    conversations
  },
  state: {
    db: firebase.firestore(),
    user: null,
    newCourse: {},
    newCourceId: null,
    newTutorId:null,

    courses: [],
    tags: [],
    payments: {},
    classes: [],
    students: [],
    tutors: [],
    newTutor:{},
    
    alerts: {
      text: '',
      color: 'success',
      snackbar: false,
      timeout: 9000.
    },
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },
  mutations: {

    // Mutation for realtime firestore database.
    ...vuexfireMutations,

    // Mutation for snackbar alert.
    triggerAlert(state, payload) {
      state.alerts.text = payload.text,
        state.alerts.color = payload.color,
        state.alerts.snackbar = true;
      setTimeout(() => {
        state.alerts.snackbar = false;
      }, 3000)
    },

    saveData(state) {
      db.collection("Courses")
        .doc(state.newCourceId)
        .update(state.newCourse);
    },

    saveCourse(state) {
      db.collection("Courses")
        .doc(state.newCourceId)
        .update({ Curriculum: state.newCourse.Curriculum });
    },

    addSection(state, payload) {
      state.newCourse.Curriculum.push(payload);
      db.collection("Courses")
        .doc(state.newCourceId)
        .update({ Curriculum: state.newCourse.Curriculum });
      console.log(state.newCourse.Curriculum)
    },

    removeSection(state, payload) {
      state.newCourse.Curriculum.splice(payload, 1);
      db.collection("Courses")
        .doc(state.newCourceId)
        .update({ Curriculum: state.newCourse.Curriculum });
      console.log(state.newCourse.Curriculum)
    },

    addTag(state, payload) {
      console.log(payload.category)
      state.tags[payload.category].push(payload.value);
      db.collection("Tags")
        .doc('list')
        .update(state.tags);
      console.log(state.tags['course'])
    },

    removeTag(state, payload) {
      state.tags[payload.category].splice(payload.value, 1);
      db.collection("Tags")
        .doc('list')
        .update(state.tags);
      console.log(state.tags[payload.category]);
    },
    setUser: state => {
      state.user = firebase.auth().currentUser;
    }
  },
  actions: {
    bindCourse: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('courses', db.collection('Courses'))
    }),
    bindPayment: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('payments', db.collection('Orders'))
    }),
    bindClass: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('classes', db.collection('Classes'))
    }),
    bindTags: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('tags', db.collection('Tags').doc('list'))
    }),
    bindStudent: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('students', db.collection('Students'))
    }),
    bindTutor: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('tutors', db.collection('Tutors'))
    }),
    bindNewCourse: firestoreAction(({ bindFirestoreRef, state }) => {
      return bindFirestoreRef('newCourse', db.collection('Courses').doc(state.newCourceId))
    }),
    bindNewTutor: firestoreAction(({ bindFirestoreRef, state }) => {
      return bindFirestoreRef('newTutor', db.collection('Tutors').doc(state.newTutorId))
    }),
  }
})
