const buttons=document.querySelectorAll(".calculator .buttons .btn")
const displayScreen=document.querySelector(".calculator .display")
const DeleteButton=document.querySelector(".calculator .buttons .delete")
const clearButton=document.querySelector(".calculator .buttons .clear")
const resultButton=document.querySelector(".calculator .buttons .result")
console.log(buttons[4].attributes.title.value)


buttons.forEach((button,index)=>{
    button.onclick=(e)=>{
        const char=buttons[index].attributes.title.value
        appendCharacterToDisplayScreen(char)
        
    }
})

DeleteButton.onclick=()=>{
    deleteLastChar()
}

clearButton.onclick=()=>{
    clearDisplayScreen()
}

resultButton.onclick=()=>{
    calculateResult()
}

function clearDisplayScreen() {
    displayScreen.innerText = '0';
}

function deleteLastChar() {
    let displayData = displayScreen.innerText;
    if (displayData.length > 1) {
        displayScreen.innerText = displayData.slice(0, -1);
    } else {
        displayScreen.innerText = '0';
    }
}

function appendCharacterToDisplayScreen(char) {
    let displayData = displayScreen.innerHTML
    if (displayData === '0') {
        displayScreen.innerText = char;
    } else {
        displayScreen.innerText += char;
    }
}

function calculateResult() {
    let displayData = displayScreen.innerText;
    try {
        displayScreen.innerText = eval(displayData);
    } catch {
        displayScreen.innerText = 'Error';
    }
}
