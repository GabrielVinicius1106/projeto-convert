// Hello World!
console.log("Javascript loaded!")

// currency (EN) = moeda (PT-BR)

// Definine the currency variables!
const USD = 5.72
const EUR = 6.49
const GBP = 7.63 
// We set 'const's to uppercase as a good practice! 

// Receive the elements from the DOM!
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

// Catching the submit event!
form.addEventListener("submit", (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(parseInt(amount.value), USD, "USD$")
            break
        case "EUR":
            convertCurrency(parseInt(amount.value), EUR, "€")
            break
        case "GBP":
            convertCurrency(parseInt(amount.value), GBP, "£")
            break
    }
})

// Manipulating the input to only accept numbers!
amount.addEventListener("input", (event) => {
    const hasCaractersRegex = /\D+/gs // Regex that only accepts numbers!
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

// Function to convert the currency!
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}` // Shows the conversion rate!
        
        // Apply the class that shows the result!
        footer.classList.add("show-result")

        // Calculate the total value in BRL!
        let total = amount * price // Calculate the total value!

        // Format and display the total value on the footer!
        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`


    } catch (error) {
        // Remove the class from the footer if there is an error!
        footer.classList.remove("show-result")
        alert("Não foi possível converter o valor!")
        console.log(error.message)
    }   
}

// Function to format the currency in BRL!
function formatCurrencyBRL(value) {
    // Convert the value to a number and format it to BRL currency!
    return Number(value).toLocaleString("PT-BR", {
        style: "currency",
        currency: "BRL",
    })
}
