import React from 'react';
import './Newproducts.css';

class Newproducts extends React.Component{


newProductList=()=>{
    var list=[];
    for(var i=0;i<4;i++){
    list.push(
    <div className='newproducts_item' key={i}>
        <div className='newproducts_image'>
            <img src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt='pic'></img>
        </div>
        <div className='newproducts_button'>
            <p>Product {i}</p>
            <button>ADD</button>
        </div>
        <p>$999.00</p>
    </div>);
    }
    return list;
}

render(){
return(
<div className='newproducts'>
    <h4>NEW PRODUCTS</h4>
    <div className='newproducts_list'>
    {this.newProductList()}
    </div>        
</div>
)
}
}

export default Newproducts;