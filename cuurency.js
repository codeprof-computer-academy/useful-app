

// LOGIC FOR EXCHANGE RATE
// url for the api
let api_url = 'https://v6.exchangerate-api.com/v6/3d585b57d4020e17904a39b8/latest/USD'
const currency_form = document.querySelector(".currency-form")

currency_form.addEventListener("submit", function(event){
    event.preventDefault()

    // target the controls
    let from =  document.querySelector(".from").value
    let to = document.querySelector(".to").value
    let amount = Number(document.querySelector(".amount").value)

    // fetching data from the api
fetch(api_url).then(function(data){
         return data.json()

}).then(function(result){
         let conversion_rates = result.conversion_rates
        
        //  convert
        let conversion_result =( conversion_rates[to]/conversion_rates[from]) * amount
       document.querySelector(".result").innerHTML = conversion_result.toFixed(2)

          
})

})