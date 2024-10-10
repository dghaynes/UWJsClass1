//question 1 :  Pagliacci charges $16.99 for a 13-inch pizza and $19.99 for a 17-inch pizza.  What is the surface area for each of these pizzas?

let d13 = 13;
let d17 = 17;

function area(diameter){
 return Math.PI*(diameter/2)**2;
}

console.log(`17-inch area ${area(d17)} and 13-inch area ${area(d13)}`);


//question 2: What is the cost per square inch?

let cost13 = 16.99;
let cost17 = 19.99;
let area13 = area(d13);
let area17 = area(d17);

function costPerInch(area, cost){
    return cost/area;
}

console.log(` cost per inch 13:  ${costPerInch(area13, cost13)}, cost per inch 17: ${costPerInch(area17, cost17)} `);

// Question 3: Using the Math object, put together a code snippet that allows you to draw a random card with a value between 1 and 13 (assume ace is 1, jack is 11…)

let max = 14;
let min = 1;

function getRandom(min, max){

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

let cards = Array.from({length:3},
    () => getRandom(min, max));

console.log(cards);
console.log(Math.max(...cards));

//Question 4:

let formattedAddress = 'Derek Haynes\n3019 N 27th Street\nTacoma WA 98407'
let linebreak = formattedAddress.indexOf(' ');  //this is the index of the first space
let firstName = formattedAddress.slice(0,linebreak);

console.log(firstName);

//Date
//Question: On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00

const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

//function to Add days to current date
function dateDiffInDays(start, end){
    const date1 = start. getTime();
    const date2 =  end.getTime();

    const diffMs = Math.abs(date2 - date1);

    //convert milliseconds to days
    const millisecondsPerDay = 1000*60*60*24;
    const diffDays = Math.floor(diffMs / millisecondsPerDay);

    return diffDays;
}

//function to add day to date
function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}
//Number of days that we want to add to the current date
const days =dateDiffInDays(startDate, endDate)/2;

const middleDate = addDays(startDate, days);

console.log(middleDate.toDateString());
