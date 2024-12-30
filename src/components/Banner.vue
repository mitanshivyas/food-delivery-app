<template>
  <section
    class="bg-cover bg-center h-64 flex items-center justify-center"
    style="background-image: url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')"
  >
  <h2 class="text-3xl md:text-5xl lg:text-6xl text-white font-bold text-center drop-shadow-lg px-4">
    Welcome to Food Delivery!
  </h2>



  </section>
</template>

<script>
export default {
  name: "AppBanner",
};
</script>

<style>
.bg-cover {
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 50vh; /* Default height for large screens */

  @media (max-width: 768px) {
    height: 40vh; /* Adjusted for medium screens */
  }

  @media (max-width: 480px) {
    height: 30vh; /* Adjusted for small screens */
  }
}

.text-center {
  padding: 0 1rem; /* Add padding for smaller screens */
}

</style>