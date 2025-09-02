
import { createStore } from 'vuex';

export default createStore({
    state(){
        return {
            todos:[
                {id:1, text:'Learn vuex state management', done: true},
                {id:2, text:'Implement vuex in project',done:false},
                {id:3, text:'Understating the core concepts of vuex', done:false},
                {id:4, text:'Build something awesome', done:false}
            ]
        }
    }, 
    getters:{
        doneTodos(state){
            return state.todos.filter(todo=> todo.done)
        },

        undoneTodos(state){
            return state.todos.filter(todo=> !todo.done);
        }
    },

    mutations:{
        addTodo(state, newTodoText){
            const newId = state.todos.length > 0 ? Math.max(...state.todos.map(todo =>todo.id)) + 1 :1;
            state.todos.push({
                id: newId,
                text: newTodoText,
                done:false,
            });
        },
        toggleTodo(state, todoId){
            const todo = state.todos.find(todo =>todo.id ===todoId);
            if(todo){
                todo.done = !todo.done;
            }
        }
    },

    actions:{
        addTodoAsync({commit},newTodoText){
            setTimeout(()=>{
                commit('addTodo', newTodoText);
            },500)
        }


    }

})