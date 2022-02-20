import styled from 'styled-components';
import HeaderText from "../HeaderText";
import PhotoList from "../list-photos/photoList";
import Border from "../view/Border";

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
            <Border />
            <PhotoList />
        </Outer>
    )
}