let myDate = new Date()
console.log(myDate.toString()); // Fri Feb 09 2024 22:01:06 GMT+0530 (India Standard Time) 
console.log(myDate.toDateString()); // Fri Feb 09 2024
console.log(myDate.toLocaleString()); // 9/2/2024, 10:01:06 pm

console.log(typeof myDate); // object

let myCreatedDate = new Date(2024, 0, 6, 5, 3)
// month starts from 0 (0=>Jan)
console.log(myCreatedDate.toDateString()); // Sat Jan 06 2024
console.log(myCreatedDate.toLocaleString()); // 6/1/2024, 5:03:00 am


let anotherDate = new Date("2024-01-15") // 01 => Jan
console.log(anotherDate.toLocaleString()); // 15/1/2024, 5:30:00 am

let anotherDate2 = new Date("01-14-2023")
console.log(anotherDate2.toLocaleString()); // 14/1/2023, 12:00:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp); // prints milliseconds value from Jan 1, 1970

console.log(anotherDate.getTime());

// time in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate); // 2024-02-09T16:49:56.350Z
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); // 5 (means friday)

newDate.toLocaleString('default',{
    weekday:"long",
})