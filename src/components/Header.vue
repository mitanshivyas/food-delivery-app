<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">Food Delivery</h1>
    <nav>
      <ul class="flex space-x-4">
        <li>
            <button @click="$emit('navigate', 'home')" class="hover:text-gray-400">
              Home
            </button>
          </li>
          <li>
            <button @click="$emit('navigate', 'menu')" class="hover:text-gray-400">
              Menu
            </button>
          </li>
        <li><a href="#" class="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
