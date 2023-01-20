function goToPayment(){window.location.href = 'https://www.paypal.com/us/home';}

console.log("Viewport width: " + window.innerWidth);
console.log("Viewport height: " + window.innerHeight);

const bottomBox = document.getElementById('home-info-bottom-box-text');
const bottomBoxOptions = ["1 in 50 will become homeless.", "It costs $5,000 to build 1 shelter.", "Amarillo leads the state in homeless per capita."]

bottomBox.textContent = bottomBoxOptions[Math.floor(Math.random()*bottomBoxOptions.length)]
