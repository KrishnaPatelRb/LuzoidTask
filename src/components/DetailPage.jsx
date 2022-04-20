import React from "react"

export default function detailPage(props){
return(<>
<div>
       <div className="productHeader" >Product Detail</div>
       <div className="detail">
       <img src={props.detailPageData[0].bannerImage.url} height={300} width={300} alt="" />
       <div>Product Name - {props.detailPageData[0].name}</div>
       <div>Price - {props.detailPageData[0].price}</div>
       <div>Description - {props.detailPageData[0].description}</div>
       <div>Type - {props.detailPageData[0].bannerImage.type}</div>
       <div>Category - {props.detailPageData[0].subCategory.name}</div>
       <div>Contact - {props.detailPageData[0].phone}</div>
       </div>
       
</div>
</>)
}