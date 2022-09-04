const allButtons = document.querySelectorAll('.btns') //Pego todos os meu spans q contem os numeros
const submit = document.querySelector('button#submit') //pego o botão submit
const container1 = document.querySelector('div#container') //pego a primeira parte da minha pagina
const container2 = document.querySelector('div#container2') //pego a segunda parte da minha pagina
const optionOfNumber = document.querySelector('span#escolha')

let chosenOption = ''

submit.addEventListener('click', onSubmit)

allButtons.forEach((btn) => {
    btn.addEventListener('click', handleBtns)
})

function handleBtns(e){
    chosenOption = e.target.textContent
    console.log(chosenOption)
}

function onSubmit(){
    if(chosenOption == ''){
        alert('[ERRO]Insira um valor antes de prosseguir por favor!!')
    } else {
        container1.style.display = 'none'
        container2.style.display = 'block'
        optionOfNumber.textContent = chosenOption
    }
}

function onPageLoad(onload){
    container1.style.display = 'block'
    container2.style.display = 'none'
}

window.addEventListener('load', onPageLoad)


