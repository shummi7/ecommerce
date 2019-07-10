import React from 'react';
import './Products.css';
import './Newproducts.css';
// import Saleproducts from './Saleproducts';


class Products extends React.Component{
createnewButton=(i)=>{
    var productData2=this.props.newProductData;
    return( 
        <div>
            <div className='newproducts_image'>
            <img src={`${productData2[i].productimg}`} alt='pic'  onClick={()=>this.props.onProductRouteChange(productData2[i].productcode)}></img>
            </div>
    
            <div className='newproducts_button'>
            <p>{productData2[i].productname}</p>
            <button onClick={()=>this.props.onAddToCart(productData2[i].productcode)}>ADD</button>
            {/* <button id={`${productData1[i].productcode}`} onClick={()=>this.buttonClick(productData1[i].productcode)}>ADD</button> */}
            </div>
    
            <p>$999.00</p>
        </div>)
}
newProductList=(product)=>{
    // console.log('func product',product)
    var nlist=[];
    for(var i=0;i<product.length;i++){
    nlist.push(
        <div className='newproducts_item' key={i}>
            {this.createnewButton(i)}
        </div>        
        )    
    }   
    return nlist; 
}


render(){
    var product=this.props.newProductData;
    // console.log('producy',product);

    if(product.length === 0){
        return(<div className='products'><h1>Loading</h1></div>)
    }
    else{
        return(
        <div className='products'>
        <div className='newproducts'>
            <h4>NEW PRODUCTS</h4>
            <div className='newproducts_list'>
            {this.newProductList(product)}
            </div>        
        </div>
        </div>
        )
    }

}
// render(){
// return(
// <div className='products'>
//     <Newproducts/>
//     {/* <Saleproducts/> */}
// </div>
// )
// }
}

export default Products;