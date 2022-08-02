//22760744d389f86588a53ad51eb19503 <-- weather api key

document.querySelector('button').addEventListener('click', getFetch) //on click run this function

function getFetch(){
  const choice = document.querySelector('input').value 
  console.log(choice) 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&appid=22760744d389f86588a53ad51eb19503&units=metric`

  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)

        const currentTemp = data.main.temp
        const currentFeel = data.main.feels_like
        const currentDesc = data.weather[0].description
        const currentHumid = data.main.humidity
        const currentWind = data.wind.speed

        document.getElementById('city').innerText = `Weather in ${choice}`
        document.getElementById('temp').innerText = `${currentTemp}°C`
        document.getElementById('descritiption').innerText = `Conditions: ${currentDesc}`
        document.getElementById('feels-like').innerText = `Feels like: ${currentFeel}°C`
        document.getElementById('humidity').innerText = `Humidity: ${currentHumid}%`
        document.getElementById('wind').innerText = `Wind-speed: ${currentWind}km/h`

        document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${choice})`

         if (currentTemp >= 0 && currentTemp <= 10 ) {
          document.getElementById('message-to-user').innerText = `It will be a cool day in ${choice} today. Bring a jacket!`
        } else if (currentTemp >= 11 && currentTemp <= 20) {
          document.getElementById('message-to-user').innerText = `It will be a pleasant day in ${choice} today!`
        } else if ( currentTemp >= 21) {
          document.getElementById('message-to-user').innerText = `It will be a warm day in ${choice} today. Drink lots of water!`
        } else {
          document.getElementById('message-to-user').innerText = `It will be a cold day in ${choice} today. Make sure you dress up warm!`
        }

               
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
