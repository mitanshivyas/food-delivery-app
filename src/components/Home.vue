<template>
  <section class="min-h-screen flex flex-col items-center bg-white">
    <!-- Banner Section -->
    <section
      class="bg-cover bg-center h-64 flex items-center justify-center mt-0"
      style="background-image: url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')"
    >
      <h2 class="text-3xl text-white font-bold">Our Menu</h2>
    </section>

    <!-- Pizza Carousel Section -->
    <div class="carousel-wrapper w-full flex justify-center py-8 px-4" style="height: 500px; overflow: visible;">
      <PizzaCarousel />
    </div>

    <!-- Call to Action Card -->
    <div class="flex-1 flex items-center justify-center mt-16">
      <div class="bg-yellow-200 p-10 rounded shadow-md text-center">
        <h3 class="text-3xl font-bold text-gray-800 mb-4">Hungry?</h3>
        <p class="text-lg text-gray-600 mb-6">Order your favorite meals now!</p>
        <button
          @click="$emit('navigate', 'menu')"
          class="bg-pink-500 text-white px-6 py-3 rounded hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110 hover:bg-pink-600"
        >
          Order Now
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import PizzaCarousel from "./PizzaCarousel.vue";

export default {
  name: "Home",
  components: {
    PizzaCarousel,
  },
};
</script>

<style>
.carousel-wrapper {
  max-width: 100%;
  width: 100%;
  height: auto; /* Ensure the height is not constrained */
  padding: 0 1rem;
  overflow: visible; /* Allow pizzas to extend beyond bounds */

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
}

section.min-h-screen {
  overflow: visible; /* Prevent clipping at the root level */
}


</style>
