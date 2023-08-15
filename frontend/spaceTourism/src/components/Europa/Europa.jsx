import *as S from './styles'
import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'
import imgEuropa from '../../starter-code/assets/destination/image-europa.webp'
import backgroundDestination from '../../starter-code/assets/destination/background-destination-desktop.jpg'

const Europa = () => {
    const { openComp, setOpenComp } = useContext(OpenComponent)

    return (
        <S.ContainerEuropa display={openComp}>
            <img id='backgroundDestination' src={backgroundDestination} />
            <S.Wrapper>
                <S.LeftContainerDestination>
                    <div className="pickYour">
                        <span id='numberDestination'>01</span> PICK YOUR DESTINATION
                    </div>
                    <div className="moonsPlace">
                        <img className='imgMoon' src={imgEuropa} />
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
                        EUROPA
                    </div>
                    <div className="textMoon">
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of
                        ice skating, curling, hockey, or simple relaxation in your snug
                        wintery cabin.
                    </div>
                    <div className="infoMoons">
                        <div className="infoMoonsLeft">
                            <div className="infoMoonsTop">
                                AVG. DISTANCE
                            </div>
                            <div className="infoMoonsBottom">
                                628 mil. km
                            </div>
                        </div>
                        <div className="infoMoonsRight">
                            <div className="infoMoonsTop">
                                EST. TRAVEL TIME
                            </div>
                            <div className="infoMoonsBottom">
                                3 years
                            </div>
                        </div>
                    </div>
                </S.RightContainerDestination>
            </S.Wrapper>
        </S.ContainerEuropa>
    )
}

export default Europa