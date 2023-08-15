import *as S from './styles'

const Message = ({ msg, type }) => {
    return (
        <S.ContainerMessage >
            <div className={` ${type}`}>
                <p>{msg}</p>
            </div>
        </S.ContainerMessage>
    )
}

export default Message