'use strict';
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings :[],
    //book:function(){}
    book(flightNo,name){
  console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNo}`);
this.bookings.push({flight:`${this.iataCode}${flightNo}`,name});   
},

};
lufthansa.book(23,'kavya');
lufthansa.book(24,'priyanka');

const eurowings =
{
    airline: 'Eurowings',
    iataCode: 'UH',
    bookings: [],
};

const bookings = lufthansa.book;
//doesn't  work
// bookings(23,'kavya');
//call method
bookings.call(lufthansa,25,'phani');
console.log(lufthansa); 
bookings.call(eurowings,26,'siva');
bookings.call(eurowings,25,'prasanth');
const flyapply = [27,'dulquer'];
//apply method
bookings.apply(eurowings, flyapply);
console.log(eurowings);
bookings.call(lufthansa, ...flyapply);
