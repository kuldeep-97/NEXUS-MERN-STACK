// The .map() method is used to transform every element of an array and return a new array.

// ###### So yes bro, your statement is correct:
// “map only modifies the array values, not makes them unique.” ✅


// ⚠️ Important Points:
// .map() does not change the original array.

// Always returns a new array.

// You must return something inside the callback.

// *********** map **************

// Array ko update krta hai or modify krta hai
// valuew ko modefiy kr skte haii
const arr = [1,2,4,5]

const result1 = arr.map((num)=>{
    return num*num
})
// const re = arr.forEach((num)=>{
//     return num;
// }) wrong, no return

console.log(re)
// const result = arr.map((num,index)=> num*index);

// console.log(result);


2
// const arr = [1,2,3,4,5,6];

// const result = arr.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2);
// console.log(result);

//  Reduce , iske discussion karenge....






// 🔹 map() in JavaScript:
// It modifies or transforms each element of the array.

// It always returns a new array of the same length.

// It does not filter or remove duplicates.

// It doesn’t change the original array.







/* filter ka use object me kr skte hai kya

  Great question! ✅

🔹 Direct Answer:
You can't use .filter() directly on an object because .filter() is a method that works on arrays, not plain objects.

 But you can filter an object by first converting it to an array.

 ✅ Example 1: Filtering object entries

 const users = {
  user1: { age: 25 },
  user2: { age: 17 },
  user3: { age: 30 }
};

// Step 1: Convert object to array using Object.entries()
const filtered = Object.entries(users).filter(([key, value]) => value.age >= 18);

// Step 2 (optional): Convert back to object
const result = Object.fromEntries(filtered);

console.log(result);


🟢 Summary:
Type	Use
.filter()	✅ On arrays only
Objects	❌ Not directly
Convert object	✅ Use Object.entries(), Object.values(), or Object.keys()

*/