var itemsArray = [
    {name:"juice",price:"50",quantity:"3"},
    {name:"cookie",price:"30",quantity:"9"},
    {name:"shirt",price:"880",quantity:"1"},
    {name:"pen",price:"100",quantity:"2"}];
let totalPrice = itemsArray.reduce(function(accumulator,item) {
    return accumulator + item.quantity * item.price;},0);
console.log(totalPrice);