import { createContext, useContext, useRef } from "react";

export const FormContext = createContext()

export const useFormContext = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
    const submitFormRef = useRef(null)
    return (
        <FormContext.Provider value={submitFormRef}>
            {children}
        </FormContext.Provider>
    )
}