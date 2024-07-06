import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter , Route,Routes } from 'react-router-dom'
import AddProduct from './components/content/products/AddProduct.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<div> Page content  </div>} />
        <Route path='add-product' element={<AddProduct />} />

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
