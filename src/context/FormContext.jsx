import { createContext, useContext, useRef, useState } from "react";

export const FormContext = createContext()

export const useFormContext = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
    const submitFormRef = useRef(null)
    const [isPending, setIsPending] = useState(false)
    const toggleSaveButton = () => setIsPending(prev => !prev)
    return (
        <FormContext.Provider value={{ submitFormRef, isPending, toggleSaveButton }}>
            {children}
        </FormContext.Provider>
    )
}