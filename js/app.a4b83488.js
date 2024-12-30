(function(){"use strict";var e={1829:function(e,t,a){var s=a(3751),o=a(641);const r={id:"app"},n={class:"content-container"};function i(e,t,a,s,i,l){const c=(0,o.g2)("AppHeader"),d=(0,o.g2)("AppCart"),u=(0,o.g2)("router-view"),p=(0,o.g2)("AppFooter");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(c,{cartCount:l.cartQuantity,onNavigate:t[0]||(t[0]=t=>e.currentPage=t)},null,8,["cartCount"]),"AppMenu"===e.$route.name||"Contact"===e.$route.name?((0,o.uX)(),(0,o.Wv)(d,{key:0,cartItems:i.cartItems,total:l.total,onIncreaseQuantity:l.handleIncreaseQuantity,onDecreaseQuantity:l.handleDecreaseQuantity,onCheckout:l.handleCheckout,onClearCart:l.clearCart},null,8,["cartItems","total","onIncreaseQuantity","onDecreaseQuantity","onCheckout","onClearCart"])):(0,o.Q3)("",!0),(0,o.Lk)("div",n,[(0,o.bF)(u,{cartItems:i.cartItems,total:l.total,onClearCart:l.clearCart,onCheckout:l.handleCheckout,onAddToCart:l.handleAddToCart,onIncreaseQuantity:l.handleIncreaseQuantity,onDecreaseQuantity:l.handleDecreaseQuantity},null,8,["cartItems","total","onClearCart","onCheckout","onAddToCart","onIncreaseQuantity","onDecreaseQuantity"])]),(0,o.bF)(p)])}a(4114),a(8992),a(4520),a(2577),a(8872);var l=a(33);const c={class:"p-4 flex justify-between items-center fixed top-0 w-full z-50 text-white"},d={class:"container mx-auto flex justify-between items-center"},u={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center"},p={class:"relative"},m={key:0,class:"absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"};function h(e,t,a,s,r,n){const i=(0,o.g2)("font-awesome-icon");return(0,o.uX)(),(0,o.CE)("header",c,[(0,o.Lk)("div",d,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>n.navigateTo("/")),class:"flex items-center space-x-2"},t[6]||(t[6]=[(0,o.Lk)("h1",{class:"text-xl font-bold hover:text-yellow-400"},"Mits Pizzeria",-1)])),(0,o.Lk)("button",{class:"burger-button md:hidden",onClick:t[1]||(t[1]=(...e)=>n.toggleMenu&&n.toggleMenu(...e)),"aria-label":"Toggle navigation"},[(0,o.bF)(i,{icon:r.menuOpen?"times":"bars",class:"text-xl"},null,8,["icon"])]),(0,o.Lk)("nav",{class:(0,l.C4)([["absolute top-full left-0 w-full md:bg-transparent md:relative md:top-0",r.menuOpen?"block":"hidden"],"md:flex md:items-center"])},[(0,o.Lk)("ul",u,[(0,o.Lk)("li",null,[(0,o.Lk)("button",{onClick:t[2]||(t[2]=e=>n.navigateTo("/")),class:"hover:text-gray-400 px-4 py-2 bg-transparent"}," Home ")]),(0,o.Lk)("li",null,[(0,o.Lk)("button",{onClick:t[3]||(t[3]=e=>n.navigateTo("/menu")),class:"hover:text-gray-400 px-4 py-2 bg-transparent"}," Menu ")]),(0,o.Lk)("li",null,[(0,o.Lk)("button",{onClick:t[4]||(t[4]=e=>n.navigateTo("/contact")),class:"hover:text-gray-400 px-4 py-2 bg-transparent"}," Contact ")]),(0,o.Lk)("li",p,[(0,o.Lk)("button",{onClick:t[5]||(t[5]=e=>n.navigateTo("/cart")),class:"relative hover:text-gray-400 px-4 py-2 bg-transparent"},[(0,o.bF)(i,{icon:"shopping-cart",class:"text-xl"}),a.cartCount>0?((0,o.uX)(),(0,o.CE)("span",m,(0,l.v_)(a.cartCount),1)):(0,o.Q3)("",!0)])])])],2)])])}var g=a(1273),b=a(6188),f=a(7107);f.Yv.add(b._Ro,b.ckx,b.GRI,b.VNx);var x={name:"AppHeader",components:{FontAwesomeIcon:g.gc},props:{cartCount:{type:Number,required:!0}},data(){return{menuOpen:!1}},methods:{navigateTo(e){this.$router.push(e)},toggleMenu(){this.menuOpen=!this.menuOpen,console.log("Menu Open State:",this.menuOpen)}}},k=a(4621);const v=(0,k.A)(x,[["render",h],["__scopeId","data-v-d87b4c30"]]);var y=v;function w(e,t,a,s,r,n){return(0,o.uX)(),(0,o.CE)("footer",null,t[0]||(t[0]=[(0,o.Lk)("p",null,"© 2024 Food Delivery App. All rights reserved.",-1)]))}var C={name:"AppFooter"};const L=(0,k.A)(C,[["render",w],["__scopeId","data-v-a4f1402e"]]);var I=L;const z={class:"fixed bottom-0 right-0 bg-gray-800 text-white w-80 pt-4 shadow-lg flex flex-col items-center rounded-t-lg",style:{"z-index":"50"}},E={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},A={class:"relative bg-green-500 text-white px-6 py-4 rounded shadow-lg w-80 text-center animate-scale-up"},X={key:1,class:"flex flex-col"},_={class:"flex-grow overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800",style:{maxHeight:"calc(70vh - 120px)"}},F={class:"flex items-center"},Q=["src","alt"],j={class:"flex items-center"},$=["onClick"],O={class:"px-2"},P=["onClick"],M={class:"pt-4 border-t border-gray-700 p-4"},T={class:"text-lg font-bold mb-4"},D={key:2,class:"text-gray-400 text-center"},N={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},S={class:"bg-white p-6 rounded shadow-lg text-center text-black"},q={class:"mt-4"};function H(e,t,a,s,r,n){return(0,o.uX)(),(0,o.CE)("aside",z,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.toggleCollapse&&n.toggleCollapse(...e)),class:"w-[90%] bg-gray-700 text-white px-4 py-2 text-center font-bold rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-2"},(0,l.v_)(r.collapsed?"Show Cart":"Hide Cart"),1),r.showNotification?((0,o.uX)(),(0,o.CE)("div",E,[(0,o.Lk)("div",A,[(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.closeNotification&&n.closeNotification(...e)),class:"absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300"}," × "),t[6]||(t[6]=(0,o.Lk)("h2",{class:"text-2xl font-bold mb-2"},"Order Placed!",-1)),t[7]||(t[7]=(0,o.Lk)("p",null,"Your order has been placed successfully.",-1))])])):(0,o.Q3)("",!0),r.collapsed?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",X,[t[8]||(t[8]=(0,o.Lk)("h3",{class:"text-xl font-bold mb-2 p-1 text-center"},"Your Cart",-1)),(0,o.Lk)("div",_,[(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.cartItems,((t,a)=>((0,o.uX)(),(0,o.CE)("li",{key:a,class:"flex justify-between items-center p-2 bg-gray-700 rounded mb-1"},[(0,o.Lk)("div",F,[(0,o.Lk)("img",{src:t.img,alt:t.name,class:"w-12 h-12 object-cover rounded mr-2"},null,8,Q),(0,o.Lk)("div",null,[(0,o.Lk)("p",null,(0,l.v_)(t.name),1),(0,o.Lk)("div",j,[(0,o.Lk)("button",{onClick:a=>e.$emit("decrease-quantity",t),class:"bg-gray-800 text-white px-2 rounded mr-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"}," - ",8,$),(0,o.Lk)("span",O,(0,l.v_)(t.quantity),1),(0,o.Lk)("button",{onClick:a=>e.$emit("increase-quantity",t),class:"bg-gray-800 text-white px-2 rounded shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"}," + ",8,P)])])]),(0,o.Lk)("span",null,"$"+(0,l.v_)((t.price*t.quantity).toFixed(2)),1)])))),128))])]),(0,o.Lk)("div",M,[(0,o.Lk)("p",T,"Total: $"+(0,l.v_)(a.total),1),a.cartItems.length?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>n.handleCheckout&&n.handleCheckout(...e)),class:"bg-green-400 text-white px-4 py-2 rounded w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"}," Checkout ")):(0,o.Q3)("",!0),a.cartItems.length?((0,o.uX)(),(0,o.CE)("button",{key:1,onClick:t[3]||(t[3]=(...e)=>n.handleClearCart&&n.handleClearCart(...e)),class:"bg-red-500 text-white px-4 py-2 rounded mt-2 w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"}," Clear Cart ")):((0,o.uX)(),(0,o.CE)("p",D,"Your cart is empty."))])])),r.showConfirmation?((0,o.uX)(),(0,o.CE)("div",N,[(0,o.Lk)("div",S,[t[9]||(t[9]=(0,o.Lk)("p",null,"Are you sure you want to clear the cart?",-1)),(0,o.Lk)("div",q,[(0,o.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>n.confirmClearCart&&n.confirmClearCart(...e)),class:"bg-red-500 text-white px-4 py-2 rounded mr-2 p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"},"Yes"),(0,o.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>n.cancelClearCart&&n.cancelClearCart(...e)),class:"bg-gray-300 px-4 py-2 rounded p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"},"No")])])])):(0,o.Q3)("",!0)])}var J={name:"AppCart",props:{cartItems:Array,total:String},data(){return{collapsed:!0,showConfirmation:!1,showNotification:!1}},methods:{goToCheckout(){this.$router.push("/cart")},toggleCollapse(){this.collapsed=!this.collapsed},handleCheckout(){this.showNotification=!0,this.$router.push("/cart"),setTimeout((()=>{this.showNotification=!1}),3e3)},closeNotification(){this.showNotification=!1},handleClearCart(){this.showConfirmation=!0},confirmClearCart(){this.$emit("clear-cart"),this.showConfirmation=!1},cancelClearCart(){this.showConfirmation=!1}},watch:{cartItems:{handler(e){e.length>0&&(this.collapsed=!1)},deep:!0}}};const W=(0,k.A)(J,[["render",H],["__scopeId","data-v-c07c7918"]]);var Y=W,B={name:"App",components:{AppHeader:y,AppCart:Y,AppFooter:I},data(){return{cartItems:[]}},computed:{total(){return this.cartItems.reduce(((e,t)=>e+t.price*t.quantity),0).toFixed(2)},cartQuantity(){return this.cartItems.reduce(((e,t)=>e+t.quantity),0)}},methods:{handleAddToCart(e){const t=this.cartItems.find((t=>t.id===e.id));t?t.quantity+=1:this.cartItems.push({...e,quantity:1})},clearCart(){this.cartItems=[]},handleIncreaseQuantity(e){const t=this.cartItems.find((t=>t.id===e.id));t&&(t.quantity+=1)},handleDecreaseQuantity(e){const t=this.cartItems.find((t=>t.id===e.id));t.quantity>1?t.quantity-=1:this.cartItems=this.cartItems.filter((t=>t.id!=e.id))},handleCheckout(){this.cartItems=[]}},created(){const e=localStorage.getItem("cartItems");e&&(this.cartItems=JSON.parse(e))},watch:{cartItems:{handler(e){localStorage.setItem("cartItems",JSON.stringify(e))},deep:!0}}};const V=(0,k.A)(B,[["render",i]]);var U=V,K=a(5220);const G={class:"min-h-screen"},R={class:"promo-card-wrapper"},Z={class:"hidden sm:block md:hidden lg:block carousel-right"},ee={class:"order-now-section p-10 rounded-lg shadow-lg text-center"};function te(e,t,a,s,r,n){const i=(0,o.g2)("PromoCard"),l=(0,o.g2)("PizzaCarousel");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t[4]||(t[4]=(0,o.Lk)("section",{class:"bg-cover bg-center w-full items-center justify-center",style:{"background-image":"url('https://i.postimg.cc/KzJtLjTG/toronto-restaurants-occhiolino-italian-spread-1-1.jpg')"}},[(0,o.Lk)("h2",{class:"lg:text-4xl md:text-2xl sm:text-xl text-white font-bold"},"Savor Every Bite🍴")],-1)),(0,o.Lk)("section",G,[(0,o.Lk)("div",R,[(0,o.bF)(i)]),t[1]||(t[1]=(0,o.Fv)('<section class="how-it-works" data-v-7b65ccc7><h2 class="how-it-works-title" data-v-7b65ccc7>How it Works</h2><div class="steps-container" data-v-7b65ccc7><div class="step" data-v-7b65ccc7><img src="https://i.postimg.cc/4N6tBmkQ/restaurant-1.webp" alt="Pick Your Meals" class="step-icon" data-v-7b65ccc7><p class="step-number" data-v-7b65ccc7>01</p><h3 class="step-title" data-v-7b65ccc7>Pick Your Meals</h3><p class="step-description" data-v-7b65ccc7>A new menu of 30+ options every week</p></div><div class="step" data-v-7b65ccc7><img src="https://i.postimg.cc/c18ftFFj/cooking-1.webp" alt="Cooked Fresh by Chefs" class="step-icon" data-v-7b65ccc7><p class="step-number" data-v-7b65ccc7>02</p><h3 class="step-title" data-v-7b65ccc7>Cooked Fresh by Chefs</h3><p class="step-description" data-v-7b65ccc7>Our gourmet chefs do the prep, so you can do you.</p></div><div class="step" data-v-7b65ccc7><img src="https://i.postimg.cc/7YWXr5Q8/tray-1.webp" alt="Heat, Eat &amp; Enjoy" class="step-icon" data-v-7b65ccc7><p class="step-number" data-v-7b65ccc7>03</p><h3 class="step-title" data-v-7b65ccc7>Heat, Eat &amp; Enjoy</h3><p class="step-description" data-v-7b65ccc7>No prep. No mess. Our meals arrive ready to heat and eat in minutes.</p></div></div></section>',1)),(0,o.Lk)("div",Z,[(0,o.bF)(l)])]),(0,o.Lk)("div",ee,[t[2]||(t[2]=(0,o.Lk)("h3",{class:"Hungry text-3xl font-poppins font-bold mb-4"},"Hungry?",-1)),t[3]||(t[3]=(0,o.Lk)("p",{class:"tag text-lg font-poppins mb-6"},"Order your favorite meals now!",-1)),(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>n.navigateTo("/menu")),class:"bg-pink-500 text-white px-6 py-3 rounded hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110 hover:bg-pink-600"}," Order Now ")])],64)}const ae={class:"carousel-container-wrapper",style:{width:"100%",overflow:"visible"}},se={class:"relative items-center"},oe={class:"carousel-container relative",style:{width:"5vw",height:"75vh"}},re=["onClick"],ne={key:0,class:"pizza-details text-top",style:{top:"-25%",right:"-70%",opacity:1}},ie={class:"text-2xl font-bold text-gray-800 transition duration-700 ease-in-out"},le={class:"text-gray-600 transition-all duration-700 ease-in-out"};function ce(e,t,a,s,r,n){return(0,o.uX)(),(0,o.CE)("div",ae,[(0,o.Lk)("div",se,[(0,o.Lk)("div",oe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.pizzas,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:(0,l.C4)(["pizza-item absolute bg-cover cursor-pointer transition duration-50 rounded-full",{"hover:shadow-lg hover:bg-pink-300":r.activeIndex!==t}]),style:(0,l.Tr)({...n.getPizzaStyle(t),transition:"all 0.5s ease-in-out"}),onClick:e=>n.setActiveIndex(t)},null,14,re)))),128))])]),null!==r.activeIndex?((0,o.uX)(),(0,o.CE)("div",ne,[(0,o.Lk)("h2",ie,(0,l.v_)(r.pizzas[r.activeIndex].name),1),(0,o.Lk)("p",le,(0,l.v_)(r.pizzas[r.activeIndex].description),1)])):(0,o.Q3)("",!0)])}a(1454);var de={name:"PizzaCarouselVerticalSemiCircle",data(){return{pizzas:[{image:"https://i.postimg.cc/3rZx3Dks/04-1.webp",name:"Margherita",description:"Classic margherita with fresh tomatoes and basil."},{image:"https://i.postimg.cc/fR8dyrJh/01-2.webp",name:"Veggie",description:"Loaded with veggies."},{image:"https://i.postimg.cc/L88qc3vQ/02-1.webp",name:"Pepperoni",description:"Topped with pepperoni slices and cheese."},{image:"https://i.postimg.cc/9fPvyyHV/03-1.webp",name:"BBQ Chicken",description:"Barbecue chicken with tangy sauce."},{image:"https://i.postimg.cc/fR8dyrJh/01-2.webp",name:"Tandoori Paneer",description:"Indian paneer with spices."},{image:"https://i.postimg.cc/L88qc3vQ/02-1.webp",name:"Cheese Burst",description:"A cheesy delight with every bite."},{image:"https://i.postimg.cc/3rZx3Dks/04-1.webp",name:"Spicy Italian",description:"Hot and spicy Italian flavors."}],pizzaPositions:[],activeIndex:0}},created(){this.initializePositions()},methods:{initializePositions(){this.pizzaPositions=this.pizzas.map(((e,t)=>t))},setActiveIndex(e){this.activeIndex!==e&&(this.activeIndex=e,this.pizzaPositions=this.pizzaPositions.map((t=>(t-this.pizzaPositions[e]+this.pizzas.length)%this.pizzas.length)))},getPizzaStyle(e){const t=this.pizzas.length,a=this.pizzaPositions[e],s=180/(t-1),o=10;if(0===a)return{transform:"translate(-50%, -50%) scale(6)",top:"20%",left:"85%",backgroundImage:`url(${this.pizzas[e].image})`,zIndex:10};const r=320,n=s*a-o,i=Math.cos(n*Math.PI/180)*r,l=Math.sin(n*Math.PI/180)*r;return{transform:`translate(${l}px, ${-i}px) scale(0.8)`,top:"10%",left:"25%",backgroundImage:`url(${this.pizzas[e].image})`,zIndex:a<t/2?5:1,width:"120px",height:"120px"}}}};const ue=(0,k.A)(de,[["render",ce],["__scopeId","data-v-12263c00"]]);var pe=ue;const me={class:"promo-card"},he={class:"promo-content"},ge=["src"];function be(e,t,a,s,r,n){return(0,o.uX)(),(0,o.CE)("div",me,[(0,o.Lk)("div",he,[t[0]||(t[0]=(0,o.Lk)("p",{class:"promo-title"},"-50% off",-1)),t[1]||(t[1]=(0,o.Lk)("p",{class:"promo-subtitle text-white"},"the full price of pizzas!",-1)),(0,o.Lk)("img",{src:r.burgerImageUrl,class:"promo-image",alt:"Burger"},null,8,ge)])])}var fe={name:"PromoCard",data(){return{burgerImageUrl:"https://i.postimg.cc/28YJHcXb/pizza-PNG43978.webp"}}};const xe=(0,k.A)(fe,[["render",be],["__scopeId","data-v-467fff2e"]]);var ke=xe,ve={name:"Home",components:{PizzaCarousel:pe,PromoCard:ke},methods:{navigateTo(e){this.$router.push(e)}}};const ye=(0,k.A)(ve,[["render",te],["__scopeId","data-v-7b65ccc7"]]);var we=ye;const Ce={class:"min-h-screen flex flex-col"},Le={class:"container mx-auto py-4 mt-20"},Ie={class:"w-full max-w-sm min-w-[200px]"},ze={class:"relative flex items-center bg-gray-100 border border-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105"},Ee={class:"container mx-auto py-8"},Ae={class:"border-b border-gray-200 dark:border-gray-700"},Xe={class:"flex flex-wrap -mb-px text-lg font-medium text-center text-gray-900 dark:text-gray-700 justify-center"},_e=["onClick"],Fe=["src","alt"],Qe={key:0,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},je={class:"relative p-2 h-96 overflow-hidden rounded-xl bg-clip-border"},$e=["src","alt"],Oe={class:"p-4 flex flex-col flex-grow"},Pe={class:"mb-2 flex items-center justify-between"},Me={class:"text-slate-800 text-xl font-semibold"},Te={class:"text-cyan-600 text-xl font-semibold"},De={class:"text-slate-600 leading-normal font-light flex-grow"},Ne={class:"mt-auto"},Se=["onClick"],qe={key:1,class:"text-center"},He={key:0,class:"text-gray-500"},Je={key:1,class:"text-gray-500"};function We(e,t,a,r,n,i){return(0,o.uX)(),(0,o.CE)("section",Ce,[(0,o.Lk)("section",Le,[(0,o.Lk)("div",Ie,[(0,o.Lk)("div",ze,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),type:"text",placeholder:"Search for items...",class:"w-full bg-transparent placeholder:text-gray-500 text-gray-700 text-sm border-none rounded-full pr-3 pl-7 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",onInput:t[1]||(t[1]=(...e)=>i.searchItems&&i.searchItems(...e))},null,544),[[s.Jo,n.searchQuery]]),t[2]||(t[2]=(0,o.Lk)("button",{class:"rounded-full ml-2 bg-gray-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button"},[(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4"},[(0,o.Lk)("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z","clip-rule":"evenodd"})])],-1))])])]),(0,o.Lk)("section",Ee,[(0,o.Lk)("div",Ae,[(0,o.Lk)("ul",Xe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.categories,(t=>((0,o.uX)(),(0,o.CE)("li",{key:t,onClick:e=>i.fetchMenu(t),class:"me-4"},[(0,o.Lk)("a",{href:"#",class:(0,l.C4)(["inline-flex items-center justify-center px-6 py-4 border-b-2 rounded-t-lg group",e.activeCategory===t?"text-black border-black dark:text-gray-200 dark:border-gray-200":"border-transparent hover:text-black hover:border-black dark:hover:text-black"]),"aria-current":"page"},[(0,o.Lk)("img",{src:n.categoryIcons[t],alt:t,class:(0,l.C4)(["w-6 h-6 me-3",[e.activeCategory===t?"text-black dark:text-gray-200":"text-gray-600 group-hover:text-black dark:text-gray-400 dark:group-hover:text-black"]])},null,10,Fe),(0,o.eW)(" "+(0,l.v_)(t),1)],2)],8,_e)))),128))])]),n.menuItems.length>0?((0,o.uX)(),(0,o.CE)("div",Qe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.menuItems,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"relative flex flex-col my-1 bg-white shadow-sm border border-slate-200 rounded-lg w-96"},[(0,o.Lk)("div",je,[(0,o.Lk)("img",{src:e.img||e.image||"https://via.placeholder.com/150",alt:e.name,class:"h-full w-full object-cover rounded-md"},null,8,$e)]),(0,o.Lk)("div",Oe,[(0,o.Lk)("div",Pe,[(0,o.Lk)("p",Me,(0,l.v_)(e.name),1),(0,o.Lk)("p",Te," $"+(0,l.v_)(e.price),1)]),(0,o.Lk)("p",De,(0,l.v_)(e.description),1),(0,o.Lk)("div",Ne,[(0,o.Lk)("button",{class:"rounded-md w-full bg-[#f87193] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-[#f87193] focus:shadow-none active:bg-[#f87193] hover:bg-[#f87193] active:hover:bg-[#f87193] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",type:"button",onClick:t=>i.addToCart(e)}," Add to Cart ",8,Se)])])])))),128))])):((0,o.uX)(),(0,o.CE)("div",qe,[n.isLoading?((0,o.uX)(),(0,o.CE)("p",He,"Loading menu...")):((0,o.uX)(),(0,o.CE)("p",Je,"No items found for this category."))]))])])}var Ye={name:"AppMenu",data(){return{menuItems:[],categories:["pizzas","desserts"],selectedCategory:"pizzas",searchQuery:"",isLoading:!1,categoryIcons:{pizzas:"https://i.postimg.cc/zDjXfdvC/pizzasmallicon.webp",desserts:"https://i.postimg.cc/fyBwgbp2/dessertsmallicon.webp"}}},methods:{async fetchMenu(e){this.isLoading=!0;try{const t=await fetch(`https://pizza-and-desserts.p.rapidapi.com/${e}`,{method:"GET",headers:{"x-rapidapi-key":"1bf1ce62e0msh1196b9fd7ccd351p147dc3jsn940fa904a174","x-rapidapi-host":"pizza-and-desserts.p.rapidapi.com"}}),a=await t.json();console.log(`Fetched data for ${e}:`,a),this.menuItems=a,this.selectedCategory=e}catch(t){console.error(`Error fetching ${e}:`,t),this.menuItems=[]}finally{this.isLoading=!1}},async fetchAllCategories(){this.isLoading=!0;try{const e=[];for(const t of this.categories){const a=await fetch(`https://pizza-and-desserts.p.rapidapi.com/${t}`,{method:"GET",headers:{"x-rapidapi-key":"1bf1ce62e0msh1196b9fd7ccd351p147dc3jsn940fa904a174","x-rapidapi-host":"pizza-and-desserts.p.rapidapi.com"}}),s=await a.json();e.push(...s),console.log(`Fetched data for ${t}:`,s)}this.allItems=e,this.menuItems=[...this.allItems]}catch(e){console.error("Error fetching all categories:",e),this.menuItems=[]}finally{this.isLoading=!1}},addToCart(e){const t={id:`${this.selectedCategory}-${e.id}`,name:e.name,description:e.description||"No description available",price:e.price,img:e.img||e.image||"https://via.placeholder.com/150",quantity:1};this.$emit("add-to-cart",t)},searchItems(){const e=this.searchQuery.toLowerCase();this.menuItems=this.allItems.filter((t=>t.name.toLowerCase().includes(e)||t.description&&t.description.toLowerCase().includes(e)))}},created(){this.fetchMenu("pizzas"),this.fetchAllCategories()}};const Be=(0,k.A)(Ye,[["render",We]]);var Ve=Be;const Ue={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},Ke={class:"relative bg-green-500 text-white px-6 py-4 rounded shadow-lg w-80 text-center animate-scale-up"},Ge={class:"font-sans max-w-5xl max-md:max-w-xl mx-auto bg-transparent py-8 mt-20 rounded-t"},Re={key:0,class:"grid md:grid-cols-3 gap-8 mt-16"},Ze={class:"md:col-span-2 space-y-4"},et={class:"col-span-2 flex items-start gap-4"},tt={class:"w-64 h-48 max-sm:w-24 max-sm:h-24 shrink-0 rounded-md"},at=["src","alt"],st={class:"flex flex-col"},ot={class:"text-base font-bold text-gray-800"},rt={class:"ml-auto"},nt={class:"text-lg max-sm:text-base font-bold text-gray-800"},it={class:"mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"},lt=["onClick"],ct={class:"mx-3 font-bold"},dt=["onClick"],ut={class:"bg-gray-100 rounded-md p-4 h-max"},pt={class:"text-gray-800 mt-6 space-y-3"},mt={class:"flex flex-wrap gap-4 text-sm"},ht={class:"ml-auto font-bold"},gt={class:"flex flex-wrap gap-4 text-sm"},bt={class:"ml-auto font-bold"},ft={class:"flex flex-wrap gap-4 text-sm font-bold"},xt={class:"ml-auto"},kt={class:"mt-6 space-y-3"},vt={key:1,class:"text-center mt-10"},yt={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},wt={class:"bg-white p-6 rounded shadow-lg text-center"},Ct={class:"mt-4"};function Lt(e,t,a,s,r,n){return(0,o.uX)(),(0,o.CE)(o.FK,null,[r.showNotification?((0,o.uX)(),(0,o.CE)("div",Ue,[(0,o.Lk)("div",Ke,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>r.showNotification=!1),class:"absolute top-2 right-2 text-white hover:text-gray-300 text-3xl font-bold"}," × "),t[5]||(t[5]=(0,o.Lk)("h2",{class:"text-2xl font-bold mb-2"},"Order Placed!",-1)),t[6]||(t[6]=(0,o.Lk)("p",null,"Your order has been placed successfully.",-1))])])):(0,o.Q3)("",!0),(0,o.Lk)("section",Ge,[t[18]||(t[18]=(0,o.Lk)("h1",{class:"text-3xl font-bold text-gray-800 text-center"},"Your Order",-1)),a.cartItems.length>0?((0,o.uX)(),(0,o.CE)("div",Re,[(0,o.Lk)("div",Ze,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.cartItems,(a=>((0,o.uX)(),(0,o.CE)("div",{key:a.id,class:"grid grid-cols-3 items-start gap-4 bg-gray-100 p-2 rounded shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]"},[(0,o.Lk)("div",et,[(0,o.Lk)("div",tt,[(0,o.Lk)("img",{src:a.img,alt:a.name,class:"w-full h-full object-contain"},null,8,at)]),(0,o.Lk)("div",st,[(0,o.Lk)("h3",ot,(0,l.v_)(a.name),1)])]),(0,o.Lk)("div",rt,[(0,o.Lk)("h4",nt," $"+(0,l.v_)((a.price*a.quantity).toFixed(2)),1),(0,o.Lk)("div",it,[((0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-2.5 fill-current cursor-pointer",viewBox:"0 0 124 124",onClick:t=>e.$emit("decrease-quantity",a)},t[7]||(t[7]=[(0,o.Lk)("path",{d:"M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"},null,-1)]),8,lt)),(0,o.Lk)("span",ct,(0,l.v_)(a.quantity),1),((0,o.uX)(),(0,o.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-2.5 fill-current cursor-pointer",viewBox:"0 0 42 42",onClick:t=>e.$emit("increase-quantity",a)},t[8]||(t[8]=[(0,o.Lk)("path",{d:"M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"},null,-1)]),8,dt))])])])))),128)),t[9]||(t[9]=(0,o.Lk)("hr",{class:"border-gray-300"},null,-1))]),(0,o.Lk)("div",ut,[t[15]||(t[15]=(0,o.Lk)("h3",{class:"text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2"}," Order Summary ",-1)),(0,o.Lk)("ul",pt,[(0,o.Lk)("li",mt,[t[10]||(t[10]=(0,o.eW)(" Subtotal ")),(0,o.Lk)("span",ht,"$"+(0,l.v_)(a.total),1)]),t[13]||(t[13]=(0,o.Lk)("li",{class:"flex flex-wrap gap-4 text-sm"},[(0,o.eW)(" Shipping "),(0,o.Lk)("span",{class:"ml-auto font-bold"},"$5.00")],-1)),(0,o.Lk)("li",gt,[t[11]||(t[11]=(0,o.eW)(" Tax ")),(0,o.Lk)("span",bt,"$"+(0,l.v_)((.0625*a.total).toFixed(2)),1)]),t[14]||(t[14]=(0,o.Lk)("hr",{class:"border-gray-300"},null,-1)),(0,o.Lk)("li",ft,[t[12]||(t[12]=(0,o.eW)(" Total ")),(0,o.Lk)("span",xt,"$"+(0,l.v_)(a.total),1)])]),(0,o.Lk)("div",kt,[(0,o.Lk)("button",{type:"button",onClick:t[1]||(t[1]=(...e)=>n.handleCheckout&&n.handleCheckout(...e)),class:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"}," Checkout "),(0,o.Lk)("button",{type:"button",onClick:t[2]||(t[2]=e=>n.navigateTo("/menu")),class:"text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"}," Continue Shopping ")])])])):((0,o.uX)(),(0,o.CE)("div",vt,t[16]||(t[16]=[(0,o.Lk)("p",{class:"text-lg text-gray-500"},"Your cart is empty.",-1)]))),r.showConfirmation?((0,o.uX)(),(0,o.CE)("div",yt,[(0,o.Lk)("div",wt,[t[17]||(t[17]=(0,o.Lk)("p",null,"Are you sure you want to clear the cart?",-1)),(0,o.Lk)("div",Ct,[(0,o.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>n.confirmClearCart&&n.confirmClearCart(...e)),class:"bg-red-500 text-white px-4 py-2 rounded mr-2 p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"}," Yes "),(0,o.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>n.cancelClearCart&&n.cancelClearCart(...e)),class:"bg-gray-300 px-4 py-2 rounded p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"}," No ")])])])):(0,o.Q3)("",!0)])],64)}var It={name:"CartPage",props:{cartItems:{type:Array,required:!0},total:{type:String,required:!0},shipping_cost:{type:String,required:!0},tax:{type:String,required:!0}},data(){return{showNotification:!1,showConfirmation:!1}},methods:{navigateTo(e){this.$router.push(e)},handleCheckout(){this.$emit("checkout"),this.showNotification=!0,setTimeout((()=>{this.showNotification=!1}),3e3)},handleClearCart(){this.showConfirmation=!0},confirmClearCart(){this.$emit("clear-cart"),this.showConfirmation=!1},cancelClearCart(){this.showConfirmation=!1}}};const zt=(0,k.A)(It,[["render",Lt],["__scopeId","data-v-75761e51"]]);var Et=zt;const At={class:"min-h-screen flex flex-col items-center"},Xt={class:"container mx-auto py-8"},_t={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Ft={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},Qt={class:"bg-white p-6 rounded shadow-lg text-center"};function jt(e,t,a,r,n,i){return(0,o.uX)(),(0,o.CE)("section",At,[(0,o.Lk)("section",Xt,[t[13]||(t[13]=(0,o.Lk)("h3",{class:"text-2xl font-bold mb-4 text-center mt-20"},"We're Here to Help!",-1)),(0,o.Lk)("div",_t,[t[12]||(t[12]=(0,o.Lk)("div",{class:"space-y-4"},[(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"Phone:"),(0,o.eW)(" +1 800-FOOD-123")]),(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"Email:"),(0,o.eW)(" support@fooddelivery.com")]),(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"Address:"),(0,o.eW)(" 456 Gourmet Avenue, Food City, USA")]),(0,o.Lk)("p",null,[(0,o.Lk)("strong",null,"Business Hours:"),(0,o.eW)(" Mon-Sun, 10 AM - 10 PM")])],-1)),(0,o.Lk)("form",{onSubmit:t[4]||(t[4]=(0,s.D$)(((...e)=>i.submitFeedback&&i.submitFeedback(...e)),["prevent"])),class:"space-y-4 bg-gray-100 p-6 rounded shadow"},[(0,o.Lk)("div",null,[t[6]||(t[6]=(0,o.Lk)("label",{for:"name",class:"block text-sm font-bold mb-1"},"Name",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.formData.name=e),required:"",class:"w-full px-4 py-2 border rounded"},null,512),[[s.Jo,n.formData.name]])]),(0,o.Lk)("div",null,[t[7]||(t[7]=(0,o.Lk)("label",{for:"email",class:"block text-sm font-bold mb-1"},"Email",-1)),(0,o.bo)((0,o.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.formData.email=e),required:"",class:"w-full px-4 py-2 border rounded"},null,512),[[s.Jo,n.formData.email]])]),(0,o.Lk)("div",null,[t[8]||(t[8]=(0,o.Lk)("label",{for:"orderId",class:"block text-sm font-bold mb-1"},"Order ID (Optional)",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"orderId","onUpdate:modelValue":t[2]||(t[2]=e=>n.formData.orderId=e),class:"w-full px-4 py-2 border rounded"},null,512),[[s.Jo,n.formData.orderId]])]),(0,o.Lk)("div",null,[t[9]||(t[9]=(0,o.Lk)("label",{for:"message",class:"block text-sm font-bold mb-1"},"Message",-1)),(0,o.bo)((0,o.Lk)("textarea",{id:"message","onUpdate:modelValue":t[3]||(t[3]=e=>n.formData.message=e),required:"",rows:"4",class:"w-full px-4 py-2 border rounded"},null,512),[[s.Jo,n.formData.message]])]),t[10]||(t[10]=(0,o.Lk)("button",{type:"submit",class:"bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600"}," Submit Feedback ",-1))],32),n.feedbackSubmitted?((0,o.uX)(),(0,o.CE)("div",Ft,[(0,o.Lk)("div",Qt,[t[11]||(t[11]=(0,o.Lk)("p",null,"Feedback submitted successfully!",-1)),(0,o.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>i.closeFeedbackModal&&i.closeFeedbackModal(...e)),class:"bg-blue-500 text-white px-4 py-2 rounded mt-4"},"OK")])])):(0,o.Q3)("",!0)])]),t[14]||(t[14]=(0,o.Lk)("section",{class:"container mx-auto py-8"},[(0,o.Lk)("h3",{class:"text-2xl font-bold mb-4 text-center"},"Our Location"),(0,o.Lk)("div",{class:"flex justify-center"},[(0,o.Lk)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0858474569175!2d144.9560543153165!3d-37.81362797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzQ5LjkiUyAxNDTCsDU3JzI3LjciRQ!5e0!3m2!1sen!2sus!4v1635812726590!5m2!1sen!2sus",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",class:"rounded shadow"})])],-1))])}var $t={name:"ContactsPage",data(){return{feedbackSubmitted:!1,formData:{name:"",email:"",orderId:"",message:""}}},methods:{submitFeedback(){this.formData.name&&this.formData.email&&this.formData.message&&(this.feedbackSubmitted=!0),console.log(this.formData)},closeFeedbackModal(){this.feedbackSubmitted=!1,this.formData={name:"",email:"",orderId:"",message:""}}}};const Ot=(0,k.A)($t,[["render",jt]]);var Pt=Ot;const Mt=[{path:"/",name:"Home",component:we},{path:"/menu",name:"AppMenu",component:Ve},{path:"/contact",name:"Contact",component:Pt},{path:"/cart",name:"Cart",component:Et},{path:"/:pathMatch(.*)*",redirect:"/"}],Tt=(0,K.aE)({history:(0,K.LA)("/food-delivery-app/"),routes:Mt});var Dt=Tt;const Nt=(0,s.Ef)(U);Nt.use(Dt),Nt.mount("#app")}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,r){if(!s){var n=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(i=!1,r<n&&(n=r));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,o,r]}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,r,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var d=l(a)}for(t&&t(s);c<n.length;c++)r=n[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},s=self["webpackChunkfood_delivery_app"]=self["webpackChunkfood_delivery_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(1829)}));s=a.O(s)})();
//# sourceMappingURL=app.a4b83488.js.map