const state = {
    money: 1
}

const mutations = {
    add(state, param){
        state.money+=param
    },
    reduce(state){
        state.money--
    }
}

const actions = {
    add:(store, param) => {
        debugger
        commit('add', param)
    },
    reduce:({commit}) => {
        commit('reduce')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}