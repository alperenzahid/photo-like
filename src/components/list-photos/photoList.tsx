import HeaderText from "../HeaderText";
import styled from "styled-components";
import {useAppSelector} from "../../app/hooks";
import AddButton from "../view/AddButton";
import RightIcon from "../../assets/icon/RightIcon";

const ImgSmall = styled.img`
  height: 60px;
  width: 100px;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`
const ApprovedListBox = styled.div`
  margin-left: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  ::-webkit-scrollbar {    display: none;}
`

const ApprovedOuterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;
`

export default function PhotoList(){
    const photos = useAppSelector((state) => state.photo.photos)
    return (
        <div>
            <HeaderText text={`Approved Images (${photos.length})`}/>
            <ApprovedOuterBox>
                <ApprovedListBox>
                    {photos.length === 0 ?
                        <AddButton width={100} height={60} />
                        : photos.map((photo) => (
                            <ImgSmall key={photo.id} src={photo.urls.small}  alt={"Approved Images"}/>
                        ))
                    }
                </ApprovedListBox>
                <RightIcon />
            </ApprovedOuterBox>
        </div>
    )
}