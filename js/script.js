//defining the ui
let cartList = document.querySelector('#table-body');

let cartBtn = document.querySelectorAll('.cart-btn');

let itemName = document.querySelectorAll('h5');

let price = document.querySelectorAll('.card-text');

let check = document.querySelector('#check-out');


//event listener

//removing from cart

cartList.addEventListener('click', (e)=>{
    if(e.target.hasAttribute('href')) {
        if(confirm('Are you sure?')){
            let ele= e.target.parentElement.parentElement;
            ele.remove();
            showAlert('Item Removed!', 'bg-success');
        }
    }
});

check.addEventListener('click', ()=>{
    if(cartList.childElementCount===0){
        showAlert('Add Items!', 'bg-danger');
    }
});


//Adding to cart

for(let i=0; i<= cartBtn.length; i++){
    cartBtn[i].addEventListener('click', ()=>{
        let row = document.createElement('tr');
        row.innerHTML = ` <td>${itemName[i].textContent}</td>
            <td>${price[i].textContent}</td>
        <td><a href="#" class="btn btn-danger ml-5">Remove</a></td>`;
        cartList.appendChild(row);
        showAlert('Added To Cart', 'bg-success');
    });
}

//alert function
function showAlert(message,classname){
    let div = document.createElement('div');
    div.className = `alert ${classname} text-white`;
    div.appendChild(document.createTextNode(message));
    let table = document.querySelector('table');
    let container = document.querySelector('.container .row .col-md-3:nth-child(4) .card .card-body');
    container.insertBefore(div, table);

    setTimeout( ()=>{
        document.querySelector('.alert').remove();
    },4000);
}


