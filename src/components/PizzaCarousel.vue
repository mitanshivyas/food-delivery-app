<template>
    <div class="carousel-container-wrapper" style="width: 100%; overflow: visible">
      <div class="relative items-center">
        <!-- Pizza Semicircle -->
        <div class="carousel-container relative" :style="{ width: '5vw', height: '75vh' }">
          <div
            v-for="(pizza, index) in pizzas"
            :key="index"
            class="pizza-item absolute bg-cover cursor-pointer transition duration-50 rounded-full"
            :class="{ 'hover:shadow-lg hover:bg-pink-300': activeIndex !== index }"
            :style="{ ...getPizzaStyle(index), transition: 'all 0.6s ease-in-out' }"
            @click="setActiveIndex(index)"
          ></div>
        </div>
      </div>
      <!-- Pizza Details -->
      <div
        v-if="activeIndex !== null"
        class="pizza-details"
        :class="{ 'v-visible': activeIndex !== null }"
        :style="{
          top: '-25%',
          right: '-70%',
        }"
      >
        <h2 class="text-2xl font-bold text-gray-800">
          {{ pizzas[activeIndex].name }}
        </h2>
        <p class="text-gray-600">
          {{ pizzas[activeIndex].description }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: "PizzaCarouselVerticalSemiCircle",
  data() {
    return {
      pizzas: [
        { image: "https://i.postimg.cc/3rZx3Dks/04-1.webp", name: "Margherita", description: "Classic margherita with fresh tomatoes and basil." },
        { image: "https://i.postimg.cc/fR8dyrJh/01-2.webp", name: "Veggie", description: "Loaded with veggies." },
        { image: "https://i.postimg.cc/L88qc3vQ/02-1.webp", name: "Pepperoni", description: "Topped with pepperoni slices and cheese." },
        { image: "https://i.postimg.cc/9fPvyyHV/03-1.webp", name: "BBQ Chicken", description: "Barbecue chicken with tangy sauce." },
        { image: "https://i.postimg.cc/fR8dyrJh/01-2.webp", name: "Tandoori Paneer", description: "Indian paneer with spices." },
        { image: "https://i.postimg.cc/L88qc3vQ/02-1.webp", name: "Cheese Burst", description: "A cheesy delight with every bite." },
        { image: "https://i.postimg.cc/3rZx3Dks/04-1.webp", name: "Spicy Italian", description: "Hot and spicy Italian flavors." },
      ],
      pizzaPositions: [], // Stores the positions of pizzas dynamically
      activeIndex: 0, // Currently clicked pizza
      rotationInterval: null, // Interval ID for continuous rotation
      isPaused: false, // Flag to pause rotation temporarily
    };
  },
  created() {
    this.initializePositions();
    this.startContinuousRotation(); // Start the rotation animation
  },
  beforeDestroy() {
    clearInterval(this.rotationInterval); // Clear the interval on component destroy
  },
  methods: {
    initializePositions() {
      this.pizzaPositions = this.pizzas.map((_, index) => index);
    },
    setActiveIndex(index) {
      if (this.activeIndex === index) return;

      this.isPaused = true; // Pause the rotation
      this.activeIndex = index;

      // Rearrange positions for the clicked pizza
      this.pizzaPositions = this.pizzaPositions.map((pos) =>
        (pos - this.pizzaPositions[index] + this.pizzas.length) % this.pizzas.length
      );

      // Resume rotation after a short delay
      setTimeout(() => {
        this.isPaused = false;
      }, 2500);
    },
    getPizzaStyle(index) {
      const totalPizzas = this.pizzas.length;
      const currentIndex = this.pizzaPositions[index];
      const angleStep = 180 / (totalPizzas - 1);
      const rotationOffset = 10;

      if (currentIndex === 0) {
        return {
          transform: "translate(-50%, -50%) scale(6)",
          top: "20%",
          left: "85%",
          backgroundImage: `url(${this.pizzas[index].image})`,
          zIndex: 10,
        };
      }

      const radius = 320;
      const angle = angleStep * currentIndex - rotationOffset;
      const y = Math.cos((angle * Math.PI) / 180) * radius;
      const x = Math.sin((angle * Math.PI) / 180) * radius;

      return {
        transform: `translate(${x}px, ${-y}px) scale(0.8)`,
        top: "10%",
        left: "25%",
        backgroundImage: `url(${this.pizzas[index].image})`,
        zIndex: currentIndex < totalPizzas / 2 ? 5 : 1,
        width: "120px",
        height: "120px",
      };
    },
    startContinuousRotation() {
      this.rotationInterval = setInterval(() => {
        if (!this.isPaused) {
          const nextIndex = (this.activeIndex + 1) % this.pizzas.length;
          this.setActiveIndex(nextIndex);
        }
      }, 2500); // Rotate every 3 seconds
    },
  },
};
</script>

  <style scoped>
  .carousel-container {
    transform: rotate(-7deg);
  }
  
  .pizza-item {
    width: 100px; /* Adjust size for smaller screens */
    height: 100px;
    transition: all 0.3s ease-in-out;
  
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  
    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }
  
  .pizza-details {
    opacity: 0; /* Start invisible */
    position: absolute;
    transform: translateY(20px); /* Animate from slightly below */
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .pizza-details h2 {
    font-family: "Playfair Display", serif; /* Elegant font for the name */
    color: #2c3e50;
    font-size: 3rem;
    margin-bottom: 2rem;
    padding: 1;
    margin-right: 43rem;
    line-height: 40pt;
  }
  
  .pizza-details p {
    font-family: "Roboto", sans-serif; /* Modern font for description */
    font-style: italic;
    color: #34495e;
  
    font-size: 1.5rem;
    margin-bottom: 0rem;
  }
  
  div.pizza-details.v-visible {
    opacity: 1; /* Make visible */
    transform: translateY(0); /* Move to final position */
  }
  </style>
  