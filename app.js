const API_KEY = `0cec99068845539f942de14eb8fe409d`
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const cityname = document.querySelector("cityname")

// get weather function 
const getWeather = async (city) => {
    weather.innerHTML = `<h2> loading... </h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const respnse = await fetch(url);
    const data = await respnse.json();
    return showweather(data);
}

// show weather function 
const showweather = (data) => {
    if(data.cod == "404"){
        alert("city not found");
        weather.innerHTML = `<h2> city not found </h2>`
        return
    };
    weather.innerHTML =
     `  
     <div class="cityname">
         <p>${data.name}</p>
    </div>
    <div>
     <h2>${data.main.temp} ℃</h2>
     <h4> ${data.weather[0].main} </h4>
    </div>
        <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div> 

        <div style="display: flex; gap: 1.5rem; justify-content: center; align-items: center;">
                    <div>
                        <h3> speed </h3>
                        <h3> ${data.wind.speed} </h3>
                    </div>
    
                    <div>
                        <h3> deg </h3>
                        <h3> ${data.wind.deg} </h3>
                    </div>
                    
                    <div>
                        <h3> humidity </h3>
                        <h3> ${data.main.humidity} </h3>
                    </div>

                    <div>
                        <h3> pressure </h3>
                        <h3> ${data.main.pressure} </h3>
                    </div>

    
                </div>

     `

}


form.addEventListener("submit", (event) => {
    getWeather(search.value);
    event.preventDefault();  //it stop loading when form is submited 
     search.value = ""
})