import React, { useEffect, useState } from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import DetailPage from "./components/DetailPage";
import "./index.css"

function App() {
const [fetchStart ,setFetch]=useState("initial")
const [productArray,setProductArray]=useState([])
const [detailPageData,setDetailPageData]=useState([])
const [counterDisplay,setDisplayCounter]=useState(0)

useEffect(()=>{
  fetch(`http://api.products.luezoid.com/products?page=1`,
  { method: 'GET',
    headers: {
      "Authorization": "Bearer ULxG9gG98KDGPql/BFI/woCN9T8="
    },
 }).then((res)=>{
   return res.json();
}).then((res)=>{
  setProductArray(res.data.items)
})

},[fetchStart])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <>
        <Header counterDisplay={counterDisplay} />
        <Product counterDisplay={counterDisplay} setDisplayCounter={setDisplayCounter} setDetailPageData={setDetailPageData} productArray={productArray} />
        <Footer/>
        </>
      }/>
      <Route path="/detailPage"  element={<DetailPage detailPageData={detailPageData} />}/>
    </Routes>
     
     </BrowserRouter>
  );
}

export default App;
