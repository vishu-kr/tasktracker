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
        fetch('https://task-tracker-backend-yv45.onrender.com/tasks/add_task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(() => {
            alert('Task submitted successfully')
            onClose()
        })
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
                <label htmlFor="start_dt">Start Date</label>
                <input type="date" id="start_dt" {...register("start_dt")} />
            </div>
            <div className="form-group">
                <label htmlFor="due_date">End Date</label>
                <input type="date" id="due_date" {...register("due_date")} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" rows="4" {...register("description")}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="estimate">Estimate</label>
                <input type="number" id="estimate" {...register("estimate")} />
            </div>
        </form>
    </>
}
export default PopupForm