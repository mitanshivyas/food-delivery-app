<template>
    <div class="relative w-full h-[600px] flex items-center justify-center">
      <!-- Pizza Semicircle -->
      <div class="carousel-container relative w-[300px] h-[600px]">
        <div
          v-for="(pizza, index) in pizzas"
          :key="index"
          class="pizza-item absolute bg-cover cursor-pointer transition-all duration-700 ease-in-out"
          :style="getPizzaStyle(index)"
          @click="setActiveIndex(index)"
        ></div>
      </div>
  
      <!-- Pizza Details -->
      <div v-if="activeIndex !== null" class="absolute top-1/2 right-10 transform -translate-y-1/2 text-center">
        <h2 class="text-2xl font-bold text-gray-800">{{ pizzas[activeIndex].name }}</h2>
        <p class="text-gray-600">{{ pizzas[activeIndex].description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PizzaCarouselVerticalSemiCircle",
    data() {
      return {
        pizzas: [
          { image: "https://i.postimg.cc/ZRNSVnGb/03-1.png", name: "Veggie", description: "Loaded with veggies." },
          { image: "https://i.postimg.cc/WzB5xjhm/04-1.png", name: "Pepperoni", description: "Topped with pepperoni slices and cheese." },
          { image: "https://i.postimg.cc/XYCrVWXG/02-1.png", name: "Margherita", description: "Classic margherita with fresh tomatoes and basil." },
          { image: "https://i.postimg.cc/tgDpbvdn/01-2.png", name: "BBQ Chicken", description: "Barbecue chicken with tangy sauce." },
          { image: "https://i.postimg.cc/WzB5xjhm/04-1.png", name: "Tandoori Paneer", description: "Indian paneer with spices." },
          { image: "https://i.postimg.cc/ZRNSVnGb/03-1.png", name: "Cheese Burst", description: "A cheesy delight with every bite." },
          { image: "https://i.postimg.cc/tgDpbvdn/01-2.png", name: "Spicy Italian", description: "Hot and spicy Italian flavors." },
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
  
        // Active (center) pizza style
        if (currentIndex === 0) {
          return {
            transform: "translate(-50%, -50%) scale(6)",
            top: "50%",
            left: "25%",
            backgroundImage: `url(${this.pizzas[index].image})`,
            zIndex: 10,
          };
        }
  
        // Style for other pizzas
        const radius = 400; // Radius of the semicircle
        const angle = angleStep * currentIndex;
        const y = Math.cos((angle * Math.PI) / 180) * radius;
        const x = Math.sin((angle * Math.PI) / 180) * radius;
  
        return {
          transform: `translate(${x}px, ${-y}px)`, // Vertical semicircle
          top: "50%",
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
    position: relative;
    perspective: 1000px; /* Add perspective for 3D effect */
    transform-style: preserve-3d;
  }
  
  .pizza-item {
    position: absolute;
    width: 120px;
    height: 120px;
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.7s ease-in-out;
  }
  </style>
  