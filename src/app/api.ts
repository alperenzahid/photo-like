import {createApi} from "unsplash-js";
import Photo from "./entities/Photo";

const api = createApi({
    accessKey: `${process.env.REACT_APP_UNSPLASH}` //'nSAJkcgtQrq5rvFXownMZ7_q6Ti2uEpVmbxB-LN_9xw',//Take from ENV Variables
});

export async function getRandomPhoto(): Promise<Photo|null> {
    //console.log("Retrieving...")
    const res: any = await api.photos.getRandom({ });
    if(res.type === "error"){
        if(res.status === 401)
            throw new Error("Check Access Key");
        throw new Error(res.errors)
    }
    //console.log("Retrieved Photo ID: ", photo.id);
    return res.response;
}
