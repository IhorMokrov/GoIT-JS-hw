// Задание 5

// The user can order the product delivery to their country by specifying it in the prompt when visiting the page. Keep in mind that the user can enter the country name not only in lowercase letters, but for example, 'cHiNa'.

// Write a script that displays a message about the shipping cost to the specified country. Be sure to use switch. The message format is: 'Shipping to [country] will cost [price] credits'.

// However, shipping is not available everywhere. If the specified country is not in the list, then output an alert message 'Shipping is not available in your country'.

// Here is a list of countries and shipping costs:
// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// let deliveryCountry = prompt('Specify the delivery country');
let deliveryCountry = 'JamaiK1a';
let price = 0;

if (deliveryCountry !== null && deliveryCountry !== '') {
  const countryFirstLetter = deliveryCountry[0].toUpperCase();
  const countryRemainingPart = deliveryCountry.slice(1).toLocaleLowerCase();

  deliveryCountry = countryFirstLetter + countryRemainingPart;
}

switch (deliveryCountry) {
  case 'China':
    price = 100;
    break;
  case 'Chili':
    price = 250;
    break;
  case 'Australia':
    price = 170;
    break;
  case 'India':
    price = 80;
    break;
  case 'Jamaika':
    price = 120;
    break;
  default:
    price = null;
}

if (!price) {
  console.log('Shipping is not available in your country');
} else {
  console.log(`Shipping to ${deliveryCountry} will cost ${price} credits`);
}
