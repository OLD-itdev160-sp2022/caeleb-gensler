//welcome
var opening = 'Greetings, ';
var username = 'John';
var greeting = opening + username + '! Welcome to our review of Steam!';
var greetingElement = document.getElementById('greeting');
greetingElement.textContent = greeting;

//product pricing 
var price = 15,
    studentDiscount = .2,
    studentPrice = price - (price * studentDiscount),
    priceElement = document.getElementById('price'),
    studentPriceElement = document.getElementById('student-price');

    priceElement.textContent = price.toFixed(2);
    studentPriceElement.textContent = studentPrice.toFixed(2);