import React from 'react';
import './Advertise.css';

class Advertise extends React.Component{
render(){ 
return(
<div className='advertise'>
    <div className='ad_1'>
        <p>BEST THEME</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna mi. Aenean mattis, est eget mattis ultricies, erat nisl iaculis sem, non hendrerit felis nulla quis enim.</p>
        <p className='advertiseButton' onClick={()=>this.props.onCollectionRouteChange('Watches')}>View More ></p>
    </div>
    <div className='ad_2'>
        <div>
        <p>WATCHES</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna mi. Aenean mattis, est eget mattis ultricies, erat nisl iaculis sem, non hendrerit felis nulla quis enim.</p>
        <p className='advertiseButton' onClick={()=>this.props.onCollectionRouteChange('Watches')}>SHOP NOW</p>
        </div>
    </div>
</div>
)
}
}

export default Advertise;