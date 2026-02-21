import SearchBar from "./searchBar";
import Weather from "./weather";

function Recent({ recentData }){
    const lastThree = recentData.slice(-3);
    return ( 
        <div className="side-bar">
            <h3>Recent Searches</h3>
            <div className="recent-lists">
            {lastThree.map((item, index) => (
                <div key={index}>
                    <p>{item.city}</p>
                    <p>{item.temp}</p>
                </div>
            ))}

            </div>
        </div>
    );

}

export default Recent
