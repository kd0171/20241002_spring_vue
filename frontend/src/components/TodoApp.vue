<template>
  <div id="app">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="New Todo" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)" />
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">{{ todo.title }}</span>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTodo: '',
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      const response = await axios.get('http://localhost:8080/api/todos');
      this.todos = response.data;
    },
    async addTodo() {
      const response = await axios.post('http://localhost:8080/api/todos', {
        title: this.newTodo,
        completed: false,
      });
      this.todos.push(response.data);
      this.newTodo = '';
    },
    async updateTodo(todo) {
      await axios.put(`http://localhost:8080/api/todos/${todo.id}`, todo);
    },
    async deleteTodo(id) {
      await axios.delete(`http://localhost:8080/api/todos/${id}`);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
