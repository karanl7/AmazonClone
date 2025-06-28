import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage, NavBar, ProductPage, SearchResults, Checkout } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route  path="/product/:id" element={<ProductPage/>} />
        <Route  path="/search" element={<SearchResults/>} />
        <Route  path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;