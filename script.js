let products = [
    {
       name: 'Adidas X 17',
       product_img: 'adidas X 17',
       price: '#22,000'
    },
    {
      name: 'Adidas X 18',
      product_img: 'adidas X 18',
      price: '#20,000'
    },
    {
      name: 'Adidas X 19',
      product_img: 'adidas X 19',
      price: '#21,500'
    },
    {
      name: 'Nike Phantom',
      product_img: 'nike phantom',
      price: '#26,000'
    },
    {
      name: 'Nike Magista Obra',
       product_img: 'nike magista obra',
       price: '#22,000'
    },
    {
      name: 'Nike Mercurial Superfly',
       product_img: 'nike mercurial superfly',
       price: '#20,000'
    },
    {
      name: 'Nike Mercurial Vapor',
       product_img: 'nike mercurial vapor',
       price: '#24,000'
    },
    {
      name: 'Adidas Predator',
       product_img: 'predator',
       price: '#20,000'
    },
    {
      name: 'PUMA Future',
       product_img: 'puma future',
       price: '#26,000'
    },
    {
      name: 'PUMA 0ne 20',
       product_img: 'puma one 20',
       price: '#25,000'
    },
    {
      name: 'PUMA Ultra 1-2',
       product_img: 'puma ultra 1 2',
       price: '#17,000'
    },
    {
      name: 'PUMA Ultra 3-1',
       product_img: 'puma ultra 3 1',
       price: '#20,000'
    }
 ];
 
 let productSection = document.querySelector('#product-wrapper');
 let html = "";
 
 products.forEach(e => {
 
    html += ` <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="product-image">
        <img src="./images/${e.product_img}.jpg" alt="" class="img-fluid">
     </div>
     <div class="product-info">
        <h3 class="bg-info text-center">${e.name}</h3>
        <h4 class="price text-center">${e.price}</h4>
   </div>
</div>`
 console.log(e);
 
 productSection.innerHTML = html;
 });