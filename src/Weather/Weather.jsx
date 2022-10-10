import axios from 'axios';
import React, { useState } from 'react';
import "../App.css";

const Weather = () => {
    const API_KEY = "e4519a54d7276cef37f3fe182c27ce47";
    const [query, setQuery] = useState("");
    const [getData, setGetData] = useState({})
    const [getWeatherData, setGetWeatherData] = useState([])
    const SearchHandler = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}
        &appid=${API_KEY}`)
            .then((res) => {
                setGetData(res.data)
                // console.log(getData);
                setGetWeatherData(res.data.weather[0])
                // console.log(getWeatherData.id);
            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="weatherBg">
                    <h2 className='text-center text-white fw-bold pt-4 pb-5'>Weather App</h2>
                    <div className="weatherSearch mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-5 col-8">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder='Know About Weather Of Your City' onChange={(e) => setQuery(() => (e.target.value))} />
                                    <label htmlFor="floatingInput">City Name</label>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-4">
                                <button className='btn btn-primary w-100 rounded-pill' type='button' onClick={SearchHandler}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="result mt-5 mb-4">
                    <div className="card shadow m-auto rounded" style={{ "width": "25rem", "height": "15rem", "textAlign": "center" }}>
                        <div className="weatherDetails mt-4 mx-auto">
                            <img src="weather.png" width="90rem" alt="" />
                            <h4 className='mt-2'>{getData?.name}</h4>
                            <h2>{((getData?.main?.temp) - 273.15).toFixed(2)}°C
                            </h2>
                            <h5>{getWeatherData.description}</h5>
                            <img src={getWeatherData.icon} alt="" />
                        </div>
                    </div>
                </div>
                {/* Container end */}
            </div>
        </>
    )
}

export default Weather