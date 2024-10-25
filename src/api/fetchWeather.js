import axios from "axios";

/*
*
*1 query  Le paramètre query est utilisé pour passer des informations à la fonction. villle ect
*2params: {...} : Cet objet contient les paramètres de requête que tu envoies à l'API.
* 'metric' indique que tu veux les températures en degrés Celsius. 
*/
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "abae927f2f694c06417bff061625ec0f";


export const fetchWeather = async (query) => {
       const {data} = await  axios.get(URL, {
        params: {
            q:query,     
            units : 'metric',
            APPID: API_KEY
        }
       })
       return data;
}