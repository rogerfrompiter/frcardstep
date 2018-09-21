console.log('script is loaded');
var number = document.getElementById('number')
var event = document.createEvent('Event');
event.initEvent('input', true, true);
number.addEventListener('input', function (e) {
   e.target.value = '4111111111111111'
}, false);
number.dispatchEvent(event);


var cardType = document.getElementById('cardType')
var event2 = document.createEvent('Event');
event2.initEvent('change', true, true);
cardType.addEventListener('change', function (e) {
   e.target.value = 'Visa'
}, false);
cardType.dispatchEvent(event2);



var cvv = document.getElementById('cvv')
var event3 = document.createEvent('Event');
event3.initEvent('input', true, true);
cvv.addEventListener('input', function (e) {
   e.target.value = '312'
}, false);
cvv.dispatchEvent(event3);


var expirationMonth = document.getElementById('expirationMonth')
var event4 = document.createEvent('Event');
event4.initEvent('change', true, true);
expirationMonth.addEventListener('change', function (e) {
   e.target.value = '7'
}, false);
expirationMonth.dispatchEvent(event4);



var expirationYear = document.getElementById('expirationYear')
var event5 = document.createEvent('Event');
event5.initEvent('change', true, true);
expirationYear.addEventListener('change', function (e) {
   e.target.value = '120'
}, false);
expirationYear.dispatchEvent(event5);



var firstName = document.getElementById('firstName')
var event6 = document.createEvent('Event');
event6.initEvent('input', true, true);
firstName.addEventListener('input', function (e) {
   e.target.value = 'Test'
}, false);
firstName.dispatchEvent(event6);


var lastName = document.getElementById('lastName')
var event7 = document.createEvent('Event');
event7.initEvent('input', true, true);
lastName.addEventListener('input', function (e) {
   e.target.value = 'TestLastName'
}, false);
lastName.dispatchEvent(event7);



var address = document.getElementById('address')
var event8 = document.createEvent('Event');
event8.initEvent('input', true, true);
address.addEventListener('input', function (e) {
   e.target.value = 'Pukina'
}, false);
address.dispatchEvent(event8);

var address2 = document.getElementById('address2')
var event9 = document.createEvent('Event');
event9.initEvent('input', true, true);
address2.addEventListener('input', function (e) {
   e.target.value = 'Pukina2'
}, false);
address2.dispatchEvent(event9);


var city = document.getElementById('city')
var event10 = document.createEvent('Event');
event10.initEvent('input', true, true);
city.addEventListener('input', function (e) {
   e.target.value = 'Zoo York'
}, false);
city.dispatchEvent(event10);


var zipCode = document.getElementById('zipCode')
var event11 = document.createEvent('Event');
event11.initEvent('input', true, true);
zipCode.addEventListener('input', function (e) {
   e.target.value = '243'
}, false);
zipCode.dispatchEvent(event11);

