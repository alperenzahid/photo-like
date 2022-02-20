import {useEffect, useState} from "react";
import Photo from "../../app/entities/Photo";
import Border from "../view/Border";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {approvePhoto, rejectPhoto, removePhoto} from "../main/photoSlice";
import {AddText, ApproveBox, BtnPrimary, BtnSecondary, ButtonBox, FooterBox, ImgBig, PhotoBox} from "./approveCss";
import AddIcon from "../../assets/icon/AddIcon";
import AddButton from "../view/AddButton";
import ApproveIcon from "../../assets/icon/ApproveIcon";
import CancelIcon from "../../assets/icon/CalcelIcon";
import useRandomPhoto, {REQUEST_STATUS} from "../../app/useRandomPhoto";

export enum photoMode{ APPROVE, EDIT}

export default function PhotoApprove({mode = photoMode.APPROVE}){
    const rejectedIds = useAppSelector((state) => state.photo.rejectedIds)
    const [photoToView, setPhotoToView] = useState<Photo|null>(null);
    const {requestStatus, getImage} = useRandomPhoto();
    const dispatch = useAppDispatch();
    const getAndCheckImage = async ()=>{
        clearImage()
        const _photo = await getImage();
        if(_photo){
            setPhotoToView(_photo);
        }
    }
    const clearImage = ()=>{
        if(photoToView)
            setPhotoToView(null);
    }
    useEffect(()=>{
        if(photoToView){
            const isRejectedBefore = rejectedIds.hasOwnProperty(photoToView.id);
            if(isRejectedBefore){
                console.log("Photo Rejected")
                getAndCheckImage();
            }
        }
        //eslint-disable-next-line
    },[photoToView])
    const showAddPhoto = requestStatus !== REQUEST_STATUS.LOADING
        && photoToView === null;
    return (
        <ApproveBox>
            <Border />
            <PhotoBox>
                {
                    photoToView ? <ImgBig src={photoToView.urls.small}  alt={"Approved Images"}/>
                        : <>
                            {
                                showAddPhoto ?
                                    <AddButton id="addBtnPA" onClick={getAndCheckImage}/>:
                                    <div style={{fontSize: "2rem"}}>LOADING...</div>
                            }
                        </>
                }
            </PhotoBox>
            <Border />
            {
                photoToView &&  <ButtonBox>
                    <BtnSecondary onClick={()=>{
                        if(mode === photoMode.APPROVE){
                            dispatch(rejectPhoto(photoToView.id))
                        }else{
                            dispatch(removePhoto(photoToView.id))
                        }
                        getAndCheckImage()
                    }}>
                        <CancelIcon />
                    </BtnSecondary>
                    <BtnPrimary onClick={()=>{
                        const pToAdd = {...photoToView};
                        //If the image is approved, user presented with a new image. Change code below with commented one
                        clearImage(); //getAndCheckImage()
                        dispatch(approvePhoto(pToAdd))
                    }
                    }>
                        <ApproveIcon />
                    </BtnPrimary>
                </ButtonBox>
            }
            {
                showAddPhoto &&
                <FooterBox>
                    <AddText>Click on the <AddIcon wRem={0.75}/> in order to get image recommendations</AddText>
                </FooterBox>

            }

        </ApproveBox>
    )
}

