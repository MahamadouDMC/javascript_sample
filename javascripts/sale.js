// function calc() {
//     console.log(document.getElementById("product").value);
//     console.log(document.getElementById("number").value);
// }
// function calc() {
//     const price = document.getElementById("product").value;
//     const number = document.getElementById("number").value;
//     window.alert(`${price}円が${number}個。小計Est${price * number}円です`);
//   }

    const priceElement = document.getElementById("product");
    const numberElement = document.getElementById("number");

  function calc() {
    const price = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    window.alert(`${price} yen ${number} Pièces。Le sous-total est ${price * number} yens`); 
  }