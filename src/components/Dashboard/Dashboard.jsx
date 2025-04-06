import { useState } from "react"
import Button from "../Button"
import Model from "../PopupModel/Model"
import Navbar from "./Navbar"
import Hero from "./Hero"

const Dashboard = () => {
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const toggleModel = () => {
        setModelIsOpen(!modelIsOpen)
    }

    return <>
        <Navbar />
        <Hero />
        <nav>
            <div>
                <Button textOnButton="Create Task" onclick={toggleModel} />
                {
                    modelIsOpen && <Model click={toggleModel} />
                }
            </div>
        </nav>
    </>
}

export default Dashboard