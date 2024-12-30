<template>
    <div class="promo-card">
      <div class="promo-content">
        <p class="promo-title">-50% off</p>
        <p class="promo-subtitle text-white">the full price of pizzas!</p>
        <img :src="burgerImageUrl" class="promo-image" alt="Burger">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PromoCard",
    data() {
      return {
        burgerImageUrl: "https://pngimg.com/uploads/pizza/pizza_PNG43978.png",
      };
    },
  };
  </script>
  
  <style scoped>
  .p{
    color: white;
  }
  .promo-card {
    position: relative;
    background-color: #aa96f2;
    border-radius: 15px;
    padding: 1.5rem;
    width: 300px;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .promo-content {
    position: relative;
    text-align: center;
  }
  
  .promo-title {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  .promo-subtitle {
    font-size: 1rem;
    color: white;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .promo-image {
    width: 120px;
    position: absolute;
    top: -85px;
    right: -90px;
  }
  
  .promo-decorations {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .decoration {
    width: 20px;
    height: 20px;
    position: absolute;
    animation: float 3s ease-in-out infinite;
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
  