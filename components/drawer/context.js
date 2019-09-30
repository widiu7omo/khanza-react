import React from "react";
const drawerContext = React.createContext({})

export const drawerProvider = drawerContext.Provider;
export const drawerConsumer = drawerContext.Consumer;
export default drawerContext;
