import { createContext, useState } from "react"

export const LabelsToggleContext = createContext()

export function LabelsToggleProvider({ children }) {
  const [labelsExpand, setLabelsExpand] = useState(true)

  return (
    <LabelsToggleContext.Provider value={{ labelsExpand, setLabelsExpand }}>
      {children}
    </LabelsToggleContext.Provider>
  )
}
