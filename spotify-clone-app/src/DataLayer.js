  
import React, { createContext, useContext, useReducer } from "react";

// Created a Context using The createContext() Function
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>

);

//Using or Actualizing the UseContext Function Created Above 
export const useDataLayerValue = () => useContext(DataLayerContext);