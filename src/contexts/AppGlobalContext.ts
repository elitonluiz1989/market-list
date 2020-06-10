import React from 'react';
import IAppGlobalContext from 'App/common/interfaces/IAppGlobalContext';

const AppGlobalContext = React.createContext<IAppGlobalContext | undefined>(undefined);

export default AppGlobalContext;