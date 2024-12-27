<template>
  <section class="min-h-screen flex flex-col">
    <!-- Banner Section -->
    <section
      class="bg-cover bg-center h-64 flex items-center justify-center"
      style="background-image: url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')"
    >
      <h2 class="text-3xl text-white font-bold">Welcome to Food Delivery!</h2>
    </section>

    <!-- Call to Action Card -->
    <div class="flex-1 flex items-center justify-center">
      <div class="bg-yellow-400 p-20 rounded shadow-md text-center">
        <h3 class="text-2xl font-bold mb-4">Hungry?</h3>
        <p class="mb-4">Order your favorite meals now!</p>
        <button
          @click="$emit('navigate', 'menu')"
          class="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          Order Now
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>
