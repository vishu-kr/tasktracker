import { useForm } from 'react-hook-form'
import "./PopupForm.css";
import { useContext, useEffect } from 'react';
import { FormContext, useFormContext } from '../../../context/FormContext';

const PopupForm = ({ onClose }) => {
    const form = useForm()
    const { register, handleSubmit } = form;
    const submitFormRef = useFormContext();
    useEffect(() => {
        if (submitFormRef) {
            submitFormRef.current = handleSubmit(onSubmit)
        }
    }, [handleSubmit, submitFormRef]);

    const onSubmit = (data) => {
        alert("Form Submitted")
        onClose()
    }

    return <>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <input type="text" id="summary" {...register("summary")} />
            </div>
            <div className="form-group">
                <label htmlFor="tasktype">Task Type</label>
                <input type="text" id="tasktype" {...register("tasktype")} />
            </div>
            <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select id="priority" {...register("priority")}>
                    <option value="">Select One</option>
                    <option value="Low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select id="status" {...register("status")}>
                    <option value="">Select One</option>
                    <option value="open">Open</option>
                    <option value="inprogress">Inprogress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="startdt">Start Date</label>
                <input type="date" id="startdt" {...register("startdt")} />
            </div>
            <div className="form-group">
                <label htmlFor="enddt">End Date</label>
                <input type="date" id="enddt" {...register("enddt")} />
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea id="desc" rows="4" {...register("desc")}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="est">Estimate</label>
                <input type="number" id="est" {...register("est")} />
            </div>
        </form>
    </>
}
export default PopupForm