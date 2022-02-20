import styled from "styled-components";
import AddIcon from "../../assets/icon/AddIcon";


const AddBox = styled.div`
  width: ${({width}: AddBtnProp) => `${width}px`};
  height: ${({height}:AddBtnProp) => height ? `${height}px` : '100%'};
  background-color: #f0f2f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(226, 231, 240);
  border-radius: 0.5rem;
`
type AddBtnProp = {
    width?: number,
    height?:number|undefined,
    onClick?: Function,
    id?: any
}

export default function AddButton({width=300,
                                      height,
                                      onClick=()=>{}}:AddBtnProp){
    return(
        <AddBox width={width} height={height} onClick={()=>{onClick()}}>
            <AddIcon />
        </AddBox>
    )
}