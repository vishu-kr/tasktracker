import { useState } from "react"
import Button from "../Button"
import Model from "../PopupModel/Model"

const Dashboard = () => {
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const toggleModel = () => {
        setModelIsOpen(!modelIsOpen)
    }

    return <>
        <h1>Tasks Tracker</h1>
        <div>
            <Button textOnButton="Create Task" onclick={toggleModel} />
            {
                modelIsOpen && <Model click={toggleModel} />
            }
        </div>
    </>
}

export default Dashboard