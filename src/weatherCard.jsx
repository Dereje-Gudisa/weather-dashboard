function WeatherCard({ weather }) {
    const { name, humidity, temp, description } = weather;

    const celsius = (temp - 273.15).toFixed(1);

    return (
        <div className="weather-info">
            <h3>{name}</h3>
            <p>Humidity: {humidity}%</p>
            <p>Temp: {celsius}°C</p>
            <p>{description}</p>
        </div>
    );
}

export default WeatherCard;
