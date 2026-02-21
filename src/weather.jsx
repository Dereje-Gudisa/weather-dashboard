import { useState } from "react";
import Recent from "./recent";
import SearchBar from "./searchBar.jsx"
import WeatherCard from "./weatherCard.jsx";
import Loader from "./loader.jsx";

function Weather() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
    const [recentData, setRecentData] = useState([]);

    console.log(recentData);
    console.log(recentData.length);

    return(

        <div className="container">
            < Recent recentData={recentData} />
            <div className="forecast-container">
                <div className="display-result">
                    <h3>countries</h3>
                    <SearchBar setRecentData={setRecentData}/>
                </div>
            </div>
        </div>
        
  );

}

export default Weather