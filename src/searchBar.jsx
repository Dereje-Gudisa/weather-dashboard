import { useState } from "react";

function SearchBar({ setRecentData, weather, setWeather }){

    const [city, setCity] = useState("");
    //const [weather, setWeather] = useState("");   
    const [error, setError] = useState(false);

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
                setError(false);
            }
            catch(error){
                console.error(error)
                setError(true)
            }
        };
    };
    
    function displayWeatherData(data){
 
        const {name: city,
               main: {humidity, temp}, 
               weather:[{id, description}] } = data;
        console.log(city + "," + humidity +  "," + id + "," + temp + "," + description);
        setWeather({city, humidity, temp, id, description})
        let newCity = {city, humidity, temp, id, description}
        setRecentData(prev => [...prev, newCity]);
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="seach-bar">
                <input type="text" className="input-field" placeholder="Enter city name..." onChange={(e)=> setCity(e.target.value)}  value={city}/>
                <button type="submit" className="search-btn">Search</button>
            </form>
            { error? (<div className="error">
                        <p className="messages">Please enter a known city.</p>
                    </div>):weather.city ? (
                    <div className="weather-headings-container">
                        <h4 className="weather-headings">City:{weather.city}</h4>
                        <h4 className="weather-headings" >Humidity:{weather.humidity + " %"}</h4>
                        <h4 className="weather-headings">Temp: {weather.temp}</h4>
                        <h4 className   = "weather-headings">Discription:  {weather.description}</h4> 
                    </div>
                ) : (
                <div className="no-weather">
                    <p className="messages">Please search for a city to see weather data.</p>
                </div>
            )}
        </div>
        
    );
}

export default SearchBar