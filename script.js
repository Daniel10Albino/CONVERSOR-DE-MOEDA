const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectTo = document.querySelector(".currency-select-to")




function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor a coventer
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas
   
    
    

    console.log(currencySelectTo.value)
    console.log(currencySelect.value)

    const dolarToday = 5.65
    const euroToday = 6.42
    const realToday = 1.00
    const libraToday = 7.65
    const bitcoinToday = 605.49525
    const from = currencySelectTo.value
    const to = currencySelect.value


     if (from === to) {
        alert("💲Selecione moedas diferentes para converter.💲")
        return
    }


    convertButton.disabled = true
    if (inputCurrencyValue === "" || inputCurrencyValue <= 0) {
    
        alert("❌Hey amigo.Por favor,digite um valor.❌")
        convertButton.disabled = false
        return  
    } 





    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            
        }).format (inputCurrencyValue / dolarToday) 
        
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            

        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday)
    }
    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)

}

    if (currencySelectTo.value === "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            placeholder: "Digite o valor em dólar",
        
        }).format(inputCurrencyValue/dolarToday)
        
    }
    if (currencySelectTo.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
            
        }).format(inputCurrencyValue )
    }
    if (currencySelectTo.value === "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        
        }).format(inputCurrencyValue/ realToday)
    }
    if (currencySelectTo.value === "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue )
    }
    if (currencySelectTo.value === "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue )
    }


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    const inputCurrencyValue = document.querySelector(".input-currency").value

    

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assests/dollar.png"

            
    }
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assests/euro.png"
    }
    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assests/real.png"
    }
    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assests/libra.png"
    }
    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assests/bitcoin.png"
    }
    convertValues()
}
function changeCurrencyTo() {
    const currencyNameTo = document.getElementById("currency-name-to")
    const currencyImageTo = document.querySelector(".currency-image-to")

  

 
 
    if (currencySelectTo.value === "real") {
        currencyNameTo.innerHTML = "Real brasileiro"
        currencyImageTo.src = "./assests/real.png"
        
        
        
        
        
    }
    if (currencySelectTo.value === "dolar") {
        currencyNameTo.innerHTML = "Dólar americano"
        currencyImageTo.src = "./assests/dollar.png"
        
    

    }
    if (currencySelectTo.value === "euro") {
        currencyNameTo.innerHTML = "Euro"
        currencyImageTo.src = "./assests/euro.png"
    }

    if (currencySelectTo.value === "libra") {
        currencyNameTo.innerHTML = "Libra"
        currencyImageTo.src = "./assests/libra.png"
    }
    if (currencySelectTo.value === "bitcoin") {
        currencyNameTo.innerHTML = "Bitcoin"
        currencyImageTo.src = "./assests/bitcoin.png"
    }
    convertValues()
}


currencySelectTo.addEventListener("change", changeCurrencyTo)

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)

