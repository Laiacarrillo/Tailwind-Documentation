const numbersContainer = document.getElementById("numbers")
const generateButton = document.getElementById("generate")
const resultDisplay = document.getElementById("result")
const winningNumbersContainer = document.getElementById("winning-numbers")

const maxNumbers = 25
let selectedNumbers = []

for (let i = 1; i <= maxNumbers; i++) {
  const button = document.createElement("button")
  button.className =
    "number-button bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
  button.textContent = i
  button.addEventListener("click", () => toggleSelection(i, button))
  numbersContainer.appendChild(button)
}

function toggleSelection(number, button) {
  if (selectedNumbers.includes(number)) {
    selectedNumbers = selectedNumbers.filter((num) => num !== number)
    button.classList.remove("bg-blue-500", "text-white")
    button.classList.add("bg-gray-200", "text-gray-800")
  } else {
    if (selectedNumbers.length < 5) {
      selectedNumbers.push(number)
      button.classList.remove("bg-gray-200", "text-gray-800")
      button.classList.add("bg-blue-500", "text-white")
    }
  }
}

generateButton.addEventListener("click", () => {
  if (selectedNumbers.length !== 5) {
    resultDisplay.textContent = "¡Debes seleccionar exactamente 5 números!"
    resultDisplay.classList.add("text-red-500")
    return
  }

  const winningNumbers = []
  while (winningNumbers.length < 5) {
    const randomNum = Math.floor(Math.random() * maxNumbers) + 1
    if (!winningNumbers.includes(randomNum)) {
      winningNumbers.push(randomNum)
    }
  }

  displayWinningNumbers(winningNumbers)

  const matches = selectedNumbers.filter((num) => winningNumbers.includes(num))

  setTimeout(() => {
    resultDisplay.textContent = `Aciertos: ${matches.length}`
    resultDisplay.classList.remove("text-red-500")
    resultDisplay.classList.add("text-green-500", "text-2xl", "font-bold")
  }, 3000)
})

function displayWinningNumbers(numbers) {
  winningNumbersContainer.innerHTML = ""
  resultDisplay.textContent = "Generando números ganadores..."
  resultDisplay.classList.remove("text-red-500", "text-green-500")
  resultDisplay.classList.add("text-blue-500")

  numbers.forEach((number, index) => {
    const numberElement = document.createElement("div")
    numberElement.className = "winning-number"
    numberElement.textContent = number
    numberElement.style.animationDelay = `${index * 0.5}s`
    winningNumbersContainer.appendChild(numberElement)
  })
}

