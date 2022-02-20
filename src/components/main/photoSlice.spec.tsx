import photoReducer, {initialState} from "./photoSlice";

describe("PhotoSlice Reducer", function (){
    test("should return default state when state is not defined", function (){
        const res = photoReducer(undefined,{type:"noID"})
        expect(res).toEqual(initialState);
    })
})