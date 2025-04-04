import Dashboard from "./components/Dashboard/Dashboard"
import { FormProvider } from "./context/FormContext"

function App() {

  return (
    <>
      <FormProvider>
        <Dashboard />
      </FormProvider>
    </>
  )
}

export default App
