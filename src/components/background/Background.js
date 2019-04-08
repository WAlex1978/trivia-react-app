import styled from 'styled-components';
import image from '../assets/images/background.jpg';

const Background = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
 
export default Background;