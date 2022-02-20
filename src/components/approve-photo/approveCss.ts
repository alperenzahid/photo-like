import styled from "styled-components";

const imgHeight = 350;
export const ImgBig = styled.img`
  //position: absolute;
  object-fit: cover;
  border-radius: 25px;
  width: 100%;
  max-height: ${imgHeight}px;
`
export const ApproveBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

export const PhotoBox = styled.div`
  padding: 1rem 0;
  height: calc(${imgHeight}px + 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FooterBox = styled.div`
  justify-content: center;
  padding-top: 1rem;
  width: 100%;
  display: flex;
`

export const ButtonBox = styled(FooterBox)`
  justify-content: space-between;
`



export const AddText = styled.div`
  color: rgb(137,137,137);
  font-size: 0.75rem;
  text-align: center;
`
export enum ButtonType {
    PRIMARY,
    SECONDARY
}
export type BtnProps = {
    bType?: ButtonType,
    theme?: any,
    onClick?: Function
}


const BtnBase = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 2rem;
  border: none;
  color: white;
`
export const BtnPrimary = styled(BtnBase)`
  background-color:  ${({theme}) => theme.colors.primary};
`

export const BtnSecondary = styled(BtnBase)`
  background-color:rgb(69,69,69);
`
