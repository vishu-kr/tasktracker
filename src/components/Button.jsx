import { useState } from "react"
import Model from "./PopupModel/Model"

const Button = ({ textOnButton }) => {
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const buttonStyle = {
        backgroundColor: 'rgb(3, 148, 252)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }

    const toggleModel = () => {
        setModelIsOpen(!modelIsOpen)
    }

    return <>
        <button style={buttonStyle} onClick={toggleModel}>{textOnButton}</button>
        {
            modelIsOpen && <Model click={toggleModel} />
        }
    </>

}
export default Button