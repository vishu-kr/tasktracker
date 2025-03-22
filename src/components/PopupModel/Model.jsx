import "./Model.css"

const Model = ({ click }) => {
    return <>
        <div className="model">
            <div className="innerModel">
                <p onClick={click}>X</p>
            </div>
        </div>
    </>
}
export default Model