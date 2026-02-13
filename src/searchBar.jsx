import { useState } from "react";

function SearchBar(){

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");

    async function getWeatherData(city){
        const apiKey = "813f9e6b231ee48528557a605da1cb88";
        const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("it seems data not found");
        }
         
        return await response.json();
    };

    async function handleSubmit(e){
        e.preventDefault();
        setCity("")
        
        if(city){
            try{
                const weatherData = await getWeatherData(city);
                displayWeatherData(weatherData);
            }
            catch(error){
                console.error(error)
                    
            }
        };
    };
    
    function displayWeatherData(data){
 
        const {name: city,
               main: {humidity, temp}, 
               weather:[{id, description}] } = data;
        console.log(city + "," + humidity +  "," + id);

        setWeather({city, humidity, temp, id, description})
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="seach-bar">
                <input type="text" className="" placeholder="Enter city name..." onChange={(e)=> setCity(e.target.value)}  value={city}/>
                <button type="submit">Search</button>
            </form>
            <h4>city:{weather.city}</h4>
            <h4>humidity:{weather.humidity}%</h4>
            <h4>Temp: {weather.temp}</h4>
            <h4>disc: {weather.description}</h4> 
        </div>
        
    );
}

export default SearchBar