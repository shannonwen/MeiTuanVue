import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    counter: 1
}

const mutations = {
    increment(state){
        state.counter++;
    },
    decrement(state){
        state.counter--;
    }
}

const actions = {
    increment:({commit}) => {
        commit('increment');
    },
    decrement:({commit}) => {
        commit('decrement');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})