import React from 'react';
import './Cart.css';

class Cart extends React.Component{
constructor(){
    super();
    this.state={
        cartArray:[],
        cartArrayNumber:[]
    }
}
loadCart=()=>{
    
    if(this.state.cartArray[0]===undefined){
    
   var cartDetailsArray=this.props.cartDetails.split(",");
   var cartArray=[];
   var cartArrayNumber=[];
   for(var j=0;j<cartDetailsArray.length-1;j++){
       var cartstring=cartDetailsArray[j].split(":")[0];
       var cartstringname=cartstring.replace(/[0-9]/g,'');
       var cartnumber=cartDetailsArray[j].split(":")[1];
       cartArrayNumber.push(cartnumber);

    
       fetch('http://localhost:3001/product',{
          method:'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
              productcode:cartstring,
              producttable:cartstringname
          })
       })
        .then(response=>response.json())
        .then(data=>{
            var arr=[];
            arr.push(data[0].productimg,data[0].productname,data[0].productcode)
            cartArray.push(arr);
        })

   }    
   setTimeout(() => {
    this.setState({cartArray:cartArray});
    this.setState({cartArrayNumber:cartArrayNumber});
  }, 400)
}   
}

onProductClick=(code)=>{
   this.props.onProductRouteChange(code);
}
onDelClick=(code,i,num)=>{

    var cartArray=this.state.cartArray;
    var cartArrayNumber=this.state.cartArrayNumber;

    if(cartArray.length === 1 && cartArray[0][2] === code){
        this.setState({cartArray:'zzz'});
        this.props.onAddToCart('');
    }
    else{
    if (i > -1) {
        cartArray.splice(i, 1);
        cartArrayNumber.splice(i, 1);
    }

    this.setState({cartArray:cartArray});
    this.setState({cartArrayNumber:cartArrayNumber});
    var delStr=code+':'+num+',';
    var newCart=this.props.cartDetails.replace(delStr,'');
    this.props.onAddToCart(newCart);
}
}

createCartList=(i)=>{
    return(
        <div className='cartlist' key={i}>
            <img src={`${this.state.cartArray[i][0]}`} alt='pic'></img>
            <p className='p1' onClick={()=>{this.onProductClick(this.state.cartArray[i][2])}}>{this.state.cartArray[i][1]}</p>
            <p className='p2'>{this.state.cartArrayNumber[i]}</p>
            <p className='p2'>$$$</p>
            <button onClick={()=>{this.onDelClick(this.state.cartArray[i][2],i,this.state.cartArrayNumber[i])}}>Del</button>
        </div>
    )
}
cartList=()=>{
    var clist=[];
    if(this.state.cartArray.length === 0 || this.state.cartArray === 'zzz'){
        return(
            <h4>Cart is empty</h4>
        )
    }
    else{
    for(var i=0;i<this.state.cartArray.length;i++){
    clist.push(
        <div className='cartlisthead' key={i}>
        {this.createCartList(i)}
        </div>
    )
    }   
    return clist; 
    }
}

onCheckingOut=()=>{
    alert("Thanks for Shopping");
}

render(){
return !this.props.cartDetails ?
    <div>
    
    <h1>No items in the Cart</h1> 
    </div>

    :
    (
    <div className='cart'>
    <h1>CART</h1>
    {this.loadCart()}
    {this.cartList()}
    <p>Total Cost <span> $$$ </span></p>
    <button onClick={this.onCheckingOut}>CheckOut</button>
    </div>
    );

}
}

export default Cart;