(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=(a(16),a(1)),c=a(2),u=a(4),s=a(3),m=a(5),p=(a(17),a(18),a(19),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).inputChange=function(t){e.setState({word:t.target.value.toLowerCase()})},e.onbuttonclick=function(){fetch("https://stark-crag-71277.herokuapp.com/search",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:e.state.word})}).then(function(e){return e.json()}).then(function(t){e.props.onSearchRouteChange(t)})},e.state={word:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"header_middle"},r.a.createElement("div",{className:"logo"},"LOGO"),r.a.createElement("div",{className:"header_middle_panel"},r.a.createElement("div",{className:"header_middle_search"},r.a.createElement("input",{type:"text",placeholder:"Enter your search",onChange:this.inputChange}),r.a.createElement("button",{onClick:this.onbuttonclick},"GO")),r.a.createElement("p",{className:"header_middle_call"},r.a.createElement("span",null,"CALL US")," ",r.a.createElement("span",null,"xxxx-xxx-xxx")),r.a.createElement("p",{className:"header_middle_signin",onClick:function(){e.props.onPageRouteChange("signinPage")}},"Signin"))),r.a.createElement("div",{className:"header_bottom"},r.a.createElement("div",{className:"header_bottom_panel_1"},r.a.createElement("p",{onClick:function(){e.props.onPageRouteChange("mainPage")}},"HOME"),r.a.createElement("p",{onClick:function(){e.props.onPageRouteChange("aboutPage")}},"ABOUT US"),r.a.createElement("p",{onClick:function(){e.props.onPageRouteChange("contactPage")}},"CONTACT US")),r.a.createElement("div",{className:"header_bottom_panel_2"},r.a.createElement("p",{onClick:function(){e.props.onPageRouteChange("cartPage")}},"MY CART"))))}}]),t}(r.a.Component)),d=(a(7),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about_us"},r.a.createElement("h2",null,"ABOUT US"),r.a.createElement("div",{className:"about_us_text"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis tellus purus, at eleifend metus pharetra id. Maecenas vel velit sit amet nisl malesuada maximus. Mauris lacus lacus, vestibulum nec auctor non, laoreet vel quam. Nunc molestie, ligula in euismod sollicitudin, dolor ipsum rhoncus mi, ut placerat mauris urna non ante. Cras neque nulla, scelerisque a mauris sit amet, semper congue diam. Nam eleifend sem et hendrerit vestibulum. Cras ante erat, sodales nec nisl quis, maximus lobortis magna. Nulla id metus sodales, congue tellus ut, sodales sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam non cursus augue, a elementum elit. Aenean tempor sapien a nisi lobortis, vel malesuada dolor dictum."),r.a.createElement("br",null),r.a.createElement("p",null,"Praesent nisl leo, interdum in dolor in, tincidunt volutpat augue. Aliquam ultrices, augue sed vestibulum vehicula, metus lacus viverra arcu, sed accumsan mi libero a ante. Mauris dignissim accumsan convallis. Fusce fermentum lorem ac lectus lacinia, vel ultricies orci congue. Morbi at eros egestas massa rhoncus pulvinar vitae maximus mauris. Donec nec scelerisque mauris. Praesent vulputate neque ac turpis pretium, ac congue odio dignissim."),r.a.createElement("br",null),r.a.createElement("p",null,"Aliquam vel sapien sed purus scelerisque eleifend. Aliquam tincidunt aliquam viverra. Nulla aliquet eget tellus lacinia luctus. Mauris commodo nisl nec efficitur ultrices. Mauris egestas risus et metus egestas sollicitudin. Ut id metus ante. Proin vitae nisi tincidunt arcu efficitur ullamcorper. Maecenas tempor orci ac diam scelerisque, vitae posuere sem tempus. Donec id tellus ut lectus rhoncus commodo. Aenean at dignissim orci."),r.a.createElement("br",null),r.a.createElement("p",null,"Praesent eu sem efficitur odio cursus rhoncus. Etiam viverra mi et velit posuere blandit. Donec ac ligula laoreet, blandit metus at, facilisis ex. Pellentesque ac lorem enim. Suspendisse eget nisl ligula. Aliquam cursus ipsum sit amet nunc efficitur, in auctor nibh dignissim. Donec vitae leo turpis. Integer eget sapien eget erat tincidunt ornare. Etiam condimentum sit amet diam quis pretium. Integer in auctor ante, et congue magna. Nam quis neque auctor, tincidunt felis in, molestie justo. Ut vulputate et eros dictum rutrum."),r.a.createElement("br",null),r.a.createElement("p",null,"Maecenas non lorem pretium, finibus ipsum at, tempus eros. Fusce consequat orci ut felis pharetra interdum. Fusce sed neque a risus lobortis interdum. Donec nec tortor et neque rhoncus lacinia in eu arcu. Fusce ac aliquet enim. Sed tempor ornare ipsum, ac convallis urna tempus et. Donec dignissim rhoncus molestie. Praesent vitae malesuada libero. Nam semper ex quis lectus ultricies porttitor. Mauris id placerat orci. Mauris accumsan nisi purus, et scelerisque nulla tincidunt eu. Ut quis tellus sed neque iaculis auctor vitae et neque.")))}}]),t}(r.a.Component)),h=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact_us"},r.a.createElement("div",{className:"contact_us_left"},r.a.createElement("h3",null,"FREQUENTLY ASKED QUESTIONS"),r.a.createElement("p",null,"1.Lorem ipsum dolor sit amet, consectetur adipiscing elit."),r.a.createElement("p",null,"Aliquam sagittis tellus purus, at eleifend metus pharetra id. Maecenas vel velit sit amet nisl malesuada maximus. Mauris lacus lacus, vestibulum nec auctor non, laoreet vel quam. Nunc molestie, ligula in euismod sollicitudin, dolor ipsum rhoncus mi, ut placerat mauris urna non ante. Cras neque nulla, scelerisque a mauris sit amet, semper congue diam. Nam eleifend sem et hendrerit vestibulum. Cras ante erat, sodales nec nisl quis, maximus lobortis magna. Nulla id metus sodales, congue tellus ut, sodales sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam non cursus augue, a elementum elit. Aenean tempor sapien a nisi lobortis, vel malesuada dolor dictum."),r.a.createElement("p",null,"2.Praesent nisl leo, interdum in dolor in, tincidunt volutpat augue."),r.a.createElement("p",null," Aliquam ultrices, augue sed vestibulum vehicula, metus lacus viverra arcu, sed accumsan mi libero a ante. Mauris dignissim accumsan convallis. Fusce fermentum lorem ac lectus lacinia, vel ultricies orci congue. Morbi at eros egestas massa rhoncus pulvinar vitae maximus mauris. Donec nec scelerisque mauris. Praesent vulputate neque ac turpis pretium, ac congue odio dignissim."),r.a.createElement("p",null,"3.Aliquam vel sapien sed purus scelerisque eleifend."),r.a.createElement("p",null," Aliquam tincidunt aliquam viverra. Nulla aliquet eget tellus lacinia luctus. Mauris commodo nisl nec efficitur ultrices. Mauris egestas risus et metus egestas sollicitudin. Ut id metus ante. Proin vitae nisi tincidunt arcu efficitur ullamcorper. Maecenas tempor orci ac diam scelerisque, vitae posuere sem tempus. Donec id tellus ut lectus rhoncus commodo. Aenean at dignissim orci."),r.a.createElement("p",null,"4.Praesent eu sem efficitur odio cursus rhoncus."),r.a.createElement("p",null," Etiam viverra mi et velit posuere blandit. Donec ac ligula laoreet, blandit metus at, facilisis ex. Pellentesque ac lorem enim. Suspendisse eget nisl ligula. Aliquam cursus ipsum sit amet nunc efficitur, in auctor nibh dignissim. Donec vitae leo turpis. Integer eget sapien eget erat tincidunt ornare. Etiam condimentum sit amet diam quis pretium. Integer in auctor ante, et congue magna. Nam quis neque auctor, tincidunt felis in, molestie justo. Ut vulputate et eros dictum rutrum."),r.a.createElement("p",null,"5.Maecenas non lorem pretium, finibus ipsum at, tempus eros."),r.a.createElement("p",null," Fusce consequat orci ut felis pharetra interdum. Fusce sed neque a risus lobortis interdum. Donec nec tortor et neque rhoncus lacinia in eu arcu. Fusce ac aliquet enim. Sed tempor ornare ipsum, ac convallis urna tempus et. Donec dignissim rhoncus molestie. Praesent vitae malesuada libero. Nam semper ex quis lectus ultricies porttitor. Mauris id placerat orci. Mauris accumsan nisi purus, et scelerisque nulla tincidunt eu. Ut quis tellus sed neque iaculis auctor vitae et neque.")),r.a.createElement("div",{className:"contact_us_right"},r.a.createElement("h4",null,"CONTACT US"),r.a.createElement("p",null,"Maecenas non lorem pretium"),r.a.createElement("p",null,"Finibus ipsum at, tempus eros"),r.a.createElement("p",null,"Donec nec tortor et"),r.a.createElement("h4",null,"CUSTOMER SERVICE HOURS"),r.a.createElement("p",null,"Sed tempor ornare ipsum"),r.a.createElement("p",null,"Mauris id placerat orci"),r.a.createElement("p",null,"Integer in auctor ante"),r.a.createElement("h4",null,"MAILING ADDRESS"),r.a.createElement("p",null,"Aliquam cursus ipsum sit"),r.a.createElement("p",null,"Mauris commodo nisl nec"),r.a.createElement("p",null,"Fusce fermentum lorem ac")))}}]),t}(r.a.Component),g=(a(20),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).loadCart=function(){if(void 0===e.state.cartArray[0]){for(var t=e.props.cartDetails.split(","),a=[],n=[],r=0;r<t.length-1;r++){var i=t[r].split(":")[0],o=i.replace(/[0-9]/g,""),l=t[r].split(":")[1];n.push(l),fetch("https://stark-crag-71277.herokuapp.com/product",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productcode:i,producttable:o})}).then(function(e){return e.json()}).then(function(e){var t=[];t.push(e[0].productimg,e[0].productname,e[0].productcode),a.push(t)})}setTimeout(function(){e.setState({cartArray:a}),e.setState({cartArrayNumber:n})},400)}},e.onProductClick=function(t){e.props.onProductRouteChange(t)},e.onDelClick=function(t,a,n){var r=e.state.cartArray,i=e.state.cartArrayNumber;if(1===r.length&&r[0][2]===t)e.setState({cartArray:"zzz"}),e.props.onAddToCart("");else{a>-1&&(r.splice(a,1),i.splice(a,1)),e.setState({cartArray:r}),e.setState({cartArrayNumber:i});var o=t+":"+n+",",l=e.props.cartDetails.replace(o,"");e.props.onAddToCart(l)}},e.createCartList=function(t){return r.a.createElement("div",{className:"cartlist",key:t},r.a.createElement("img",{src:"".concat(e.state.cartArray[t][0]),alt:"pic"}),r.a.createElement("p",{className:"p1",onClick:function(){e.onProductClick(e.state.cartArray[t][2])}},e.state.cartArray[t][1]),r.a.createElement("p",{className:"p2"},e.state.cartArrayNumber[t]),r.a.createElement("p",{className:"p2"},"$$$"),r.a.createElement("button",{onClick:function(){e.onDelClick(e.state.cartArray[t][2],t,e.state.cartArrayNumber[t])}},"Del"))},e.cartList=function(){var t=[];if(0===e.state.cartArray.length||"zzz"===e.state.cartArray)return r.a.createElement("h4",null,"Cart is empty");for(var a=0;a<e.state.cartArray.length;a++)t.push(r.a.createElement("div",{className:"cartlisthead",key:a},e.createCartList(a)));return t},e.onCheckingOut=function(){alert("Thanks for Shopping")},e.state={cartArray:[],cartArrayNumber:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.cartDetails?r.a.createElement("div",{className:"cart"},r.a.createElement("h1",null,"CART"),this.loadCart(),this.cartList(),r.a.createElement("p",null,"Total Cost ",r.a.createElement("span",null," $$$ ")),r.a.createElement("button",{onClick:this.onCheckingOut},"CheckOut")):r.a.createElement("div",null,r.a.createElement("h1",null,"No items in the Cart"))}}]),t}(r.a.Component)),f=(a(21),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={categoryRoute:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category"},r.a.createElement("div",{className:"category_collections"},r.a.createElement("h3",null,"Collections"),r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return e.props.onCollectionRouteChange("Dress")}},"Dress"),r.a.createElement("p",{onClick:function(){return e.props.onCollectionRouteChange("Phones")}},"Mobiles"),r.a.createElement("p",{onClick:function(){return e.props.onCollectionRouteChange("Laptops")}},"Laptops"),r.a.createElement("p",{onClick:function(){return e.props.onCollectionRouteChange("HeadPhones")}},"HeadPhones"),r.a.createElement("p",{onClick:function(){return e.props.onCollectionRouteChange("Cameras")}},"Camera"),r.a.createElement("p",{onClick:function(){return e.props.onCollectionRouteChange("Watches")}},"Watches"))))}}]),t}(r.a.Component)),E=(a(8),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).emailInputChange=function(t){e.setState({email:t.target.value})},e.passwordInputChange=function(t){e.setState({password:t.target.value})},e.onSigninClick=function(){fetch("https://stark-crag-71277.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})}).then(function(e){return e.json()}).then(function(t){t.id?(e.props.onPageRouteChange("mainPage"),e.props.onSignin(t)):console.log("wrng")})},e.hi=function(){console.log("Sign-in")},e.state={email:"",password:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signin"},r.a.createElement("main",null,r.a.createElement("form",null,r.a.createElement("div",{className:"titlecontainer"},r.a.createElement("h2",null,"Sign In")),r.a.createElement("div",{className:"container"},r.a.createElement("label",null,r.a.createElement("b",null,"Email")),r.a.createElement("input",{type:"text",placeholder:"Enter Email",name:"email",required:!0,onChange:this.emailInputChange}),r.a.createElement("label",null,r.a.createElement("b",null,"Password")),r.a.createElement("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0,onChange:this.passwordInputChange}),r.a.createElement("input",{className:"sbutton",onClick:this.onSigninClick,onChange:this.hi,value:"SIGN IN"}),r.a.createElement("p",{onClick:function(){return e.props.onPageRouteChange("registerPage")}},"REGISTER")))))}}]),t}(r.a.Component)),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).nameInputChange=function(t){e.setState({name:t.target.value})},e.emailInputChange=function(t){e.setState({email:t.target.value})},e.passwordInputChange=function(t){e.setState({password:t.target.value})},e.onRegisterClick=function(){fetch("https://stark-crag-71277.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,email:e.state.email,password:e.state.password})}).then(function(e){return e.json()}).then(function(t){t.id&&e.props.onPageRouteChange("mainPage")})},e.hi=function(){console.log("Register")},e.state={name:"",email:"",password:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Register"},r.a.createElement("main",null,r.a.createElement("form",null,r.a.createElement("div",{className:"titlecontainer"},r.a.createElement("h2",null,"Register")),r.a.createElement("div",{className:"container"},r.a.createElement("label",null,r.a.createElement("b",null,"Name")),r.a.createElement("input",{type:"text",placeholder:"Enter Name",name:"name",required:!0,onChange:this.nameInputChange}),r.a.createElement("label",null,r.a.createElement("b",null,"Email")),r.a.createElement("input",{type:"text",placeholder:"Enter Email",name:"email",required:!0,onChange:this.emailInputChange}),r.a.createElement("label",null,r.a.createElement("b",null,"Password")),r.a.createElement("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0,onChange:this.passwordInputChange}),r.a.createElement("input",{className:"sbutton",onClick:this.onRegisterClick,onChange:this.hi,value:"Register"}),r.a.createElement("p",{onClick:function(){return e.props.onPageRouteChange("signinPage")}},"Sign In")))))}}]),t}(r.a.Component),C=(a(22),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).createButton=function(e){var t=a.props.collectionData;return r.a.createElement("div",null,r.a.createElement("div",{className:"collection_image"},r.a.createElement("img",{src:"".concat(t[e].productimg),alt:"pic",onClick:function(){return a.props.onProductRouteChange(t[e].productcode)}})),r.a.createElement("div",{className:"collection_button"},r.a.createElement("p",null,t[e].productname),r.a.createElement("button",{onClick:function(){return a.props.onAddToCart(t[e].productcode)}},"ADD")),r.a.createElement("p",null,"$999.00"))},a.productList=function(){var e;e=a.props.collectionData;for(var t=[],n=0;n<e.length;n++)t.push(r.a.createElement("div",{className:"collection_item",key:n},a.createButton(n)));return t},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return 0===this.props.collectionData.length?r.a.createElement("div",null,r.a.createElement("h1",null,"Loading")):r.a.createElement("div",{className:"collection"},r.a.createElement("h4",null,this.props.collectionPage),r.a.createElement("div",{className:"collection_list"},this.productList()))}}]),t}(r.a.Component)),b=(a(23),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"advertise"},r.a.createElement("div",{className:"ad_1"},r.a.createElement("p",null,"BEST THEME"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna mi. Aenean mattis, est eget mattis ultricies, erat nisl iaculis sem, non hendrerit felis nulla quis enim."),r.a.createElement("p",{className:"advertiseButton",onClick:function(){return e.props.onCollectionRouteChange("Watches")}},"View More >")),r.a.createElement("div",{className:"ad_2"},r.a.createElement("div",null,r.a.createElement("p",null,"WATCHES"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna mi. Aenean mattis, est eget mattis ultricies, erat nisl iaculis sem, non hendrerit felis nulla quis enim."),r.a.createElement("p",{className:"advertiseButton",onClick:function(){return e.props.onCollectionRouteChange("Watches")}},"SHOP NOW"))))}}]),t}(r.a.Component)),O=(a(24),a(25),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).newProductList=function(){for(var e=[],t=0;t<4;t++)e.push(r.a.createElement("div",{className:"newproducts_item",key:t},r.a.createElement("div",{className:"newproducts_image"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",alt:"pic"})),r.a.createElement("div",{className:"newproducts_button"},r.a.createElement("p",null,"Product ",t),r.a.createElement("button",null,"ADD")),r.a.createElement("p",null,"$999.00")));return e},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"newproducts"},r.a.createElement("h4",null,"NEW PRODUCTS"),r.a.createElement("div",{className:"newproducts_list"},this.newProductList()))}}]),t}(r.a.Component)),N=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"products"},r.a.createElement(O,null))}}]),t}(r.a.Component),y=(a(26),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.productData[0];return r.a.createElement("div",{className:"productdisp"},r.a.createElement("div",{className:"productdisp_img"},r.a.createElement("img",{src:"".concat(t.productimg),alt:"pic"})),r.a.createElement("div",{className:"productdisp_text"},r.a.createElement("p",null,t.productname),r.a.createElement("p",null,t.productdesc),r.a.createElement("button",{onClick:function(){return e.props.onAddToCart(t.productcode)}},"Add To Cart")))}}]),t}(r.a.Component)),P=(a(27),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"todaydeal"},r.a.createElement("div",{className:"todaydeal_product"},r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347_1280.jpg",alt:"pic"})),r.a.createElement("div",null,r.a.createElement("p",null,"BEST THEME"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna mi. Aenean mattis, est eget mattis ultricies, erat nisl iaculis sem, non hendrerit felis nulla quis enim."),r.a.createElement("p",null,r.a.createElement("span",{className:"todaydealButton",onClick:function(){return e.props.onCollectionRouteChange("HeadPhones")}},"View More >")))))}}]),t}(r.a.Component)),j=(a(28),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).createButton=function(e){var t=a.props.featuredProductData;return r.a.createElement("div",null,r.a.createElement("div",{className:"featuredproducts_image"},r.a.createElement("img",{src:"".concat(t[e].productimg),alt:"pic",onClick:function(){return a.props.onFeaturedProductRouteChange(t[e].productcode)}})),r.a.createElement("div",{className:"featuredproducts_button"},r.a.createElement("p",null,t[e].productname),r.a.createElement("button",{onClick:function(){return a.props.onAddToCart(t[e].productcode)}},"ADD")),r.a.createElement("p",null,"$999.00"))},a.featuredProductList=function(e){for(var t=[],n=0;n<e.length;n++)t.push(r.a.createElement("div",{className:"featuredproducts_item",key:n},a.createButton(n)));return t},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.featuredProductData;return 0===e.length?r.a.createElement("div",null,r.a.createElement("h1",null,"Loading")):r.a.createElement("div",{className:"featuredproducts"},r.a.createElement("h4",null,"FEATURED PRODUCTS"),r.a.createElement("div",{className:"featuredproducts_list"},this.featuredProductList(e)))}}]),t}(r.a.Component)),k=(a(29),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer_1"},r.a.createElement("div",{className:"footer_about"},r.a.createElement("h3",null,"About Us"),"Praesent fringilla dolor eget congue imperdiet. Aliquam erat justo, vehicula eu metus in, sollicitudin interdum leo. Sed auctor non tortor in dictum. Proin scelerisque metus tempor sodales eleifend. Sed cursus odio a fringilla bibendum. Proin facilisis, tellus et elementum cursus, libero sem volutpat dui, nec posuere enim lacus a dui. Quisque imperdiet ultricies molestie. Sed bibendum lorem magna. Donec imperdiet dui in nunc ullamcorper scelerisque. Fusce egestas ullamcorper pellentesque. Fusce tincidunt porta posuere. Praesent vehicula lacus eu tellus dignissim blandit quis non justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel vestibulum ipsum."),r.a.createElement("div",{className:"footer_info"},r.a.createElement("h3",null,"Information"),r.a.createElement("ul",null,r.a.createElement("li",null,"Phasellus id fermentum est, ut bibendum sapien."),r.a.createElement("li",null,"Orci varius natoque penatibus et magnis."),r.a.createElement("li",null,"Vivamus vehicula semper nunc, vel aliquam.")))),r.a.createElement("div",{className:"footer_2"},r.a.createElement("div",{className:"footer_information"},r.a.createElement("h3",null,"Information"),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){e.props.onPageRouteChange("mainPage")}},"Home"),r.a.createElement("li",{onClick:function(){e.props.onPageRouteChange("aboutPage")}},"About Us"),r.a.createElement("li",{onClick:function(){e.props.onPageRouteChange("contactPage")}},"Contact Us"))),r.a.createElement("div",{className:"footer_collection"},r.a.createElement("h3",null,"Collection"),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e.props.onCollectionRouteChange("Dress")}},"Dress"),r.a.createElement("li",{onClick:function(){return e.props.onCollectionRouteChange("Phones")}},"Mobiles"),r.a.createElement("li",{onClick:function(){return e.props.onCollectionRouteChange("Laptops")}},"Laptops"),r.a.createElement("li",{onClick:function(){return e.props.onCollectionRouteChange("HeadPhones")}},"HeadPhones"),r.a.createElement("li",{onClick:function(){return e.props.onCollectionRouteChange("Cameras")}},"Camera"),r.a.createElement("li",{onClick:function(){return e.props.onCollectionRouteChange("Watches")}},"Watches"))),r.a.createElement("div",{className:"footer_myaccount"},r.a.createElement("h3",null,"My Account"),r.a.createElement("ul",null,r.a.createElement("li",null,"My Account"),r.a.createElement("li",null,"My Addresses"),r.a.createElement("li",{onClick:function(){e.props.onPageRouteChange("cartPage")}},"My Cart"))),r.a.createElement("div",{className:"footer_followus"},r.a.createElement("h3",null,"Follow Us"),r.a.createElement("ul",null,r.a.createElement("li",null,"Twitter"),r.a.createElement("li",null,"Facebook"),r.a.createElement("li",null,"Youtube"),r.a.createElement("li",null,"Pinterest"),r.a.createElement("li",null,"Google+")))))}}]),t}(r.a.Component)),S=(a(30),a(31),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).onAddToCart=function(t){var a="",n={},r="";if(""===t)setTimeout(function(){n={},r=""},300);else{if(t.includes(":")){var i={};a=t,t=t.split(",");for(var o=0;o<t.length-1;o++){var l=t[o].replace(",","").split(":"),c=l[0],u=parseInt(l[1],10);i[c]=u}n=i}else{var s=Object.assign({},e.state.addToCartObj);for(var m in void 0===s[t]?s[t]=1:s[t]+=1,s){a+=m+":"+s[m]+","}n=s}r=a}fetch("https://stark-crag-71277.herokuapp.com/cart",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.userData.id,addtocart:a})}).then(function(e){return e.json()}).then(function(t){e.setState({addToCartString:r}),e.setState({addToCartObj:n})})},e.onSignin=function(t){e.setState({userData:t})},e.onPageRouteChange=function(t){e.setState({pageRoute:t}),"cartPage"===t&&fetch("https://stark-crag-71277.herokuapp.com/userdetails",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.userData.id})}).then(function(e){return e.json()}).then(function(t){e.setState({cartDetails:t.cart})})},e.onCollectionRouteChange=function(t){e.setState({pageRoute:"collectionPage"}),e.setState({collectionPage:t});var a=t.toLowerCase();fetch("https://stark-crag-71277.herokuapp.com/collection",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({collection:a})}).then(function(e){return e.json()}).then(function(t){var a=JSON.parse(JSON.stringify(t));e.setState({collectionData:a})})},e.onSearchRouteChange=function(t){e.setState({pageRoute:"collectionPage"}),e.setState({collectionPage:"Search Results"});for(var a=t,n=[],r=0;r<a.length;r++){var i=a[r].replace(/[0-9]/g,"");fetch("https://stark-crag-71277.herokuapp.com/product",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({producttable:i,productcode:a[r]})}).then(function(e){return e.json()}).then(function(e){n.push(e[0])})}setTimeout(function(){e.setState({collectionData:n})},100)},e.onProductRouteChange=function(t){e.setState({productData:t}),e.setState({pageRoute:"productPage"});var a=t.replace(/[0-9]/g,"");fetch("https://stark-crag-71277.herokuapp.com/product",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({producttable:a,productcode:t})}).then(function(e){return e.json()}).then(function(t){var a=JSON.parse(JSON.stringify(t));e.setState({productData:a})})},e.state={userData:{},headerSiginin:"Sign In",pageRoute:"signinPage",collectionPage:"",collectionData:[],productPage:"",productData:[],featuredProductData:[],addToCartString:"",addToCartObj:{},cartDetails:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=["dress","headphones","cameras","phones","watches","laptops"],a=[],n=0;n<5;n++){var r=t[Math.floor(Math.random()*t.length)];fetch("https://stark-crag-71277.herokuapp.com/featuredproduct",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({table:r})}).then(function(e){return e.json()}).then(function(e){var t=JSON.parse(JSON.stringify(e));a.push(t)})}setTimeout(function(){e.setState({featuredProductData:a})},1e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p,{onPageRouteChange:this.onPageRouteChange,onSearchRouteChange:this.onSearchRouteChange}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"main_left"},r.a.createElement(f,{onCollectionRouteChange:this.onCollectionRouteChange})),r.a.createElement("div",{className:"main_right"},function(){switch(e.state.pageRoute){case"signinPage":return r.a.createElement("div",null,r.a.createElement(E,{onPageRouteChange:e.onPageRouteChange,onheaderSigninRouteChange:e.onheaderSigninRouteChange,onSignin:e.onSignin}));case"registerPage":return r.a.createElement("div",null,r.a.createElement(v,{onPageRouteChange:e.onPageRouteChange,onheaderSigninRouteChange:e.onheaderSigninRouteChange}));case"mainPage":return r.a.createElement("div",null,r.a.createElement(b,{onCollectionRouteChange:e.onCollectionRouteChange}),r.a.createElement(N,null),r.a.createElement(P,{onCollectionRouteChange:e.onCollectionRouteChange}),r.a.createElement(j,{featuredProductData:e.state.featuredProductData,onFeaturedProductRouteChange:e.onProductRouteChange,onAddToCart:e.onAddToCart}));case"aboutPage":return r.a.createElement("div",null,r.a.createElement(d,null));case"contactPage":return r.a.createElement("div",null,r.a.createElement(h,null));case"cartPage":return r.a.createElement("div",null,r.a.createElement(g,{cartDetails:e.state.cartDetails,onProductRouteChange:e.onProductRouteChange,userId:e.state.userData.id,onAddToCart:e.onAddToCart}));case"collectionPage":return r.a.createElement("div",null,r.a.createElement(C,{collectionPage:e.state.collectionPage,collectionData:e.state.collectionData,onProductRouteChange:e.onProductRouteChange,onAddToCart:e.onAddToCart}));case"productPage":return r.a.createElement("div",null,r.a.createElement(y,{productData:e.state.productData,onAddToCart:e.onAddToCart}));default:return r.a.createElement("div",null,r.a.createElement("h4",null,"loading"))}}())),r.a.createElement(k,{onPageRouteChange:this.onPageRouteChange,onCollectionRouteChange:this.onCollectionRouteChange}))}}]),t}(n.Component)),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ecommerce",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ecommerce","/service-worker.js");R?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):q(t,e)})}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.61cffa68.chunk.js.map