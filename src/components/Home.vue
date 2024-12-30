<template>
  
  <!-- Banner Section -->
  <section
    class="bg-cover bg-center w-full items-center justify-center"
    style="background-image: url('https://torontolife.mblycdn.com/uploads/tl/2024/11/toronto-restaurants-occhiolino-italian-spread.jpg')"
  >
    <h2 class="lg:text-4xl md:text-2xl sm:text-xl text-white font-bold">Savor Every Bite🍴</h2>
  </section>

  <section class="min-h-screen">
    <!-- Promo Card Section -->
    <div class="promo-card-wrapper ">
      <PromoCard />
    </div>
    
    <!-- How it Works Section -->
    <section class="hidden sm:block md:hidden lg:block how-it-works">
      <h2 class="how-it-works-title">How it Works</h2>
      <div class="steps-container">
        <div class="step">
          <img src="https://i.postimg.cc/GtPsybNL/restaurant.png" alt="Pick Your Meals" class="step-icon" />
          <p class="step-number">01</p>
          <h3 class="step-title">Pick Your Meals</h3>
          <p class="step-description">A new menu of 30+ options every week</p>
        </div>
        <div class="step">
          <img src="https://i.postimg.cc/0j1wjzVX/cooking.png" alt="Cooked Fresh by Chefs" class="step-icon" />
          <p class="step-number">02</p>
          <h3 class="step-title">Cooked Fresh by Chefs</h3>
          <p class="step-description">Our gourmet chefs do the prep, so you can do you.</p>
        </div>
        <div class="step">
          <img src="https://i.postimg.cc/3RvG3XFD/tray.png" alt="Heat, Eat & Enjoy" class="step-icon" />
          <p class="step-number">03</p>
          <h3 class="step-title">Heat, Eat & Enjoy</h3>
          <p class="step-description">No prep. No mess. Our meals arrive ready to heat and eat in minutes.</p>
        </div>
      </div>
    </section>
    <!-- Call to Action Card -->
    <section class="page">
      <div class="order-now-section  p-14 rounded-lg shadow-lg text-center items-start">
        <h3 class="Hungry text-3xl font-poppins font-bold mb-4 text-center">Hungry?</h3>
        <p class="tag text-lg font-poppins mb-6">Order your favorite meals now!</p>
        <button
          @click="navigateTo('/menu')"
          class="bg-pink-500 text-white px-6 py-3 rounded hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110 hover:bg-pink-600"
        >
          Order Now
        </button> 
      </div>
      <!-- Pizza Carousel Section -->
      <div class="hidden sm:block md:hidden lg:block carousel-right">
        <!--   -->
        <PizzaCarousel />
      </div>
    </section>
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


<style scoped>
.min-h-screen {
  display: flex;
  flex-direction: row; /* Align call-to-action and carousel horizontally */
  justify-content: space-between; /* Space between the two items */
  align-items: flex-start; /* Align items at the top of the section */
  padding: 2rem; /* Add space below the banner */
  width: 100%; /* Ensure full width */
  margin-top: 0; /* Remove any default margins */
}

.order-now-section {
  max-width: 400px; 
  background-color: hsl(229, 69%, 87%); 
  padding: 2rem; 
  margin-left: auto; 
  margin-top: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border-radius: 0.5rem; 
  position: relative;
  z-index: 1; 
  float:left;
  padding-left:10px;
}


/* .carousel-right {
  flex: 1; 
  display: flex;
  justify-content: flex-end; 
  align-items: flex-start; 
  margin-top: 2rem; 
  position: relative; 
} */

.carousel-right {
  position: absolute; 
  top: 170%; 
  right: 450px; 
  transform: translateY(-50%); 
}

.bg-cover {
  width: 100%; /* Ensure the banner covers full width */
  height: 50vh; /* Set fixed height */
  background-size: cover;
  background-position: center;
}

body, #app {
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

</style>

<style>

.order{
  background-color: #f87193;
}

.tag{
  color: #393b45;
}
.Hungry {
  color: #2a2d4a;
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
  position: absolute;
  justify-content: left;
  width: 100%;
  margin-left: -640px;
  margin-top: -90px;
}

.how-it-works {
  position: relative;
  text-align: center;
  margin: 0rem auto;
  align-items: center;
}

.how-it-works-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2a2d4a;
  margin-bottom: 2rem;
  margin-right: auto;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-auto;
}

.step {
  flex: 1;
  text-align: center;
  padding: 1rem;
}

.step-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  margin-left: 10rem;
  align-items: center;
}

.step-number {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2a2d4a;
  margin-bottom: 0.5rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2a2d4a;
  margin-bottom: 0.5rem;
}

.step-description {
  font-size: 1rem;
  color: #393b45;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}


</style>

