
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
    }

})