import React, {createContext, useEffect, useState} from 'react';
//data//
import {roomData} from '../data'
//create context//
export const RoomContext = createContext();

const RouterProvider = ({children}) => {
  const [rooms, setRomms] = useState(roomData)
  console.log(rooms)
  return (
    <RoomContext.Provider value={{rooms}}>
      {children}
    </RoomContext.Provider>
  )
};

export default RouterProvider;
