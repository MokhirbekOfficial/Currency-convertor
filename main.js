async function getData (firstCountry, secondCountry, amount) {
    let myKey ='d5ea8ed1d4ab1d62fc960015'
    let newData = await fetch (` https://v6.exchangerate-api.com/v6/${myKey}/pair/${firstCountry}/${secondCountry}/${amount}`, {
        method: "GET"
    })
    return await newData.json()
}

async function display () {
    let amountRate = input1.value
    let firstRate = currency1.value
    let secondRate = currency2.value
    
    if(amountRate !== ''){
        let result = await getData(firstRate, secondRate, amountRate)
        renderer(result)
    }
    input1.value = null
}

function renderer(result){
    h2.textContent = result.conversion_result
}

function newFunktion () {
    if(currency1.value=='USD'){
        img1.setAttribute("src", "./img/USA.png")
    }
    if(currency1.value=='UZS'){
        img1.setAttribute("src", "./img/uz-flag.jpg")
    }
    if(currency1.value=='AUD'){
        img1.setAttribute("src", "./img/AUS.png")
    }
    if(currency1.value=='EUR'){
        img1.setAttribute("src", "./img/EU.png")
    }
    if(currency1.value=='JPY'){
        img1.setAttribute("src", "./img/jp.png")
    }
    if(currency1.value=='CAD'){
        img1.setAttribute("src", "./img/CA.jpg")
    }
    if(currency1.value=='RUB'){
        img1.setAttribute("src", "./img/ru.png")
    }
    if(currency1.value=='INR'){
        img1.setAttribute("src", "./img/INdia.png")
    }
    if(currency2.value=='USD'){
        img2.setAttribute("src", "./img/USA.png")
         span.textContent = currency2.value
    }
    if(currency2.value=='UZS'){
        img2.setAttribute("src", "./img/uz-flag.jpg")
         span.textContent = currency2.value
    }
    if(currency2.value=='AUD'){
        img2.setAttribute("src", "./img/AUS.png")
         span.textContent = currency2.value
    }
    if(currency2.value=='EUR'){
        img2.setAttribute("src", "./img/EU.png")
         span.textContent = currency2.value
    }
    if(currency2.value=='JPY'){
        img2.setAttribute("src", "./img/jp.png")
         span.textContent = currency2.value
    }
    if(currency2.value=='CAD'){
        img2.setAttribute("src", "./img/CA.jpg")
         span.textContent = currency2.value
    }
    if(currency2.value=='RUB'){
        img2.setAttribute("src", "./img/ru.png")
         span.textContent = currency2.value
    }
    if(currency2.value=='INR'){
        img2.setAttribute("src", "./img/INdia.png")
         span.textContent = currency2.value
    }
}
currency1.onchange = newFunktion
currency2.onchange = newFunktion
convert.onclick = display 