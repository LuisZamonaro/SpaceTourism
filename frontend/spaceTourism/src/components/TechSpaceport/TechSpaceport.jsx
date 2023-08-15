import *as S from './styles'
import backgTech from '../../starter-code/assets/technology/background-technology-desktop.jpg'
import imgSpaceport from '../../starter-code/assets/technology/image-spaceport-portrait.jpg'
import imgSpaceportM from '../../starter-code/assets/technology/image-spaceport-landscape.jpg'
import { OpenComponent } from '../../context/openComponentContext'
import { useContext } from 'react'

const TechSpaceport = () => {

    const { openComp, setOpenComp } = useContext(OpenComponent)

    return (
        <S.ContainerTech display={openComp}>
            <img id='backgroundTech' src={backgTech} />
            <S.WrapperTech>
                <S.LeftContainerTech>
                    <div className="spaceLaunch">
                        <span className='numberTech'>03</span> SPACE LAUNCH 101
                    </div>
                    <div className="leftTechContent">
                        <div className="numbersOptionsTech">
                            <button className='btnTech' onClick={() => setOpenComp(0)}>1</button>
                            <button className='btnTech' onClick={() => setOpenComp(1)}>2</button>
                            <button className='btnTech' onClick={() => setOpenComp(2)}>3</button>
                        </div>
                        <div className="textsTech">
                            <div className="theTerm">
                                THE TERMINOLOGY..
                            </div>
                            <div className="launchVeicle">
                                SPACEPORT
                            </div>
                            <div className="textTech">
                                A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft.
                                Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                            </div>
                        </div>
                    </div>
                </S.LeftContainerTech>
                <S.RightContainerTech>
                <div className="spaceLaunchM">
                        <span className='numberTech'>03</span> SPACE LAUNCH 101
                    </div>
                    <div className="imageTech">
                        <img className='imgTech' src={imgSpaceport} />
                        <img className='imgTechM' src={imgSpaceportM} />
                    </div>
                </S.RightContainerTech>
            </S.WrapperTech>
        </S.ContainerTech>
    )
}

export default TechSpaceport