<template>
  <section class="min-h-screen flex flex-col items-center bg-lightPink ">
    <!-- Banner Section -->
    <section
      class="bg-cover bg-center w-full h-64 flex items-center justify-center mt-19"
      style="background-image: url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')"
    >
    <h2 class="lg:text-4xl md:text-2xl sm:text-xl text-white font-bold">Savor Every Bite🍴</h2>
  </section>

    <!-- Pizza Carousel Section -->
    <div class="hidden sm:flex md:hidden lg:flex carousel-right">
      <PizzaCarousel />
    </div>

    <!-- Call to Action Card -->
    <div class="order-now-section bg-yellow-200 p-10 rounded shadow-md text-center mx-4 mt-4 self-start">
      <h3 class="text-3xl font-poppins font-bold text-gray-600 mb-4">Hungry?</h3>
      <p class="text-lg font-poppins text-gray-600 mb-6">Order your favorite meals now!</p>
      <!--<button
        @click="$emit('navigate', 'menu')"
        class="bg-pink-500 text-white px-6 py-3 rounded hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110 hover:bg-pink-600"
      >
        Order Now
      </button> -->
      <button
        @click=" navigateTo('/menu')"
        class="bg-pink-500 text-white px-6 py-3 rounded hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110 hover:bg-pink-600"
      >
        Order Now
      </button> 
    </div>

    <!-- Promo Card Section -->
    <div class="promo-card-wrapper mt-6">
      <PromoCard />
    </div>
  </section>
</template>

<script>
import PizzaCarousel from "./PizzaCarousel.vue";
import PromoCard from "./PromoCard.vue";

export default {
  name: "Home",
  components: {
    PizzaCarousel,
    PromoCard,
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route); // Programmatically navigate to the route
    },
  },
};
</script>

<style>
.home-section {
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between; /* Ensure items are separated */
}

.content-left {
  flex: 1; /* Take up available space on the left */
  text-align: left;
}

.carousel-right {
  flex-shrink: 0; /* Prevent shrinking */
  width: 40%; /* Explicit width for the carousel */
  display: flex;
  justify-content: flex-end; /* Align the carousel to the extreme right */
}

.carousel-right > * {
  margin-left: auto; /* Push carousel content to the right */
}

button {
  font-weight: bold;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  color: rgb(246, 202, 69);
}

.promo-card-wrapper {
  display: flex;
  justify-content: center;
  width: 120%;
  margin-left: -370px;
}
</style>

<style scoped>
.order-now-section {
  max-width: 350px; /* Ensure the card has a consistent width */
  position: absolute; /* Place it at the top-left corner */
  top: 400px; /* Distance from the top */
  left: 20px; /* Distance from the left */
  z-index: 10; /* Ensure it appears above other content */
}
</style>
