import BannerNavigation from '../components/navigation/BannerNavigation'
import StyledMain from '../styledPages/StyledMain.style'

export default function Home() {
  return (
    <StyledMain>
      <div className='mainPage'>
        <BannerNavigation/>
        <div className='triContainer'>
          <div className='left'>
          left
          </div>
          <div className='mid'>
          mid
          </div>
          <div className='right'>
          right
          </div>
        </div>
      </div>
    </StyledMain>
  )
}
