const products = [
     {
        id: 1,
        name: "تی‌شرت سفید",
        price: 250000,
          image: "white-tshirt.jpg"
    },
    {
        id: 2,
        name: "هودی مشکی",
        price: 890000,
        image: "black-hoodie.jpg"
    },
    
        
    
    {
        id: 4,
        name: "کاپشن مردانه",
        price: 1450000,
       image: "jacket.jpg"
    }
    ,
{
    id: 5,
    name: "پیراهن مردانه",
    price: 550000,
    image: "shirt.jpg"
}
];

let cart = [];

const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");

function formatPrice(price) {
    return price.toLocaleString("fa-IR") + " تومان";
}

function renderProducts() {
    productList.innerHTML = products.map(product => `
        <article class="product-card">
            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <h3>${product.name}</h3>

            <p class="price">
                ${formatPrice(product.price)}
            </p>

            <button onclick="addToCart(${product.id})">
                افزودن به سبد خرید
            </button>
        </article>
    `).join("");
}

function addToCart(productId) {
    cart.push(productId);

    cartCount.textContent = cart.length;

    alert("محصول به سبد خرید اضافه شد!");
}

document.getElementById("cartButton")
    .addEventListener("click", () => {
        if (cart.length === 0) {
            alert("سبد خرید خالی است!");
            return;
        }

        const names = cart.map(id => {
            return products.find(p => p.id === id).name;
        });

        alert(
            "محصولات سبد خرید:\n" + names.join("\n")
        );
    });

renderProducts();
const clothingSelect = document.getElementById("clothingSelect");
const virtualModelImage = document.getElementById("virtualModelImage");
const virtualModelMessage = document.getElementById("virtualModelMessage");

const clothingImages = {
    "white-tshirt": "white-tshirt.jpg",
    "black-hoodie": "black-hoodie.jpg",
    "shirt": "shirt.jpg",
    "jacket": "jacket.jpg"
};

if (clothingSelect && virtualModelImage) {
    clothingSelect.addEventListener("change", function () {
        const selectedClothing = clothingSelect.value;
        const imagePath = clothingImages[selectedClothing];

        if (imagePath) {
            virtualModelImage.src = imagePath;

            if (virtualModelMessage) {
                virtualModelMessage.textContent =
                    "عکس محصول انتخاب‌شده نمایش داده شد.";
            }
        }
    });
}
