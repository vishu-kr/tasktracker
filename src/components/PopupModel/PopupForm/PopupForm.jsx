import "./PopupForm.css";
const PopupForm = () => {
    return <>
        <form className="form-container">
            <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <input type="text" name="summary" id="summary" />
            </div>
            <div className="form-group">
                <label htmlFor="tasktype">Task Type</label>
                <input type="text" name="tasktype" id="tasktype" />
            </div>
            <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select name="priority" id="priority">
                    <option value="">Select One</option>
                    <option value="Low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select name="status" id="status">
                    <option value="">Select One</option>
                    <option value="open">Open</option>
                    <option value="inprogress">Inprogress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="startdt">Start Date</label>
                <input type="date" name="startdt" id="startdt" />
            </div>
            <div className="form-group">
                <label htmlFor="enddt">End Date</label>
                <input type="date" name="enddt" id="enddt" />
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea id="desc" name="desc" rows="4"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="est">Estimate</label>
                <input type="number" name="est" id="est" />
            </div>
        </form>
    </>
}
export default PopupForm