import React, { useState } from 'react';

export const CohereResponseContext = React.createContext();

function CohereResponseContextProvider({ children }) {
  const [newCohereResponse, setNewCohereResponse] = useState({});

  return (
    <CohereResponseContext.Provider value={{newCohereResponse, setNewCohereResponse}}>
      {children}
    </CohereResponseContext.Provider>
  )
}

export default CohereResponseContextProvider