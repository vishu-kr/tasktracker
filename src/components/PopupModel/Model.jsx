import Button from "../Button"
import "./Model.css"
import PopupForm from "./PopupForm/PopupForm"

const Model = ({ click }) => {
    return <>
        <div className="model">
            <div className="innerModel">
                <div className="modelHeader">
                    <p onClick={click}>X</p>
                </div>
                <hr style={{ border: '1px solid #333', margin: '0px' }} />
                <div className="modelBody">
                    <PopupForm />
                </div>
                <hr style={{ border: '1px solid #333', margin: '0px' }} />
                <div className="modelFooter">
                    <Button style={{ paddingRight: '5 px', padding: '5 px' }} textOnButton="Cancel" onclick={click} />
                    <Button textOnButton="Save" />
                </div>
            </div>
        </div>
    </>
}
export default Model