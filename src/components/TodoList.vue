<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

defineOptions({ name: 'TodoList' })

const store = useStore() 

const todos = computed(() => store.state.todos)
const doneTodos = computed(() => store.getters.doneTodos)
const toggleTodo = (payload) => store.commit('toggleTodo', payload)
</script>


<template>
  <h2>To-Do list</h2>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo.id)"
      />
      <span :class="{ 'done-text': todo.done }">
        {{ todo.text }}
      </span>
    </li>
  </ul>

  <h3>Done Todos</h3>
  <ul>
    <li v-for="todo in doneTodos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>