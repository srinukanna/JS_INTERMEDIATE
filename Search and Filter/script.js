let products = [{
   Product: 'Mac m1 air',
   Price: 100000,
   Id:101,
   image: "../Search and Filter/assets/images/mac  m1 air.jpg",
   Seller:'apple company',
   Instock:true
},{
   Product: 'vivo y19',
   Price: 14000,
   Id:102,
   image:"../Search and Filter/assets/images/vivo y19.jpeg",
   Seller:'vivo official store',
   Instock:true
},{
   Product: 'Motorola 5g',
   Price: 15000,
   Id:103,
   image:"../Search and Filter/assets/images/motorola 5g.jpeg",
   Seller:'vivo pvt limited',
   Instock:false
},{
   Product: 'Oppo',
   Price: 50000,
   Id:104,
   image:"../Search and Filter/assets/images/oppo f25.jpeg",
   Seller:'Reliance digital',
   Instock:false
},{
   Product: 'Lenovo Laptop',
   Price: 55000,
   Id:105,
   image:"../Search and Filter/assets/images/lenovo windows 11.jpeg",
   Seller:'Lenovo India store',
   Instock:true
},{
   Product: 'Samsung Galaxy',
   Price: 150000,
   Id:106,
   image:"../Search and Filter/assets/images/Samsung galaxy.jpeg",
   Seller:'Click tech retail',
   Instock:false
},{
   Product: 'One plus nord5 5g',
   Price: 40000,
   Id:107,
   image:"../Search and Filter/assets/images/one plus nord 5 5g.jpeg",
   Seller:'Croma store',
   Instock:true
},{
   Product: 'Dell inspiron 15 windows 11 zlaptop',
   Price: 48000,
   Id:108,
   image:"../Search and Filter/assets/images/dell inspiron.jpeg",
   Seller:'Croma store',
   Instock:true
},{
   Product: 'hp 15 pavillion',
   Price: 62000,
   Id:109,
   image:"../Search and Filter/assets/images/hp pavillion.jpeg",
   Seller:'Reliance digital',
   Instock:false
},{
   Product: 'vivo y400 5g',
   Price: 33000,
   Id:110,
   image:"../Search and Filter/assets/images/vivo y400 5g pro.jpeg",
   Seller:'Reliance digital',
   Instock:false
},{
   Product: 'mac m5 pro',
   Price: 80000,
   Id:111,
   image:"../Search and Filter/assets/images/macbook m5 pro.jpeg",
   Seller:'Reliance digital',
   Instock:true
}];


const all_btn = document.querySelector('.all_btn');
const affordable_btn = document.querySelector('.affordable_btn');
const stock_btn= document.querySelector('.stock_btn');

const search_input = document.querySelector('.search_input');
const resultCount = document.getElementById('productResult');
const productContainer=document.getElementById('productContainer')

function displayProducts(productList){
   
   resultCount.textContent=`${productList.length} products found`;
   if(productList.length === 0){
      resultCount.innerHTML=`<p> no products found </p>`;
   }
   const productcards= productList.map((product)=>{
      return `<article class="product-cards ${product.Instock?"":"out_of_stock"}">
      ${product.image ? `<img src="${product.image}" class="product_image">` : ''}
      <div class = "content_wrapper"> 
      <h2> ${product.Product}</h2>
      <p> Price : ${product.Price}</p>
      <p> Instock :${product.Instock ?"available":"out of stock"} </p>
      <p> seller : ${product.Seller}</p>
      </div> 
      </article>`;

   });
   productContainer.innerHTML= productcards.join("");

}

all_btn.addEventListener("click",()=>{
   // let all_products= products.filter(product=>{
   //    return product;
   // });
   displayProducts(products);
});

stock_btn.addEventListener("click",()=>{
   let instock_products = products.filter(product=>{
       return product.Instock;
   })
   displayProducts(instock_products);
});

affordable_btn.addEventListener("click",()=>{
   let affordable_products = products.filter(product=>{
      return product.Price<50000;
   })
   displayProducts(affordable_products);
});

search_input.addEventListener("input",(event)=>{
 const searchText = event.target.value.toLowerCase().trim();
 const searchResults = products.filter(item=>{
    return item.Product.toLowerCase().includes(searchText);
 })
 displayProducts(searchResults);
});

