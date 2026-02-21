import SearchBar from "./searchBar";
import Weather from "./weather";

function Recent({ recentData, setWeather, setRecentData}){
    const lastThree = recentData.slice(-3).reverse();
    function handleClick(item) {
        setWeather(item);
        //console.log(setWeather);
        console.log(item);

    }

    return ( 
        <div className="side-bar">
            <h3 className="recent-headings">Recent Searches</h3>
            <div className="recent-lists">
            {lastThree.map((item, index) => (
                <div key={index}>
                    <div className="each-recent-list"
                        key={index} 
                        onClick={()=>handleClick(item)}
                        >
                        <p>{item.city}</p>
                        <p>{item.temp}</p>
                    </div>
                </div>
            ))}

            </div>
        </div>
    );

}

export default Recent
