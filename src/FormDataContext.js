import React, { createContext, useState, useContext } from 'react';

// Create a Context
const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
