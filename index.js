let container = document.getElementById("container")

let btn1 = document.getElementById("get-category-data")
btn1.addEventListener("click", function(){
    getCategoriesData()
})
let btn2 = document.getElementById("get-ingredient-data")
btn2.addEventListener("click", function(){
    getIngredientData()
})

//         function getCategoriesData(){
//     let f1 = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
//     console.log(f1)
//     f1.then((res)=> res.json())
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log("Something went worong"))
// }



async function getCategoriesData(){
try{
let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
console.log(res)
let food = await res.json();
console.log(food)
}catch(error){
console.log("something went wrong");
}
}

async function getIngredientData(){
try{
let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
console.log(res)

let food = await res.json();
console.log(food)
}catch(err){
console.log("something went wrong")
}
}