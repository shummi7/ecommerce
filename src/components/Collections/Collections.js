import React from 'react';
import './Collections.css';

class Collections extends React.Component{

createButton=(i)=>{
    var productData1=this.props.collectionData;
    return( 
        <div>
            <div className='collection_image'>
            <img src={`${productData1[i].productimg}`} alt='pic'  onClick={()=>this.props.onProductRouteChange(productData1[i].productcode)}></img>
            </div>

            <div className='collection_button'>
            <p>{productData1[i].productname}</p>
            <button onClick={()=>this.props.onAddToCart(productData1[i].productcode)}>ADD</button>
            {/* <button id={`${productData1[i].productcode}`} onClick={()=>this.buttonClick(productData1[i].productcode)}>ADD</button> */}
            </div>

            <p>$999.00</p>
        </div>)
}
productList=()=>{
    var productData=[];
    productData=this.props.collectionData;
    // console.log('pdata',productData);
    var list=[];
    for(var i=0;i<productData.length;i++){
    list.push(
        <div className='collection_item' key={i}>
            {this.createButton(i)}
        </div>        
        )    
    }   
    return list; 
}
    

render(){
    // console.log('render',this.props.collectionData,this.props.collectionPage);
    if(this.props.collectionData.length === 0){
        return(<div><h1>Loading</h1></div>)
    }
    else{
        return(
            <div className='collection'>
                <h4>{this.props.collectionPage}</h4>
                <div className='collection_list'>
                {this.productList()}
                </div> 
            </div>
        )
    }
}
}

export default Collections;
















//in the case below  button inside for loop will not be able to get the index value.so whatever button click the button will console.log the value of last value of i that is 5 in here.

//to avoid the situtaion call back function inside the forloop in used so that first button will console logg 1 and seventh button console.log seven












// class Collections extends React.Component{
//     buttonClick=(a)=>{
//         console.log('a',a);
//     }
//     productList=()=>{
//         var productData=[];
//         productData=this.props.collectionData;
//         console.log('pdata',productData);
//         var list=[];
    
    
//         for(var i=0;i<productData.length;i++){
//             // var productdetail=productData[i];
//         list.push(
//         <div className='collection_item' key={i}>
//             <div className='collection_image'>
//                 <img src={`${productData[i].productimg}`} alt='pic'></img>
//             </div>
//             <div className='collection_button'>
//                 <p>{productData[i].productname}</p>
//                 <button id={`${productData[i].productcode}`} onClick={()=>this.buttonClick(this)}>ADD</button>
//                 {/* <button id={`${productData[i].productcode}`} onClick={()=>this.props.onProductRouteChange(this.id)}>ADD</button> */}
//             </div>
//             <p>$999.00</p>
//         </div>);
//         }
//         return list;
//     }
    
//     render(){
//         // console.log('render',this.props.collectionData,this.props.collectionPage);
//         if(this.props.collectionData.length === 0){
//             return(<div><h1>Loading</h1></div>)
//         }
//         else{
//             return(
//                 <div className='collection'>
//                     <h4>{this.props.collectionPage}</h4>
//                     <div className='collection_list'>
//                     {this.productList()}
//                     </div> 
//                 </div>
//             )
//         }
//     }
//     }
    
//     export default Collections;
    