const responseDiv= document.querySelector('.response')
fetch ('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((response)=>{
responseDiv.innerText = `Succesful Ajax Request`
})
.catch((err)=>{
    responseDiv.innerText = `request Failed, Check internet connectivity`
})