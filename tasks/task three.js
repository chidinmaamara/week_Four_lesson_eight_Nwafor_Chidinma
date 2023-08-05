let previousBtn = document.getElementById('previousBtn')
let nextBtn = document.getElementById('nextBtn')
let currentPage = 1,
itemsPerPage = 3,
categoriesData,
categoriesDataLength;
const link = 'https://www.themealdb.com/api/json/v1/1/categories.php'
async function fetchApi(){
    const response = await fetch(link)
   const  data = await response.json()
    categoriesData = data.categories;
  categoriesDataLength = categoriesData.length
}

 async function showCategories(){
    await fetchApi()
    let foodContainer = document.getElementById('foodcontainer')
    foodContainer.innerHTML = ''

    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let showCategory = categoriesData.slice(startIndex, endIndex)
    
    showCategory.forEach((category) => {
       let paragraph = document.createElement('p') 
       image = document.createElement('img')
       h3 = document.createElement('h3')
       describe = document.createElement('p')
       
       paragraph.innerText = category.idCategory;
       image.src = category.strCategoryThumb;
       h3.innerText = category.strCategory
       describe.innerText = category.strCategoryDescription;
       
       foodContainer.appendChild(paragraph);
       foodContainer.appendChild(image);
       foodContainer.appendChild(h3);
       foodContainer.appendChild(describe)  ; 
      })
   }

 showCategories()

 nextBtn.addEventListener('click', () =>{
   currentPage++
   showCategories()
 })
 previousBtn.addEventListener('click', ()=>{
   currentPage --;
   showCategories();
 })

 function hide (){
   if(currentPage === 1){
      previousBtn.style.display = 'none'
   }
   else{
      previousBtn.style.display = 'inline-block'
   }
   let totalNumberOfPages = Math.ceil(categoriesDataLength / itemsPerPage);
   if(currentPage === totalNumberOfPages ) {
      nextBtn.style.display = 'none' 
   }
   else{
      nextBtn.style.display = 'initial'
   }
 }
//  hide()


