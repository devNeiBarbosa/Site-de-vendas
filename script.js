const list = document.querySelector(".products-cards") // section onde minhas divs dos produtos estão
const buttonProducts = document.querySelector(".products") // mapeamento do botão "Produtos"
const buttonDiscount = document.querySelector(".discount")// mapeando botão "pagamento via Pix"
const infoCart = document.querySelector(".addCart-quantity") // informações do meu carrinho de compras

const cardItemCheckin = document.querySelector(".card-item-checkin")// section onde as info do product do meu carrinho está
const cardCheckin = document.querySelector(".add-cart") // button do carrinho
const mascaraSite = document.querySelector(".background-color") // mascara do site para esconder checkin
const checkinProducts = document.querySelector(".card-item-checkin") // checkin

function viewProducts(productsArray) { // mostrar produto
    let myDiv = ''; // reinicia o HTML
    productsArray.forEach(product => {
        myDiv += `
            <div class="product-vp">
                <img src="${product.src}" alt="Info Valorant Points" width="220px">
                <p>${product.name}</p>
                <button class="button-value">
                    <img class="cart-button" src="/assets/img/cart.png" alt="image cart" width="16px"><b>RS${product.price.toFixed(2)}</b>
                </button>
            </div>
        `
    }); list.innerHTML = myDiv; // Atualiza o container com os produtos

    // Seleciona todos os botões de adicionar ao carrinho após renderizar os produtos
    document.querySelectorAll(".button-value").forEach(button => {
        button.addEventListener("click", addToCart) // evento para observar quando o botão for clicado, e dispara a função addToCart
    })
}

function mapDiscount() {
    const menuWithDiscount = menuVps.map(product => ({
        ...product, // mantém todos os itens igual, exceto o que eu citei abaixo para as mudanças
        price: product.price - (product.price * 0.05)
    }));
    viewProducts(menuWithDiscount); // Chama a função para mostrar produtos com desconto
}

let addProduct = 0; // contador do carrinho

function addToCart(event) {
    addProduct++; // Incrementa o contador
    infoCart.innerHTML = addProduct; // Atualiza o HTML do elemento infoCart com o novo valor
    
    // Obtém o índice do botão clicado
    const index = Array.from(document.querySelectorAll(".button-value")).indexOf(event.target);

    // Obtém o produto correspondente em itemCart
    const selectedProduct = itemCart[index];

    if (selectedProduct) {
        viewProductsCheckin([selectedProduct]); // Exibe apenas o item selecionado
    }
}

let cartItems = []; // array para armazenar os produtos adicionados ao carrinho

// Garantir que o .card-item-checkin inicie vazio ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    checkinProducts.innerHTML = ''; // Esvazia o conteúdo ao carregar a página
});

function viewProductsCheckin(productsArray) {
    let myCheckin = '';
    productsArray.forEach(product => {
        myCheckin += `
        <div class="container-checkin">
            <img class="img-checkin" src="${product.src}">
            <p class="info-product-checkin"><b>${product.name}</b></p>
            <select class="select-quantity" name="quantidade de itens" id="select-quantity-id">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <p class="value"><b>R$${product.price.toFixed(2)}</b></p>
            <button class="delet-icon-checkin"><img src="/assets/img/lixo icon.png" alt="delet-icon" width="20px"></button>
        </div>

        <div class="finish-checkout">
            <p class="finish-value"><b>R$${product.price.toFixed(2)}</b></p>
            <button><img class="finish-cart" src="/assets/img/cart.png" alt="carrinho de compra" width="16px">FINALIZAR COMPRA</button>
        </div>
        `
    }); checkinProducts.innerHTML = myCheckin;
}

function visibleCheckin() {
    checkinProducts.style.visibility = "visible"
}

function hiddenCheckin() {
    checkinProducts.style.visibility = "hidden"
}


buttonProducts.addEventListener("click", () => viewProducts(menuVps)) //arrow fucntion adicionada para esconder meus produtos ate o click do botão
buttonDiscount.addEventListener("click", mapDiscount)
infoCart.addEventListener("click", visibleCheckin)
mascaraSite.addEventListener("click", hiddenCheckin)
cardCheckin.addEventListener("click", viewProductsCheckin(itemCart))