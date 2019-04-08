import styled from 'styled-components';

const Text = styled.div`
    color: #fff;
    font-size: ${props => props.size ? (props.size) : "1.4em"};
    text-align: center;
    margin: auto;
`

export default Text;