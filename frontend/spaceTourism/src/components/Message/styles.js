import {styled} from 'styled-components'

export const ContainerMessage = styled.div`
    border-radius: 5px;
    /* padding: 5px 10px; */
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;

    .error {
        display: flex;
        align-items: center;
        justify-content: center;
        color:  #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        width: 100%;
    }

    .success {
        display: flex;
        align-items: center;
        justify-content: center;
        color:  #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
        width: 100%;
    }

    p {
        color: #721c24;
        font-weight: bold;
    }
`