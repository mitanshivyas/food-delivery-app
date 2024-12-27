<template>
  <section class="p-6 bg-gray-50">
    <!-- Hero Section -->
    <div class="text-center py-12 bg-yellow-400">
      <h1 class="text-4xl font-bold mb-4">Welcome to Foodie Express</h1>
      <p class="text-lg mb-6">Fast, fresh, and delicious food delivered to your doorstep.</p>
      <button @click="$emit('navigate', 'menu')" class="bg-gray-800 text-white px-6 py-3 rounded">
        Order Now
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>
