import React, {Component} from 'react';
import Header from './components/Header/Header';
import AboutUs from './components/Header/AboutUs';
import ContactUs from './components/Header/ContactUs';
import Cart from './components/Header/Cart';
import Category from './components/Category/Category';
import Signin from './components/SigninRegister/Signin';
import Register from './components/SigninRegister/Register';
import Collections from './components/Collections/Collections';
import Advertise from './components/Advertise/Advertise';
import Products from './components/Products/Products';
import Productdisp from './components/Productdisp/Productdisp';
import Todaydeal from './components/Todaydeal/Todaydeal';
import Featuredproducts from './components/Featuredproducts/Featuredproducts';
import Footer from './components/Footer/Footer';
import './reset.min.css'
import './App.css';


class App extends Component{
  constructor(){
  super();
  this.state={
    userData:{},
    headerSiginin:'Sign In',
    pageRoute:'signinPage',
    collectionPage:'',
    collectionData:[],
    productPage:'',
    productData:[],
    featuredProductData:[],
    addToCartString:'',
    addToCartObj:{},
    cartDetails:''
    }
  }

  onAddToCart=(product)=>{
    // console.log('product',product);
    // var p=product.replace(':','').replace(',','');
    var addToCartStr='';

    var addToCartObjRef={};
    var addToCartStringRef='';

    if(product===''){
      setTimeout(() => {
        addToCartObjRef={};
        addToCartStringRef='';
      }, 300);
      
    }
    
    else{    
      if(product.includes(':')){
      var newaddToCartObj={};
      addToCartStr=product;

      product=product.split(',');
      for(var i=0;i<product.length-1;i++){
        var prod=product[i].replace(',','').split(':');
        var prodname=prod[0];
        var prodnum=parseInt(prod[1],10); 
        newaddToCartObj[prodname]=prodnum;
      }
      addToCartObjRef=newaddToCartObj;

    }
    else{
    var addToCart1= Object.assign({}, this.state.addToCartObj);
    // console.log('addToCart1',addToCart1);
    
    if(addToCart1[product]===undefined){
      addToCart1[product]=1;
      // console.log('addToCart1 if',addToCart1);
    }
    else{
      addToCart1[product]+=1;
      // console.log('addToCart1 else',addToCart1);
    }
    for (var prop in addToCart1) {
      var str=prop+ ':'+addToCart1[prop]+',';
      addToCartStr+=str;
      // console.log('addToCartStr',addToCartStr);      
    }
    addToCartObjRef=addToCart1;
    // console.log('addToCartStr final',addToCartStr); 
    // console.log('addToCart1',addToCart1);   
  }
   addToCartStringRef=addToCartStr;
  
  }

    fetch('http://localhost:3001/cart',{
          method:'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
              id:this.state.userData.id,
              addtocart:addToCartStr
          })
      })
      .then(response=>response.json())
      .then(data=>{
        this.setState({addToCartString:addToCartStringRef});
        this.setState({addToCartObj:addToCartObjRef});

      })
  }

  onSignin=(data)=>{
    this.setState({userData:data});
  }
 
  onPageRouteChange=(page)=>{
    this.setState({pageRoute:page}); 
    if(page==='cartPage'){
      fetch('http://localhost:3001/userdetails',{
          method:'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
              id:this.state.userData.id
          })
      })
      .then(response=>response.json())
      .then(data=>{
          this.setState({cartDetails:data.cart});
      })
    }
  }

  
 onCollectionRouteChange=(collection)=>{
    this.setState({pageRoute:'collectionPage'})
    this.setState({collectionPage:collection});

    var collectionname=collection.toLowerCase();
    fetch('http://localhost:3001/collection',{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            collection:collectionname
        })
    })
    .then(response=>response.json())
    .then(data=>{
        var data1 = JSON.parse(JSON.stringify(data))
        this.setState({collectionData:data1});
    })
  } 

  onSearchRouteChange=(info)=>{
    this.setState({pageRoute:'collectionPage'});
    this.setState({collectionPage:'Search Results'});
    var search=info;
    var searchData=[];
    for(var i=0;i<search.length;i++){

    var productname=search[i].replace(/[0-9]/g,'');
    fetch('http://localhost:3001/product',{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            producttable:productname,
            productcode:search[i]
        })
    })
    .then(response=>response.json())
    .then(data=>{
      searchData.push(data[0]);
      
    })    
    }
    setTimeout(() => {
      this.setState({collectionData:searchData});
    }, 100)
    }

  onProductRouteChange=(product)=>{
    this.setState({productData:product});
    this.setState({pageRoute:'productPage'})

    var productname=product.replace(/[0-9]/g,'');
    fetch('http://localhost:3001/product',{
        method:'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            producttable:productname,
            productcode:product
        })
    })
    .then(response=>response.json())
    .then(data=>{
        var data2 = JSON.parse(JSON.stringify(data))
        this.setState({productData:data2});
    })
  }

  componentDidMount(){
    var featuredproductArray=['dress','headphones','cameras','phones','watches','laptops'];
    var featuredproduct=[];
   
    for(var i=0;i<5;i++){
      var featuredproductTable= featuredproductArray[Math.floor(Math.random() * featuredproductArray.length)];
      fetch('http://localhost:3001/featuredproduct',{
          method:'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
              table:featuredproductTable
          })
      })
      .then(response=>response.json())
      .then(data=>{
          var data3 = JSON.parse(JSON.stringify(data));        
          featuredproduct.push(data3);        
      })
    }

    setTimeout(() => {
      this.setState({featuredProductData: featuredproduct});
    }, 1000);
  }

