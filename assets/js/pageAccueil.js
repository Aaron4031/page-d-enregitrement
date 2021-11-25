

// function name(params) {
//     var result =0

//     function manger(bon) {
//    var result = bon*4
//    return result
// }

// }

// let result = 'bonjour'

// console.log(result)
// console.log(manger(2))


// let classetableau = document.querySelector("#table")
// console.log(classetableau)
// let classetableau = document.querySelectorAll('th')
// console.log(classetableau)


let ligne = document.querySelectorAll('tr')
console.log(ligne)

ligne.forEach(lig => {
   lig.addEventListener('click', ()=>{
    alert(lig.rowIndex)
    })
});
