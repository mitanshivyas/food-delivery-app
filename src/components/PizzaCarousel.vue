<template>
    <div class="carousel-container-wrapper" style="width: 100%; overflow: visible">
      <div class="relative items-center">
        <!-- Pizza Semicircle -->
        <div class="carousel-container relative"
             :style="{ width: '5vw', height: '75vh' }">
          <div
            v-for="(pizza, index) in pizzas"
            :key="index"
            class="pizza-item absolute bg-cover cursor-pointer transition duration:100 hover:shadow-lg rounded-full hover:bg-pink-300"
            :style="getPizzaStyle(index)"
            @click="setActiveIndex(index)"
          ></div>
        </div>
      </div>
      <!-- Pizza Details -->
      <div v-if="activeIndex !== null" 
        class="pizza-details  text-top"
        :style="{ 
            top: '-25%', 
            right: '-70%', 
            opacity: 1 
        }"
        >

        <h2 class="text-2xl font-bold text-gray-800 transition duration-700 ease-in-out">{{ pizzas[activeIndex].name }}</h2>
        <p class="text-gray-600 transition-all duration-700 ease-in-out">{{ pizzas[activeIndex].description }}</p>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "PizzaCarouselVerticalSemiCircle",
    data() {
      return {
        pizzas: [
          { image: "https://i.postimg.cc/fR8dyrJh/01-2.webp", name: "Veggie", description: "Loaded with veggies." },
          { image: "https://i.postimg.cc/L88qc3vQ/02-1.webp", name: "Pepperoni", description: "Topped with pepperoni slices and cheese." },
          { image: "https://i.postimg.cc/3rZx3Dks/04-1.webp", name: "Margherita", description: "Classic margherita with fresh tomatoes and basil." },
          { image: "https://i.postimg.cc/9fPvyyHV/03-1.webp", name: "BBQ Chicken", description: "Barbecue chicken with tangy sauce." },
          { image: "https://i.postimg.cc/fR8dyrJh/01-2.webp", name: "Tandoori Paneer", description: "Indian paneer with spices." },
          { image: "https://i.postimg.cc/L88qc3vQ/02-1.webp", name: "Cheese Burst", description: "A cheesy delight with every bite." },
          { image: "https://i.postimg.cc/3rZx3Dks/04-1.webp", name: "Spicy Italian", description: "Hot and spicy Italian flavors." },
        ],
        pizzaPositions: [], // Stores the positions of pizzas dynamically
        activeIndex: null, // Currently clicked pizza
      };
    },
    created() {
      this.initializePositions();
    },
    methods: {
      initializePositions() {
        // Initialize the positions to match the pizza indices
        this.pizzaPositions = this.pizzas.map((_, index) => index);
      },
      setActiveIndex(index) {
        if (this.activeIndex === index) return; // Prevent re-clicking the same pizza
  
        this.activeIndex = index; // Set the clicked pizza as active
  
        // Rearrange the positions based on the clicked pizza
        this.pizzaPositions = this.pizzaPositions.map((pos) =>
          (pos - this.pizzaPositions[index] + this.pizzas.length) % this.pizzas.length
        );
      },
      getPizzaStyle(index) {
        const totalPizzas = this.pizzas.length;
        const currentIndex = this.pizzaPositions[index];
        const angleStep = 180 / (totalPizzas - 1); // Angle between positions in the semicircle
        const rotationOffset = 10;
  
        // Active (center) pizza style
        if (currentIndex === 0) {
          return {
            transform: "translate(-50%, -50%) scale(6)",
            top: "20%",
            left: "85%",
            backgroundImage: `url(${this.pizzas[index].image})`,
            zIndex: 10,
          };
        }
  
        // Style for other pizzas
        const radius = 320; // Radius of the semicircle
        const angle = angleStep * currentIndex - rotationOffset;
        const y = Math.cos((angle * Math.PI) / 180) * radius;
        const x = Math.sin((angle * Math.PI) / 180) * radius;
  
        return {
          transform: `translate(${x}px, ${-y}px) scale(0.8)`, // Vertical semicircle
          top: "10%",
          left: "25%",
          backgroundImage: `url(${this.pizzas[index].image})`,
          zIndex: currentIndex < totalPizzas / 2 ? 5 : 1, // Higher z-index for pizzas closer to the top
          width: "120px",
          height: "120px",
        };
      },
    },
  };
  </script>
  
  <style scoped>
.carousel-container { 
    transform: rotate(-7deg)
}

 /* width: 100%; 
  height: 500px;
  position: relative;

  @media (max-width: 768px) {
    transform: rotate(-10deg); 
  }

  @media (max-width: 480px) {
    width: 100%;
    transform: rotate(0deg);
  }
} */

.pizza-item {
  width: 100px; /* Adjust size for smaller screens */
  height: 100px;
  transition: all 0.5s ease-in-out;

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
  font-family: 'Playfair Display', serif; /* Elegant font for the name */
  color: #2c3e50;
  font-size: 3rem;
  margin-bottom: 2rem;
  padding: 1;
  margin-right: 43rem;
  line-height: 40pt;

}

.pizza-details p {
  font-family: 'Roboto', sans-serif; /* Modern font for description */
  font-style: italic;
  color: #34495e;

  font-size: 1.5rem;
  margin-bottom: 0rem;
}

.pizza-details.v-visible {
  opacity: 1; /* Make visible */
  transform: translateY(0); /* Move to final position */
}

  </style>
  