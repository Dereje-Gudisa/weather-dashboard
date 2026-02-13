import { useState } from "react";
import Recent from "./recent";
import SearchBar from "./searchBar.jsx"
import WeatherCard from "./weatherCard.jsx";
import Loader from "./loader.jsx";
import { getWeather } from "./weatherService";


function Weather() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
    
    return(
        <div className="container">
            < Recent/>
            <div className="forecast-container">
                <div className="display-result">
                    <h3>countries</h3>
                    <SearchBar/>
                    {/* <div className="wheather-info">
                        {(
                        <>
                        
                            <h4>city:{weather.city}</h4>
                            <h4>humidity:{weather.humidity}%</h4>
                            <h4>Temp: {weather.temp}</h4>
                            <h4>disc: {weather.description}</h4> 
                        </>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
        
  );

}

export default Weather