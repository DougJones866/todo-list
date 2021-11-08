<template>
    
  <div class="home container mx-auto flex items-center flex-col mt-10 ">
    <div class="bg-green-200 rounded-md shadow-md"> 
    <h1 class="flex-1 font-sans font-thin text-center text-5xl text-grey-darkest ">Todo List</h1>
    <div class="m-6">
    <form @submit.prevent="addTodo()">
      <label>New Todo</label>
      <input
        v-model="newTodo"
        name="newTodo"
        autocomplete="off"
        class="bg-gray-200 focus:bg-white border-black border-solid border-2 px-2 py-1 w-full mb-4 hover:bg-white" @keyup.enter="addItem"
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:bg-black hover:text-blue-400 focus:bg-black focus:text-blue-400 px-2 py-1" >Add Todo</button>
    </form>
      </div>
    <h2 class="flex-1 font-sans font-thin text-center text-5xl text-grey-darkest">Todo List</h2>
    <ul class =  "max-w-xs">
      <li v-for="(todo, index) in todos" :key="index" class="my-4 flex items-center justify-end" >
        <span :class="{ done: todo.done }" @click="doneTodo(todo)" class="px-2 py-1 mr-2 w-40 border-transparent border-solid border-2 hover:border-black" >{{
          todo.content
        }}</span>
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 hover:text-white focus:bg-red-900 focus:text-white px-2 py-1 mr-2 " @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <h4 v-if="todos.length === 0">Empty List.</h4>
  </div>
  </div>
    
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const newTodo = ref("");
    const defaultData = [
      {
        done: false,
        content: "Create a post",
      },
    ];
    const todosData = JSON.parse(localStorage.getItem("todos")) || defaultData;
    const todos = ref(todosData);
    function addTodo() {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
      }
      saveData();
    }
    function doneTodo(todo) {
      todo.done = !todo.done;
      saveData();
    }
    function removeTodo(index) {
      todos.value.splice(index, 1);
      saveData();
    }
    function saveData() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem("todos", storageData);
    }
    return {
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      saveData,
    };
  },
};
</script>
