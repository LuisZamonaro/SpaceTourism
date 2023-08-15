import *as S from './styles'
import backgroundHome from '../../starter-code/assets/home/background-home-desktop.jpg'
import backgroundHomeMobile from '../../starter-code/assets/home/background-home-tablet.jpg'

const Home = () => {


  return (
    <S.ContainerHome>
      <img id="backgroundHome" src={backgroundHome} />
      <img id='backgroundHomeMobile' src={backgroundHomeMobile} />
      <S.WrapperHome>
        <S.LeftContainerHome>
          <div className="soYouWant">
            SO, YOU WANT TO TRAVEL TO
          </div>
          <div className="space">
            SPACE
          </div>
          <div className="letsFace">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </div>
        </S.LeftContainerHome>
        <S.RightContainerHome>
          EXPLORE
        </S.RightContainerHome>
      </S.WrapperHome>
    </S.ContainerHome>


  )
}

export default Home