const textArea = document.getElementById('textarea')
const letterDisplay = document.getElementById('letters')
const wordDisplay = document.getElementById('words')
const copyBtn = document.getElementById('copy')
textArea.focus()

const onTextInput = (e) => {
    let text = e.target.value
    letterDisplay.innerText = text.length
    let textArr = text.split(' ').filter(index => index !== '')
    wordDisplay.innerText = textArr.length
    }

const copy = () => {
textArea.select()
document.execCommand("copy");
}

copyBtn.addEventListener('click', copy)
textArea.addEventListener('input', onTextInput, false)