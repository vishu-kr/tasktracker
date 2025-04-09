import Button from "../Button"
import "./Model.css"
import PopupForm from "./PopupForm/PopupForm"
import { useFormContext } from "../../context/FormContext"

const Model = ({ click }) => {
    const { submitFormRef, isPending } = useFormContext()
    const handleSave = () => {
        if (submitFormRef.current) {
            submitFormRef.current();
        }
    }
    return <>
        <div className="model">
            <div className="innerModel">
                <div className="modelHeader">
                    <p onClick={click}>X</p>
                </div>
                <hr style={{ border: '1px solid #333', margin: '0px' }} />
                <div className="modelBody">
                    <PopupForm onClose={click} />
                </div>
                <hr style={{ border: '1px solid #333', margin: '0px' }} />
                <div className="modelFooter">
                    <Button style={{ paddingRight: '5 px', padding: '5 px' }} textOnButton="Cancel" onclick={click} />
                    {!isPending && <Button textOnButton="Save" onclick={handleSave} />}
                    {isPending && <Button textOnButton="Adding Task.." />}
                </div>
            </div>
        </div>
    </>
}
export default Model