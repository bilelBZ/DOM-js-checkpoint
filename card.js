var btnsAddTag = document.getElementsByClassName("add");
var checkTags = document.querySelectorAll(".check");

for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].addEventListener("click", total);
}

for (var i = 0; i < btnsAddTag.length; i++) {
  btnsAddTag[i].onclick = add;
}
function add(event) {
  var btnAdd = event.target;
  var tdElt = btnAdd.parentElement;
  var inputTag = tdElt.querySelector(".quantity");
  var quantity = Number(inputTag.value);
  quantity++;
  inputTag.value = quantity;
  var trElt = btnAdd.parentElement.parentElement;
  var unitPriceTag = trElt.querySelector(".unitPrice");
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var unitPrice = Number(unitPriceTag.innerHTML);
  price = quantity * unitPrice;
  priceTag.innerHTML = price;
}

var btnSubstractTag = document.getElementsByClassName("remove");
var checkTags = document.querySelectorAll(".check");

for (var i = 0; i < btnSubstractTag.length; i++) {
  btnSubstractTag[i].onclick = substract;
  function substract(event) {
    var btnRemove = event.target;
    var tdRemove = btnRemove.parentElement;
    var inputRemove = tdRemove.querySelector(".quantity");
    var quantity = Number(inputRemove.value);
    while(quantity>0){
      quantity--;
    }
    inputRemove.value = quantity;
    var trRemove = btnRemove.parentElement.parentElement;
    var unitPriceRemove = trRemove.querySelector(".unitPrice");
    var priceTagRemove = trRemove.querySelector(".price");
    var price = Number(priceTagRemove.innerHTML);
    var unitPriceRemove = Number(unitPriceRemove.innerHTML);
    price = quantity * unitPriceRemove;
    priceTagRemove.innerHTML = price;
  }

}

function total(event) {
  var currentCheck = event.target;
  var totalTag = document.getElementById("total");
  var total = Number(totalTag.innerHTML);
  var trElt = currentCheck.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var btnAddTag = trElt.querySelector(".add");
  var btnSubstractTag = trElt.querySelector(".remove");
  var substractBtn =document.getElementsByClassName('price');
  if (currentCheck.checked === true ) {
    total += price;
    btnAddTag.setAttribute("disabled", true);
    btnSubstractTag.setAttribute("disabled", true);
  } else {
    total -= price;
    btnAddTag.removeAttribute("disabled");
    btnSubstractTag.removeAttribute("disabled");
  }
  totalTag.innerHTML = total;
}

function SomeDeleteRowFunction() {
  var td = event.target.parentElement.parentElement; 
  var tr = td.parentNode; 
  tr.parentNode.removeChild(tr);
}
var ChangeColor = document.querySelectorAll('#icon');
function iconClicked(event) { 
  var changed = event.target
for(i=0;i<ChangeColor.length;i++){
  changed.style.backgroundColor='blue';

}
}

