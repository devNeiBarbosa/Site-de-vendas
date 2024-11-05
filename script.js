const list = document.querySelector(".products-cards") // section onde minhas divs dos produtos estão
const buttonProducts = document.querySelector(".products") // mapeamento do botão "Produtos"
const buttonDiscount = document.querySelector(".discount")// mapeando botão "pagamento via Pix"
const infoCart = document.querySelector(".addCart") // informações do meu carrinho de compras

let myDiv = ''; // Variável para armazenar o HTML dos produtos

function viewProducts(productsArray) { // mostrar produto
    myDiv = ''; // reinicia o HTML
    productsArray.forEach(product => {
        myDiv += `
            <div class="product-vp">
                <img src="${product.src}" alt="Info Valorant Points" width="220px">
                <p>${product.name}</p>
                <button class="button-value"><img class="cart-button" src="/assets/img/cart.png" alt="image cart" width="16px"><b>RS${product.price.toFixed(2)}</b></button>
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

function addToCart() {
    addProduct++; // Incrementa o contador
    infoCart.innerHTML = addProduct; // Atualiza o HTML do elemento infoCart com o novo valor
}

buttonProducts.addEventListener("click", () => viewProducts(menuVps)) //arrow fucntion adicionada para esconder meus produtos ate o click do botão
buttonDiscount.addEventListener("click", mapDiscount)