import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Photo from "../../app/entities/Photo";

export interface PhotoState{
    photos: Photo[],
    rejectedIds: {[key:string]:boolean}
}

const PHOTO_STATE_KEY = "PHOTO_STATE";
export let initialState: PhotoState = {
    photos: [],
    rejectedIds: {}
}

const stateStr = localStorage.getItem(PHOTO_STATE_KEY)
if(stateStr){
    initialState = JSON.parse(stateStr);
}

const onStateUpdate = async(state:PhotoState)=>{
    localStorage.setItem(PHOTO_STATE_KEY,JSON.stringify(state));
}
const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        approvePhoto(state, action: PayloadAction<Photo>){
            const photo = action.payload;
            state.photos.push(photo);
            onStateUpdate(state)
        },
        removePhoto(state, action: PayloadAction<string>){
            const idToDelete = action.payload;
            const indexToDelete = state.photos.findIndex((p)=>p.id === idToDelete);
            if(indexToDelete !== -1){
                state.photos.splice(indexToDelete, 1);
                state.rejectedIds[idToDelete] = true;
            }
        },
        rejectPhoto(state, action: PayloadAction<string>){
            const idToDelete = action.payload;
            state.rejectedIds[idToDelete] = true;
            onStateUpdate(state)
            //console.log("REJECTED: ", JSON.stringify(state.rejectedIds))
        }
    }
})
export const {approvePhoto, removePhoto, rejectPhoto} = photoSlice.actions;
export default photoSlice.reducer;
