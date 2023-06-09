function convertToCelsius(event) {
    event.preventDefault()
    const degreeF = Number (event.target.temperature.value)
    const degreeC = (degreeF -32)*5/9
    document.querySelector("h2").innerText=degreeF.toFixed(1) + "°F is =" + degreeC.toFixed(1) + "°C"
}

const form = document.querySelector("form")
form.addEventListener("submit", convertToCelsius)