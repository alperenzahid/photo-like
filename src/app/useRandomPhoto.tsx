import {getRandomPhoto} from "./api";
import {useEffect, useState} from "react";

export enum REQUEST_STATUS {
    NOT_SET= "notSet",
    LOADING= "loading",
    SUCCESS= "success",
    FAILURE= "failure"
}
// class RequestBundle {
//     requestStatus: REQUEST_STATUS = REQUEST_STATUS.LOADING;
//     error: Error|null = null;
//     data: String|null = null;
// }

export default function useRandomPhoto(initialState = REQUEST_STATUS.NOT_SET){
    const [requestStatus, setRequestStatus] = useState<REQUEST_STATUS>();
    const getImage = async()=>{
        setRequestStatus(REQUEST_STATUS.LOADING);
        try {
            const _photo = await getRandomPhoto();
            setRequestStatus(REQUEST_STATUS.SUCCESS);
            return _photo;
        }catch (e){
            setRequestStatus(REQUEST_STATUS.FAILURE);
        }
    }
    useEffect(()=>{
        if(initialState === REQUEST_STATUS.LOADING){
            getImage()
        }
    }, [initialState])

    return {getImage,requestStatus};
}