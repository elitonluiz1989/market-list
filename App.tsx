import React, { useState } from 'react';

import './src/locale';

import AppGlobalContext from './src/contexts/AppGlobalContext';

import Routes from './src/routes';
import IProduct from 'App/common/interfaces/IProduct';

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <AppGlobalContext.Provider value={{ products, setProducts }}>
      <Routes />
    </AppGlobalContext.Provider>
  );
}