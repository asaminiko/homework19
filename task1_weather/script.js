const LAT = 50.4674
const LON = 30.4828
const API_KEY = '9e93d1a8af0cad2bf51a472ff0b0f91b'
const getAsync = async (lat, lon, appid, units) => {
  try {
    const params = new URLSearchParams({ lat, lon, appid, units })
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${params}`
    )
    if (!response.ok) throw new Error(`Помилка: ${response.status}`)
    const weather = await response.json()
    console.log(weather.main)
    widget.textContent = `Температура: ${weather.main.temp}°C 
    \n Відчувається як ${weather.main.feels_like}°C
    \n макс.${weather.main.temp_max}°C 
    \n мін.${weather.main.temp_min}°C `
  } catch (error) {
    console.error(`Помилка: ${error.message}`)
  }
}

let parent = document.getElementById('parent')
let widget = document.createElement('p')
let button = document.createElement('button')
button.id = 'myBtn'
button.textContent = 'Оновити дані'
parent.appendChild(widget)
parent.appendChild(button)

button.addEventListener('click', function () {
  getAsync(LAT, LON, API_KEY, 'metric')
})
