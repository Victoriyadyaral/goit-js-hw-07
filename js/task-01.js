const categories = document.querySelectorAll('li.item')
const titles = document.querySelectorAll('li.item  h2')

console.log(`В списке ${categories.length} категории.`)

const showCategory = array => {
 return   array.forEach(element => {
    console.log(`Категория: ${element.textContent}`) 
    console.log(`Количество элементов:  ${element.nextElementSibling.children.length}`)
})  
}

showCategory(titles);
 