let products = [{
   Product: 'Mac m1 air',
   Price: 100000,
   Id:101,
   Seller:'apple company',
   Instock:true
},{
   Product: 'vivo y19',
   Price: 14000,
   Id:102,
   Seller:'vivo official store',
   Instock:true
},{
   Product: 'Motorola 5g',
   Price: 15000,
   Id:103,
   Seller:'vivo pvt limited',
   Instock:false
},{
   Product: 'Oppo',
   Price: 50000,
   Id:104,
   Seller:'Reliance digital',
   Instock:false
},{
   Product: 'Lenovo Laptop',
   Price: 55000,
   Id:105,
   Seller:'Lenovo India store',
   Instock:true
},{
   Product: 'Samsung Galaxy',
   Price: 150000,
   Id:106,
   Seller:'Click tech retail',
   Instock:false
},{
   Product: 'One plus nord5 5g',
   Price: 40000,
   Id:107,
   Seller:'Croma store',
   Instock:true
},{
   Product: 'Dell inspiron 15 windows 11 zlaptop',
   Price: 48000,
   Id:108,
   Seller:'Croma store',
   Instock:true
},{
   Product: 'hp 15 pavillion',
   Price: 62000,
   Id:109,
   Seller:'Reliance digital',
   Instock:false
},{
   Product: 'vivo y400 5g',
   Price: 33000,
   Id:110,
   Seller:'Reliance digital',
   Instock:false
},{
   Product: 'mac m5 pro',
   Price: 80000,
   Id:111,
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
      <h2> ${product.Product}</h2>
      <p> Price : ${product.Price}</p>
      <p> Instock :${product.Instock ?"available":"out of stock"} </p>
      <p> seller : ${product.Seller}</p> </article>`;

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

