import styled from "styled-components";


const HeaderDiv = styled.div`
  display: flex;
  padding-left: 2rem;
`
const Heading1 = styled.h1`
    font-family: ${({theme}) => theme.fonts.body};
    text-align: center;
    text-transform: uppercase;
    padding: 1rem 0;
    margin: 0;
`

export default function HeaderText({text}: {text:string}){
    return (
        <HeaderDiv>
            <Heading1>{text}</Heading1>
        </HeaderDiv>
    )
}