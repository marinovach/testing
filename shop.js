if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
}
else {
  ready()
}

function ready() {
  let removeItems = document.getElementsByClassName('btn-danger')
  for (let i = 0; i < removeItems.length; i++) {
   const button = removeItems[i]
   button.addEventListener('click', removeBagItem)
   }
 
   let quantityInput = document.getElementsByClassName('bag-quantity-input')
   for (let i = 0; i < quantityInput.length; i++) {
     const input = quantityInput[i]
     input.addEventListener('change', quantityChange)
   }
 
   let addToBag = document.getElementsByClassName('buttonAdd')
   for (let i = 0; i < addToBag.length; i++) {
     const button = addToBag[i]
     button.addEventListener('click', addToBagDone)
   }
 
   document.getElementsByClassName('purchase')[0].addEventListener('click', 
   purchaseDone)
 }

 // PURCHASE FUNCTION 

 function purchaseDone() {
  alert('You have completed your purchase. Thank you!')
  const shoppingbagItems = document.getElementsByClassName('shoppingbag-items')[0]
  while (shoppingbagItems.hasChildNodes()) {
    shoppingbagItems.removeChild(shoppingbagItems.firstChild)
  }
  updateTotalAmount()
}

function removeBagItem(event) {
  const buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateTotalAmount()
}

function quantityChange(event) {
  const input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateTotalAmount()
}

function addToBagDone(event) {
  const button = event.target
  const productItem = button.parentElement.parentElement
  const itemName = productItem.getElementsByClassName('item-name')[0].innerText
  const price = productItem.getElementsByClassName('price')[0].innerText
  const imageSrc = productItem.getElementsByClassName('image-src')[0].src
  addProductToBag(itemName, price, imageSrc)
  updateTotalAmount()
}

function addProductToBag(itemName, price, imageSrc) {
  const bagRow = document.createElement('div')
  bagRow.classList.add('shoppingbag-row')
  const bagItems = document.getElementsByClassName('shoppingbag-items')[0]
  let bagItemsNames = bagItems.getElementsByClassName('item-title')
  for (let i = 0; i < bagItemsNames.length; i++) {
    if (bagItemsNames[i].innerText == itemName) {
      alert('This item has already been added to your bag.');
      return
    }
  }
  const bagRowContent = `
  <div class="bag-column">
  <img class="bag-item-image" src="${imageSrc}" width="100"
    height="125"/>
  <span class="item-title">${itemName}</span>
  </div>
  <span class="bag-price">${price}</span>
  <div class="bag-quantity">
  <input class="bag-quantity-input" type="number" value="1" />
  <button class="btn-danger btnRemove" type="button">Remove</button>
  </div>`
  bagRow.innerHTML = bagRowContent
  bagItems.append(bagRow)
  bagRow.getElementsByClassName('btn-danger')[0].addEventListener('click', 
  removeBagItem)
  bagRow.getElementsByClassName('bag-quantity-input')[0].addEventListener('change', 
  quantityChange)
}

function updateTotalAmount() {
  const itemsContainer = document.getElementsByClassName('shoppingbag-items')[0]
  let bagRows = itemsContainer.getElementsByClassName('shoppingbag-row')
  let total = 0
  for (let i = 0; i < bagRows.length; i++) {
    const bagRow = bagRows[i]
    const priceElement = bagRow.getElementsByClassName('bag-price')[0]
    const quantityElement = bagRow.getElementsByClassName('bag-quantity-input')[0]
    const price = parseFloat(priceElement.innerText.replace('£', ''))
    const quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('total-price')[0].innerText = '£' + total
 }


 function btnNewsletter() {
  alert('Thank you! We will keep you updated.')
}