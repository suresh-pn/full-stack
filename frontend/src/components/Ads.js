import React from 'react';

function Ads(props) {
    return (
        <div className='col-md-3'>

<div className="card -w-100 mt-10" >
  <img src="https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_1280.jpg" class="card-img-top" alt="iphone"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">he bulk </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
           
        </div>
    );
}

export default Ads;