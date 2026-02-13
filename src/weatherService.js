export async function getWeatherData(city){

    const apiKey = "813f9e6b231ee48528557a605da1cb88";
    const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("it seems city data not found");
    }
    return await response.json();

};