render(){

return(
<div>
<Header
 onPageRouteChange={this.onPageRouteChange} 
 onSearchRouteChange={this.onSearchRouteChange}
/>
<div className='main'>

    <div className='main_left'>
      <Category onCollectionRouteChange={this.onCollectionRouteChange}/>
    </div>    

    <div className='main_right'>
    {(()=>{

      switch(this.state.pageRoute){
        case 'signinPage':return(          
                        <div>          
                          <Signin
                          onPageRouteChange={this.onPageRouteChange}
                          onheaderSigninRouteChange={this.onheaderSigninRouteChange}
                          onSignin={this.onSignin}
                          /> 
                        </div>)
        case 'registerPage':return(          
                        <div>          
                          <Register
                          onPageRouteChange={this.onPageRouteChange}
                          onheaderSigninRouteChange={this.onheaderSigninRouteChange}
                          /> 
                        </div>)
        case 'mainPage':return(          
                        <div>          
                          <Advertise
                          onCollectionRouteChange={this.onCollectionRouteChange}
                          />
                          <Products/>
                          <Todaydeal
                          onCollectionRouteChange={this.onCollectionRouteChange}
                          />
                          <Featuredproducts
                          featuredProductData={this.state.featuredProductData}
                          onFeaturedProductRouteChange={this.onProductRouteChange}
                          onAddToCart={this.onAddToCart}
                          /> 
                        </div>)
        case 'aboutPage':return(          
                        <div>          
                          <AboutUs/> 
                        </div>)  
        case 'contactPage':return(          
                        <div>          
                          <ContactUs/> 
                        </div>) 
        case 'cartPage':return(          
                        <div>          
                          <Cart 
                          cartDetails={this.state.cartDetails}
                          onProductRouteChange={this.onProductRouteChange}
                          userId={this.state.userData.id}
                          onAddToCart={this.onAddToCart}
                          />
                        </div>) 
        case 'collectionPage':return(
                        <div>
                          <Collections 
                          collectionPage={this.state.collectionPage}
                          collectionData={this.state.collectionData}
                          onProductRouteChange={this.onProductRouteChange}
                          onAddToCart={this.onAddToCart}
                          />
                        </div>)    
      case 'productPage':return(
                        <div>
                          <Productdisp
                          productData={this.state.productData}     
                          onAddToCart={this.onAddToCart}                     
                          />
                        </div>)               

        default:return(<div><h4>loading</h4></div>)                            
      }
    })()}
           
    </div>

</div>
<Footer
  onPageRouteChange={this.onPageRouteChange}
  onCollectionRouteChange={this.onCollectionRouteChange}
/>
</div>
)
}
}
export default App;
























// render(){

//   return(
//   <div>
//   <Header/>
//   <div className='main'>
  
//       <div className='main_left'>
//         <Category onCollectionRouteChange={this.onCollectionRouteChange}/>
//       </div>    
  
//       <div className='main_right'>
//       {(()=>{
  
//         switch(this.state.pageRoute){
  
//           case 'mainPage':return(          
//                           <div>          
//                             <Advertise/>
//                             <Products/>
//                             <Todaydeal/>
//                             {this.state.featuredProductData.length !== 0? 
//                             <Featuredproducts
//                             featuredProductData={this.state.featuredProductData}
//                             /> 
//                             : 
//                             <h3>Loading...</h3>
//                             }
//                           </div>)
//           case 'collectionPage':return(
//                           <div>
//                             <Collections 
//                             collectionPage={this.state.collectionPage}
//                             collectionData={this.state.collectionData}
//                             onProductRouteChange={this.onProductRouteChange}
//                             />
//                           </div>)    
//         case 'productPage':return(
//                           <div>
//                             <Productdisp
//                             productData={this.state.productData}                          
//                             />
//                           </div>)               
  
//           default:return(<div><h4>loading</h4></div>)                            
//         }
//       })()}
             
//       </div>
  
//   </div>
//   <Footer/>
//   </div>
//   )
//   }
//   }
//   export default App;
  

  // compenentWillMount(){
  
  // var featuredproductArray=['dress','headphones'];
  // var featuredproduct=[]
 
  // for(var i=0;i<5;i++){
  //   var featuredproductTable= featuredproductArray[Math.floor(Math.random() * featuredproductArray.length)];
  //   fetch('http://localhost:3001/featuredproduct',{
  //       method:'post',
  //       headers: {'Content-Type':'application/json'},
  //       body: JSON.stringify({
  //           table:featuredproductTable
  //       })
  //   })
  //   .then(response=>response.json())
  //   .then(data=>{
  //       var data3 = JSON.parse(JSON.stringify(data));        
  //       featuredproduct.push(data3);        
  //   })
  // }
      //without the setTimeOut 1.featured product data lenght is zero fand 2.render 3. featured product data lenght is five and render not occur
    //with setTimeOut 1.featured product data lenght is zero fand 2.render 3. featured product data lenght is five and render occur with updated state value
    //componentwillMount +setTimeOut is ggod in case of forlooped fetch;
    
    // this.setState({featuredProductData: featuredproduct});
  // }