// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

let key= "7b8159bac748edc0ae3714908250f3ca";



let container = document.getElementById("container")
let map = document.getElementById("gmap_canvas");


async function getWeather(){
    try{
        let city = document.getElementById("city").value;

let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)    // & is usiing here

let data = await res.json()
console.log(data);
appendData(data)
    }

catch(err){
    console.log(err);
}
}
function appendData(data){

container.innerHTML = null;

let heading = document.createElement("h1");
heading.innerHTML=`Weather Report <br> <br>`
heading.setAttribute("id", "only-big-screen");


 // shows current date and time
const timeNow = new Date();
// console.log(timeNow);
let dateNtime = document.createElement('p');
dateNtime.innerHTML = ` ${timeNow} <br> <br>`;
// dateNtime.style.color="red";
dateNtime.setAttribute("id", "dateNtime")


let name = document.createElement('h2');

    name.innerHTML = `${data.name} <br><br>`
    let temp = document.createElement('h1')
temp.innerHTML = `Temp - <u>${data.main.temp}°C</u> <br><br>`
temp.style.color="red";

let humidity = document.createElement('p');
humidity.innerHTML = `Humidity - ${data.main.humidity}% <br><br>`

let feels_like = document.createElement("h3");
feels_like.innerHTML = `Feel like ${data.main.feels_like}°C ${data.weather[0].description}. Gentle ${data.weather[0].main} <br><br>`
dateNtime.setAttribute("id", "feels_like");


let pressure = document.createElement("p");
pressure.innerHTML = `Pressure - ${data.main.pressure} Pa <br>`


container.append(heading,dateNtime, name, temp,feels_like, humidity, pressure);

//appending a map

map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}
