

<script setup>
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

defineOptions({ name: 'App' })
</script>

<template>
  <div id="app">
    <h1>My Vuex To-Do App</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
