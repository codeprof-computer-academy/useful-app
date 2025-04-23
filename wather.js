// logic to check weather condition
const weather_form = document.querySelector(".weather-form")

weather_form.addEventListener('submit', get_weather)


async function get_weather(event) {
      event.preventDefault()

	  let cels_temp = 0
	  let far_temp = 0
	  let humidity = 0
	  let city = ""
	  let country = ""
	  let condition = ""
	  let image = ""

     let location = document.querySelector(".location").value
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bca7fb8cddmshe45400b36022f6ap138b8ajsn9bfe6d21d6a6',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result)
     city  = result.location.city
	 country = result.location.country
    //  humidity = result.current_observation.atmosphere.humidity
      far_temp = result.current_observation.condition.temperature
	 far_temp
	// conversion to celsius
     cels_temp = (far_temp - 32)/1.8
	 cels_temp
    condition =  result.current_observation.condition.text

	
	// display details

document.querySelector(".city").innerHTML = city
document.querySelector(".country").innerHTML = country
document.querySelector(".f-temp").innerHTML  = far_temp.toFixed(1)
document.querySelector(".c-temp").innerHTML = cels_temp.toFixed(1)
document.querySelector(".condition").innerHTML = condition

if(cels_temp > 28){
	 image = "sunlight.png"
}else{
	  image = "cloud.png"
}

document.querySelector(".temp-img").src = image




} catch (error) {
	console.error(error);
}


}

get_weather()