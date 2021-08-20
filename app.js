function updateProdut(product,price, isIncreasing){
    const productInput=document.getElementById(product+'-input');
    let productQuantity=productInput.value;
    if(isIncreasing){

        productQuantity=parseInt(productQuantity)+1;

    }
    else if(productQuantity>0){
        productQuantity=parseInt(productQuantity)-1;

    }
    productInput.value=productQuantity;
    console.log(productQuantity);

    const productprice=document.getElementById(product+"-price");
    const newProductPrice=price*productQuantity;
    productprice.innerText=newProductPrice;
    getTotalAmount();
    
}
function getProductQuantity(product){

    const productInput=document.getElementById(product+'-input');
  const productQuantity=parseInt(productInput.value);
  return productQuantity;
}

function getTotalAmount(){

    const phoneTotal= getProductQuantity('phone')*1219;
    const caseTotal=getProductQuantity('case')*59;
    const subtotal=phoneTotal+caseTotal;
    const tax=subtotal/10;
    const totalPrice=subtotal+tax;

    document.getElementById('subtotal').innerText=subtotal;
    document.getElementById('tax').innerText=tax;
    document.getElementById('totalprice').innerText=totalPrice;



}

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProdut("phone",1219, true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProdut("phone",1219, false);
})

document.getElementById('case-plus').addEventListener('click',function(){
    updateProdut("case",59, true);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProdut("case",59, false);
})