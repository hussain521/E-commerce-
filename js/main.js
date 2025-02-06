 // detiels
function imgSlider(i) {
  document.querySelector(".product").src = i;
}
let push = document.querySelector(".push")
let bar = document.querySelector(".sidebar");
let exit = document.querySelector(".exit");
push.addEventListener("click", () => {
  bar.style.display ="inline-block";
});
exit.addEventListener("click", () => {
  bar.style.display ="none";
});
const product = [
  {
    id: 1,
    img: "image/lab (1).jpeg",
    name: "MACBOOK AIR 2025 ",
    type: "laptop",
    all: "all",
    price: 1500,
  },
  {
    id: 2,
    img: "image/ip8.jpeg",
    name: "APPLE 15 PRO",
    type: "mobile",
    all: "all",
    price: 500,
  },
  {
    id: 3,
    img: "image/air (5).jpeg",
    name: "AIRBODS PRO",
    type: "headphone",
    all: "all",
    price: 200,
  },
  {
    id: 4,
    img: "image/w (6).jpeg",
    name: "SMART WATCH",
    type: "watch",
    all: "all",
    price: 150,
  },
  {
    id: 5,
    img: "image/ip9.jpeg",
    name: "APPLE 14 PRO ",
    type: "mobile",
    all: "all",
    price: 600,
  },
  {
    id: 6,
    img: "image/lab (2).jpeg",
    name: "MACBOOK PRO 2020 ",
    type: "laptop",
    all: "all",
    price: 900,
  },
  {
    id: 7,

    img: "image/w (5).jpeg",
    name: "SMART WATCH",
    type: "watch",
    all: "all",
    price: 200,
  },
  {
    id: 5,
    img: "image/ip1.jpeg",
    name: "APPLE 16 PRO ",
    type: "mobile",
    price: 600,
  },
  {
    id: 5,
    img: "image/ip3.jpeg",
    name: "APPLE 11 PRO ",
    type: "mobile",
    price: 600,
  },
  {
    id: 5,
    img: "image/ip4.jpeg",
    name: "APPLE 15 PRO ",
    type: "mobile",
    price: 600,
  },
  {
    id: 5,
    img: "image/ip2.jpeg",
    name: "APPLE 11 PRO ",
    type: "mobile",
    price: 600,
  },
  {
    id: 8,
    img: "image/air (4).jpeg",
    name: "AIRBODS PRO",
    type: "headphone",
    all: "all",
    price: 150,
  },
  {
    id: 9,
    img: "image/lab (3).jpeg",
    name: "MACBOOK AIR 2022 ",
    type: "laptop",
    all: "all",
    price: 1500,
  },
  {
    id: 10,
    img: "image/ip5.jpeg",
    name: "Apple 13 PRO",
    type: "mobile",
    all: "all",
    price: 500,
  },
  {
    id: 11,
    img: "image/ip10.jpeg",
    name: "TABLET PRO",
    type: "lab",
    all: "all",
    price: 100,
  },
  {
    id: 12,
    img: "image/w (3).jpeg",
    name: "SMART WATCH",
    type: "watch",
    all: "all",
    price: 150,
  },
  
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories.map((item) => {
  var { img, name, price,type,all } = item;
  return (
    `
              <div class="col ${type} ${all}">
                <div class="card h-100">
                <img src="${img}" class="card-img-top w-75 m-auto" alt="...">
                <div class="card-body">
                <h6 class="card-title ">${name}</h6>
                <div class="d-flex justify-content-between align-items-center mb-3">
                <p style="font-size: 14px;" class='m-0'>$ ${price}.00</p>
                <div class="star"  style="font-size: 10px; color: var(--main-color) ;">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
                </div>
                
                ` +
    "<button  class=' bttn rounded-3 text-black-50 border border-1 py-2 text-capitalize w-75' onclick='addtocart(" +
    i++ +
    ")'>add to cart <i class='bx bx-cart  ms-2'></i> </button>" +
    `
                <i class='fa-solid fa-heart text-black-50 border-1 border py-2 pb-2 px-2 ms-2' style="font-size: 12px;"></i> 
                </div>
                </div>
                </div> `
  );
}).join('')

function addtocart(a){
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}
let cart = [];

function displaycart(a){

    let j = 0, total = 0;
    document.getElementById("quantity").innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById("cartItem").innerHTML = "<p>Cart is empty</p>";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((item)=>{
            var { img, name, price } = item;
            total+=price
            document.getElementById("total").innerHTML = "$ "+total+".00";
return (
  `
<div class="cart-item mb-3 d-flex justify-content-between align-items-center">
<div class="row-img">
<img src="${img}" class="rowimg   rounded-pill" alt="">
</div>
<p class="pt-2">${name}</p>
<h6 class='text-black-50'>$ ${price}.00</h6>` +
  "<i class='fa-solid fa-trash  ' onclick='delElement(" +
  j++ +
  ")'></i></div>"
);
        }).join('')
    }
}
//products
let switcher = document.querySelectorAll(".switcher li");
let dives = document.querySelectorAll(".content .col");
switcher.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImages);
});
function removeActive() {
  switcher.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function manageImages() {
  dives.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "inline-block";
  });
}

