import React, { useState } from 'react'
import StyledStepOne from '../stepOne/styles/StyledStepOne.style' //'./styles/StyledStepOne.style'
import TextOrigin from './TextOrigin'
import ConnectOrigin from './ConnectOrigin'

export const TEXT = 'TEXT'
export const CONNECT = 'CONNECT'

const PlaceholderType =  () => {
    return <div className='placeholder'>SET WALLET ADDRESS ABOVE</div>
}

export default function StepTwo() {
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
                        <button className='originTypeBtn' onClick={() => setOrigintype(CONNECT)}>{CONNECT}</button>
                    </div>
                </div>
            </div>
            <div className='contentContainer'>
                <div className='content'>
                    <TextOrigin/>
                    <PlaceholderType/>
                    <ConnectOrigin/>
                </div>
            </div>
        </StyledStepOne>
    )
}
