import PhotoApprove from "./photoApprove";
import {shallow} from "enzyme";
import {Provider} from "react-redux";
import {store} from "../../app/store";

const wrapper = ({children}: any) =>{
    return <Provider store={store}>{children}</Provider>
}
const view = shallow(wrapper(<PhotoApprove />))
describe('Photo Approve Component', function () {
    it("should render Add Photo Button in first state", function () {
        const addBtn = view.find("#addBtnPA");
        expect(addBtn).toBeDefined()
    })
})