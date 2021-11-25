import React, { useState } from 'react'
import StyledStepOne from './styles/StyledStepOne.style'
import TextOrigin from './TextOrigin'
import SearchOrigin from './SearchOrigin'

export const TEXT = 'TEXT'
export const SEARCH = 'SEARCH'

const PlaceholderType =  () => {
    return <div className='placeholder'>SET THE COLLECTION ADDRESS TO VIEW ABOVE</div>
}

export default function StepOne() {
    const [ originType, setOrigintype ] = useState(null)

    return (
        <StyledStepOne originType={originType}>
            <div className='originSelector'>
                <div className='originType'>
                    <div className='typeText'>
                        <button className='originTypeBtn' onClick={() => setOrigintype(TEXT)}>{TEXT}</button>
                    </div>
                </div>
                <div className='originType'>
                    <div className='typeText'>
                        <button className='originTypeBtn' onClick={() => setOrigintype(SEARCH)}>{SEARCH}</button>
                    </div>
                </div>
            </div>
            <div className='contentContainer'>
                <div className='content'>
                    <TextOrigin/>
                    <PlaceholderType/>
                    <SearchOrigin/>
                </div>
            </div>
        </StyledStepOne>
    )
}
