const apiURL =
"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad?unitGroup=us&key=7GAMBN9CJQT4KRYF3PF3MDCEY&contentType=json"
const getWeather = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);
  let t = data.currentConditions.temp;
  // let h = data.currentConditions.humidity;
  let one = data.days[0].temp;
  let two = data.days[1].temp;
  let three = data.days[2].temp;

  // data.days[]
  document.querySelector("#t").textContent =  t.toFixed(1);
  document.querySelector("#one").textContent = one.toFixed(1)
  document.querySelector("#two").textContent = two.toFixed(1)
  document.querySelector("#three").textContent = three.toFixed(1)
  let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
  document.querySelector("#ws").textContent = data.currentConditions.windspeed;
  document.querySelector("#h").textContent = data.currentConditions.humidity;
  document.querySelector("#condition").textContent =
    data.currentConditions.conditions;
  document.querySelector("#weather_icon").src = image;
  document.querySelector("#weather_icon").alt = data.currentConditions.conditions + 'icon';
    data.currentConditions.conditions + " icon";

    // wind chill calculation

const temp = document.querySelector('#t').textContent;
const ws = document.querySelector('#ws').textContent;
const h = document.querySelector("#h").textContent;

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));
console.log(chill);


let windchill = document.querySelector('#wc');
if (temp <= 50 && ws >= 3) {
    
    windchill.textContent = chill;
}

console.log
};
getWeather();