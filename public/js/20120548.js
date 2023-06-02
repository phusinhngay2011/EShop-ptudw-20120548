"use strict";

async function addCart(id, quantity) {
  let res = await fetch("/products/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ id, quantity }),
  });
  let json = await res.json();
  document.getElementById("cart-quantity").innerText = `(${json.quantity})`;
}

async function updateCart(id, quantity) {
  //   alert(`\n\nUpdate cart: ${id}, ${quantity}`)
  console.log(`\n\nUpdate cart: ${id}, ${quantity}`);

  if (quantity > 0) {
    let res = await fetch("/products/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ id, quantity }),
    });
    // alert(res.status)
    if (res.status == 200) {
      let json = await res.json();
      //   alert(json.quantity)
      //   alert(json.subtotal)
      //   alert(json.total)
      //   alert(json.item.total)
      document.getElementById("cart-quantity").innerText = `(${json.quantity})`;
      document.getElementById("subtotal").innerText = `($${json.subtotal})`;
      document.getElementById("total").innerText = `($${json.total})`;
      document.getElementById(`total${id}`).innerText = `($${json.item.total})`;
    }
  } else {
    removeCart(id);
  }
}

async function removeCart(id) {
  console.log(`\n\nRemove cart: ${id}`);

  if (
    confirm("This action will remove this item out of your cart, are you sure?")
  ) {
    let res = await fetch("/products/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    // alert(res.status)
    if (res.status == 200) {
      let json = await res.json();
      //   alert(json.quantity)
      //   alert(json.subtotal)
      //   alert(json.total)
      //   alert(json.item.total)
      document.getElementById("cart-quantity").innerText = `(${json.quantity})`;
      if (json.quantity > 0) {
        document.getElementById("subtotal").innerText = `($${json.subtotal})`;
        document.getElementById("total").innerText = `($${json.total})`;
        document.getElementById(`product${id}`).remove();
      } else {
        document.querySelector(
          ".cart-page .container"
        ).innerHTML = `<div class="text-center border py-3">
            <h3>Your cart is empty!</h3>
          </div>`;
      }
    }
  }
}

async function clearCart() {
    console.log(`\n\nClear cart`);
  
    if (
      confirm("This action will remove all the items in your cart, are you sure?")
    ) {
      let res = await fetch("/products/cart/all", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      });
      // alert(res.status)
      if (res.status == 200) {
        //   alert(json.quantity)
        //   alert(json.subtotal)
        //   alert(json.total)
        //   alert(json.item.total)
        document.getElementById("cart-quantity").innerText = `(0)`;
       
        document.querySelector(
            ".cart-page .container"
          ).innerHTML = `<div class="text-center border py-3">
              <h3>Your cart is empty!</h3>
            </div>`;
        }
      
    }
}

function placeorders(e){
  
  e.preventDefault()
  const addressId = document.querySelector('input[name=addressId]:checked')
  if(!addressId || addressId.value == 0)
    if(!e.target.checkValidity())
      return e.target.reportValidity()
  e.target.submit()
}

function checkPasswordConfirm(formId){
  let password = document.querySelector(`#${formId} [name=password]`)
  let cfPassword = document.querySelector(`#${formId} [name=confirmPassword]`)
  if(password.value != cfPassword.value){
    cfPassword.setCustomValidity('Passwords dont match!')
    cfPassword.reportValidity()
  }
  else{
    cfPassword.setCustomValidity('')
  }
}