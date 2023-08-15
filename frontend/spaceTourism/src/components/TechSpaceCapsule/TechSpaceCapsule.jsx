import *as S from './styles'
import backgTech from '../../starter-code/assets/technology/background-technology-desktop.jpg'
import imgSpaceCapsule from '../../starter-code/assets/technology/image-space-capsule-portrait.jpg'
import imgSpaceCapsuleM from '../../starter-code/assets/technology/image-space-capsule-landscape.jpg'
import { OpenComponent } from '../../context/openComponentContext'
import { useContext } from 'react'

const TechSpaceCapsule = () => {

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
                                SPACE CAPSULE
                            </div>
                            <div className="textTech">
                                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule
                                is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                            </div>
                        </div>
                    </div>
                </S.LeftContainerTech>
                <S.RightContainerTech>
                <div className="spaceLaunchM">
                        <span className='numberTech'>03</span> SPACE LAUNCH 101
                    </div>
                    <div className="imageTech">
                        <img className='imgTech' src={imgSpaceCapsule} />
                        <img className='imgTechM' src={imgSpaceCapsuleM} />
                    </div>
                </S.RightContainerTech>
            </S.WrapperTech>
        </S.ContainerTech>
    )
}

export default TechSpaceCapsule