<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

defineOptions({ name: 'TodoForm' })

const store = useStore()
const newTodoText = ref('')

const addTodo = () => {
  if (newTodoText.value.trim() === '') return
  store.dispatch('addTodoAsync', newTodoText.value)
  newTodoText.value = ''
}
</script>


<template>
    <form @submit.prevent="addTodo">
        <input
        type="text"
        v-model="newTodoText"
        placeholder="Add a new todo ..."
        />

        <button type="submit">Add</button>
    </form>

</template>