import React, {useState} from 'react'
import {CityContainer, CityNav} from './CityPageElements'



const CityPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Favorites, setFavorites] = useState([]);


    useEffect(() =>{
        fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid={process.env.REACT_APP_WEATHER_APP_API}') // City name = search results
        .then(res => res.json())
        .then(
            (results) => {
                setIsLoaded(true);
                setFavorites([
                    ...Favorites, {
                        id = city.id,
                        name = city.name, 
                        currTemp = temperature.value,
                        highTemp = temperature.max,
                        lowTemp = temperature.min,
                    }
                ] 

                )
            }
        )
    });

    // const addFavorite = event => {
    //     event.preventDefault();
    //     setFavorites([
    //         ...Favorites,
    //         {
    //             id: ,
    //             name: , 
    //             currTemp:,
    //             highTemp:,
    //             lowTemp:, 
    //         }
    //     ])
    // }

    return (
        <CityContainer>
            <CityNav>
                <BackButton>
                    <button onClick={}></button>
                </BackButton>
                <FavoriteButton>
                    <button onClick={}></button>
                </FavoriteButton>
            </CityNav> 
        </CityContainer>
    )
}

export default CityPage
