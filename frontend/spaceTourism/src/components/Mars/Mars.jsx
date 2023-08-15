import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'
import *as S from './styles'
import imageMars from '../../starter-code/assets/destination/image-mars.png'
import backgroundDestination from '../../starter-code/assets/destination/background-destination-desktop.jpg'

const Mars = () => {
    const { openComp, setOpenComp } = useContext(OpenComponent)

    return (
        <S.ContainerMars display={openComp}>
            <img id="backgroundDestination" src={backgroundDestination} />
            <S.Wrapper>
                <S.LeftContainerDestination>
                    <div className="pickYour">
                        <span id='numberDestination'>01</span> PICK YOUR DESTINATION
                    </div>
                    <div className="moonsPlace">
                        <img className='imgMoon' src={imageMars} />
                    </div>
                </S.LeftContainerDestination>
                <S.RightContainerDestination>
                    <div className="moons">
                        <span onClick={() => setOpenComp(0)}>MOON</span>
                        <span onClick={() => setOpenComp(1)} >MARS</span>
                        <span onClick={() => setOpenComp(2)}>EUROPA</span>
                        <span onClick={() => setOpenComp(3)}>TITAN</span>
                    </div>
                    <div className="actualMoon">
                        MARS
                    </div>
                    <div className="textMoon">
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
                        the tallest planetary mountain in our solar system. It’s two and a half times
                        the size of Everest!
                    </div>
                    <div className="infoMoons">
                        <div className="infoMoonsLeft">
                            <div className="infoMoonsTop">
                                AVG. DISTANCE
                            </div>
                            <div className="infoMoonsBottom">
                                225 MIL. KM
                            </div>
                        </div>
                        <div className="infoMoonsRight">
                            <div className="infoMoonsTop">
                                EST. TRAVEL TIME
                            </div>
                            <div className="infoMoonsBottom">
                                3 days
                            </div>
                        </div>
                    </div>
                </S.RightContainerDestination>
            </S.Wrapper>
        </S.ContainerMars>
    )
}

export default Mars