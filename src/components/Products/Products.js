import React from 'react';
import './Products.css';
import Newproducts from './Newproducts';
// import Saleproducts from './Saleproducts';


class Products extends React.Component{
render(){
return(
<div className='products'>
    <Newproducts/>
    {/* <Saleproducts/> */}
</div>
)
}
}

export default Products;