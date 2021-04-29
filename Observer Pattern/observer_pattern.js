// The subject class that notifies the observers about the state.
class WeatherData {
  constructor (temp, hum, fore) {
    this.temperature = temp
    this.humidity = hum
    this.forecast = fore
    this.observerList = []
  }

  setValues (temp, hum, fore) {
    this.temperature = temp
    this.humidity = hum
    this.forecast = fore
    this.updateObservers()
  }

  addObserver (observer) {
    this.observerList.push(observer)
  }

  removeObserver (observer) {
    this.observerList = this.observerList.filter(x => x !== observer)
  }

  updateObservers () {
    this.observerList.forEach(x => x.update(this))
  }
}

// The first Observer Class that displays the temperature.
class TempDisplay {
  constructor (weatherData) {
    this.weatherData = weatherData
    this.weatherData.addObserver(this)
  }

  update (newweatherData) {
    this.weatherData = newweatherData
    this.display()
  }

  display () {
    console.log(`The Temperature is ${this.weatherData.temperature}`)
  }
}

// An Observer Class that displays the Humidity.
class HumidityDisplay {
  constructor (weatherData) {
    this.weatherData = weatherData
    this.weatherData.addObserver(this)
  }

  update (newweatherData) {
    this.weatherData = newweatherData
    this.display()
  }

  display () {
    console.log(`The Humidity is ${this.weatherData.humidity}`)
  }
}

// An Observer Class that displays the Forecast.
class ForecastDisplay {
  constructor (weatherData) {
    this.weatherData = weatherData
    this.weatherData.addObserver(this)
  }

  update (newweatherData) {
    this.weatherData = newweatherData
    this.display()
  }

  display () {
    console.log(`${this.weatherData.forecast}`)
  }
}

const WeatherStation = new WeatherData(30, 75, 'take an umberella')
const tempdisplay1 = new TempDisplay(WeatherStation) // You can create as many TempDisplay instances as you want.
// You can add or remove them from the observerList of weatherStation object.

const humiDisplay1 = new HumidityDisplay(WeatherStation) // You can create as many HumidityDisplay instances as you want.
// You can add or remove them from the observerList of weatherStation object.

const forecast1 = new ForecastDisplay(WeatherStation) // You can create as many HumidityDisplay instances as you want.
// You can add or remove them from the observerList of weatherStation object.

WeatherStation.setValues(40, 60, 'sunny af') // observers will be notified.
WeatherStation.setValues(25, 50, 'windy af') // observers will be notified.
