const textArea = document.getElementById('textarea')
const letterDisplay = document.getElementById('letters')
const wordDisplay = document.getElementById('words')
textArea.focus()

const onTextInput = (e) => {
    let text = e.target.value
    letterDisplay.innerText = text.length
    let textArr = text.split(' ').filter(index => index !== '')
    wordDisplay.innerText = textArr.length
    }

textArea.addEventListener('input', onTextInput, false)