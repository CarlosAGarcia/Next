import React from 'react'
import BannerNavigation from '../components/navigation/BannerNavigation.js'
import StepOne from '../components/stepOne/StepOne.js'
import StepTwo from '../components/stepTwo/StepTwo.js'
import StepThree from '../components/stepThree/StepThree.js'

export default function permissionsDemo() {
    return (
        <div className='mainPage'>
        <BannerNavigation/>
        <div className='demoText'>
          PERMISSIONS DEMO
        </div>
        <div className='triContainer'>
          <div className='left'>
            <div className='step'>1</div>
            NFT COLLECTION ADDRESS
            <StepOne/>
          </div>
          <div className='mid'>
            <div className='step'>2</div>
            WALLET ADDRESS
            <StepTwo/>

          </div>
          <div className='right'>
          <div className='step'>3</div>
            PERMISSIONS MISC
            <StepThree/>
          </div>
        </div>
      </div>
    )
}
