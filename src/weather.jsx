import { useState } from "react";
import Recent from "./recent";
import SearchBar from "./searchBar.jsx"

function Weather() {
    //const [loading, setLoading] = useState(false);
    const [recentData, setRecentData] = useState([]);
    const [weather, setWeather] = useState({});

    console.log(recentData);
    console.log(recentData.length);

    return(

        <div className="container">
            < Recent recentData={recentData} setWeather = {setWeather}/>
            <div className="forecast-container">
                <div className="display-result">
                    <SearchBar weather ={weather} setWeather ={setWeather} setRecentData={setRecentData}/>
                </div>
            </div>
        </div>
        
  );

}

export default Weather