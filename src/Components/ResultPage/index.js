import React, {useState} from 'react'
import {CityContainer, CityNav} from './CityPageElements'



const CityPage = ({isFavorite, toggle}) => {



    return (
        <CityContainer>
            <CityNav>
                <button onClick={toggle}> sassa</button>
            </CityNav> 
        </CityContainer>
    )
}

export default CityPage
