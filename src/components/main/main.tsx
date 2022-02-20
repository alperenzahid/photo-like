import styled from 'styled-components';
import HeaderText from "../HeaderText";

const Outer = styled.div`
  color: ${({theme}) => theme.colors.primary};
  border: solid 50px;
  font-size: 0.5rem;
  text-align: left;
`

export default function Main(){
    return (
        <Outer>
            <HeaderText text={"Image Approval Application"}/>
        </Outer>
    )
}