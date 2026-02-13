
function Weather() {

  return(
    <div className="container">
        <div className="side-bar">
            <h3>Recent Searches</h3>
            <div className="recent-lists">
                <p>London</p>
                <p>New York</p>
                <p>Tokyo</p>
                <p>Paris</p>
            </div>
        </div>
        <div className="forecast-container">
            <div className="seach-bar">
                <input type="text" className="" placeholder="Search city" />
                <button type="">Search</button>
            </div>
            <div className="display-result">
                <h3>countries</h3>
                <div className="wheather-info">
                    <h4>humidity</h4>
                    <h4>wind</h4>
                    <h4>condition</h4>
                </div>

            </div>
        </div>
    </div>
  );

}

export default Weather