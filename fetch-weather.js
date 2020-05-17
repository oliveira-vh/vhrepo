
const fetch = require("node-fetch"); //needs node-fetch dependency
const url = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '' //openweather api key

const city = 'Belem'

async function getData() {
	try {
		const response = await fetch(`${url}${city}&appid=${apiKey}`)

		if (response.ok) {
			const jsonResponse = await response.json()
			//console.log(response)
			//console.log(jsonResponse.main.temp)
			//console.log(jsonResponse.weather)
			const temp_city_celsius = jsonResponse.main.temp - 273.15
			console.log(temp_city_celsius)

		} 

	} catch (error) {
		console.log(error)
	}
}

getData()
