import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'
import *as S from './styles'
import backgroundDestination from '../../starter-code/assets/destination/background-destination-desktop.jpg'
import imgTitan from '../../starter-code/assets/destination/image-titan.webp'

const Titan = () => {
    const { openComp, setOpenComp } = useContext(OpenComponent)

    return (
        <S.ContainerTian display={openComp}>
            <img id='backgroundDestination' src={backgroundDestination} />
            <S.Wrapper>
                <S.LeftContainerDestination>
                    <div className="pickYour">
                        <span id='numberDestination'>01</span> PICK YOUR DESTINATION
                    </div>
                    <div className="moonsPlace">
                        <img className='imgMoon' src={imgTitan} />
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
                        TITAN
                    </div>
                    <div className="textMoon">
                        The only moon known to have a dense atmosphere other than Earth, Titan
                        is a home away from home (just a few hundred degrees colder!). As a
                        bonus, you get striking views of the Rings of Saturn.
                    </div>
                    <div className="infoMoons">
                        <div className="infoMoonsLeft">
                            <div className="infoMoonsTop">
                                AVG. DISTANCE
                            </div>
                            <div className="infoMoonsBottom">
                                1.6 bil. km
                            </div>
                        </div>
                        <div className="infoMoonsRight">
                            <div className="infoMoonsTop">
                                EST. TRAVEL TIME
                            </div>
                            <div className="infoMoonsBottom">
                                7 years
                            </div>
                        </div>
                    </div>
                </S.RightContainerDestination>
            </S.Wrapper>
        </S.ContainerTian>
    )
}

export default Titan