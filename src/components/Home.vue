<template>
  
  <!-- Banner Section -->
  <section
    class="bg-cover bg-center w-full items-center justify-center"
    style="background-image: url('https://torontolife.mblycdn.com/uploads/tl/2024/11/toronto-restaurants-occhiolino-italian-spread.jpg')"
  >
    <h2 class="lg:text-4xl md:text-2xl sm:text-xl text-white font-bold">Savor Every Bite🍴</h2>
  </section>

  <section class="min-h-screen flex items-start">
    <!-- Call to Action Card -->
    <div class="order-now-section p-10 rounded-lg shadow-lg text-center  self-start">
      <h3 class="Hungry text-3xl font-poppins font-bold mb-4">Hungry?</h3>
      <p class="tag text-lg font-poppins mb-6">Order your favorite meals now!</p>
      <button
        @click="$emit('navigate', 'menu')"
        class= "order text-white px-6 py-3 rounded hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110 hover:bg-pink-600"
      >
        Order Now
      </button>
    </div>

    <!-- Pizza Carousel Section -->
    <div class="hidden sm:flex md:hidden lg:flex carousel-right">
      <PizzaCarousel />
    </div>
</section>
    <!-- Promo Card Section -->
    <div class="promo-card-wrapper ">
      <PromoCard />
    </div>
  
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
};
</script>

<style>
.min-h-screen{
  background: linear-gradient(90deg, hsl(229, 69%, 87%), white, #f4ccec);
}

.order{
  background-color: #f87193;
}
.order-now-section{
  background-color: #ffddf0;
}
.tag{
  color: #393b45;
}
.Hungry {
  color: #2a2d4a;
}
.home-section {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-between; /* Ensure items are separated */
}

.carousel-right {
  flex-shrink: 0; /* Prevent shrinking */
  width: 40%; /* Explicit width for the carousel */
  display: flex;
  justify-content: flex-end; /* Align the carousel to the extreme right */
}

/* .carousel-right > * {
  margin-left: auto; 
} */

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
  margin-left: 0px;
}
</style>

<style scoped>
.order-now-section {
  max-width: 350px; 
  justify-content: flex-start;
  position: absolute; /* Place it at the top-left corner */
  top: 400px; /* Distance from the top */
  left: 0px; /* Distance from the left */
  z-index: 10; /* Ensure it appears above other content */
}
</style>
