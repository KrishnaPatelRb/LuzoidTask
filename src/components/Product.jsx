import React from "react"
import { useNavigate } from "react-router-dom"
import addIcon from "../addIcon.png"

export default function Product(props){
    const toNavigate=useNavigate()
    return(
        <div className="productContainer" >
        {props.productArray.map((currentProduct)=>{
          return(<div  className="product" >
            <button onClick={()=>{
                props.setDetailPageData([currentProduct])
                toNavigate("detailPage")
        }} ><img src={currentProduct.bannerImage.url} height={"200px"} width={"200px"}/></button>
            <div className="productName" >{currentProduct.name}</div>
            <div className="productPrice" >Price-{currentProduct.price}</div>
            <div className="addIcon" >
             <button>
            <img onClick={()=>{
              props.setDisplayCounter(props.counterDisplay+1)
            }} src={addIcon} />
            </button>
            </div>
          </div>)
        })}
     </div>
    )
}