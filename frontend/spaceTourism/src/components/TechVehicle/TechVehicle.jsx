import *as S from './styles'
import backgTech from '../../starter-code/assets/technology/background-technology-desktop.jpg'
import imgLaunch from '../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import imgLaunchM from '../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import { OpenComponent } from '../../context/openComponentContext'
import { useContext } from 'react'

const TechVehicle = () => {

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
                                LAUNCH VEHICLE
                            </div>
                            <div className="textTech">
                                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond.
                                Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!
                            </div>
                        </div>
                    </div>
                </S.LeftContainerTech>
                <S.RightContainerTech>
                    <div className="spaceLaunchM">
                        <span className='numberTech'>03</span> SPACE LAUNCH 101
                    </div>
                    <div className="imageTech">
                        <img className='imgTech' src={imgLaunch} />
                        <img className='imgTechM' src={imgLaunchM} />
                    </div>
                </S.RightContainerTech>
            </S.WrapperTech>
        </S.ContainerTech>
    )
}

export default TechVehicle