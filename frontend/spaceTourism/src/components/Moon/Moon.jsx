import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'
import imgMoon from '../../starter-code/assets/destination/image-moon.webp'
import backgroundDestination from '../../starter-code/assets/destination/background-destination-desktop.jpg'
import *as S from './styles'

const Moon = () => {
    const { openComp, setOpenComp } = useContext(OpenComponent)

    return (
        <S.ContainerMoon display={openComp}>
            <img id='backgroundDestination' src={backgroundDestination} />
            <S.Wrapper>
                <S.LeftContainerDestination>
                    <div className="pickYour">
                        <span id='numberDestination'>01</span> PICK YOUR DESTINATION
                    </div>
                    <div className="moonsPlace">
                        <img className='imgMoon' src={imgMoon} />
                    </div>
                </S.LeftContainerDestination>
                <S.RightContainerDestination>
                    <div className="moons">
                        <span onClick={() => setOpenComp(0)}>MOON</span>
                        <span onClick={() => setOpenComp(1)}>MARS</span>
                        <span onClick={() => setOpenComp(2)}>EUROPA</span>
                        <span onClick={() => setOpenComp(3)}>TITAN</span>
                    </div>
                    <div className="actualMoon">
                        MOON
                    </div>
                    <div className="textMoon">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                        regain perspective and come back refreshed. While you’re there, take in some history
                        by visiting the Luna 2 and Apollo 11 landing sites.
                    </div>
                    <div className="infoMoons">
                        <div className="infoMoonsLeft">
                            <div className="infoMoonsTop">
                                AVG. DISTANCE
                            </div>
                            <div className="infoMoonsBottom">
                            384,400 km
                            </div>
                        </div>
                        <div className="infoMoonsRight">
                            <div className="infoMoonsTop">
                                EST. TRAVEL TIME
                            </div>
                            <div className="infoMoonsBottom">
                                9 MONTHS
                            </div>
                        </div>
                    </div>
                </S.RightContainerDestination>
            </S.Wrapper>
        </S.ContainerMoon>
    )
}

export default Moon