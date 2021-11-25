import BannerNavigation from '../components/navigation/BannerNavigation'
import StyledMain from '../styledPages/StyledMain.style'
import StepOne from '../components/stepOne/StepOne'
import StepTwo from '../components/StepTwo/StepTwo'

export default function Home() {
  return (
    <StyledMain>
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
          </div>
        </div>
      </div>
    </StyledMain>
  )
}
