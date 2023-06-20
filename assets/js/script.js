function getWeather(data){
	fetch("https://api.weatherapi.com/v1/current.json?key=92ce55b7b0564846b6d70333232006&q=" + data)
	.then(response => response.json())
		.then(data => {
		
		const date = new Date(data.location.localtime);
		const options = {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
		};

		cityName.innerHTML = data.location.name
		time.innerHTML = date.toLocaleString("en-US", options)
		temp.innerHTML = data.current.temp_c
		realfeel.innerHTML = data.current.feelslike_c
		humidity.innerHTML = data.current.humidity
		wind.innerHTML = data.current.wind_kph
	})
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather('Brahmanbaria')