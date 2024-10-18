import React, {createContext, useEffect, useState} from 'react';
//data//
import {roomData} from '../data'
//create context//
export const RoomContext = createContext();

const RouterProvider = ({children}) => {
  console.log(roomData)
  return (
    <RoomContext.Provider value={'room context'}>
      {children}
    </RoomContext.Provider>
  )
};

export default RouterProvider;
