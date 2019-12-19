import React from 'react';
import './MainSlider.css';

const MainSlider = ({props}) => {
    function handleStart()
    {
        props.history.push('/tasks');
    }
    return ( 
        <div className="row slider">
            

                <div id="carouselExampleIndicators" className="carousel slide col-lg-12" data-ride="carousel">
                    
                    <div className="carousel-inner">
                        <div className="  carousel-item active slid-item item-one">
                            <h1 className="Slid-item-quote col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">"The key is in not spending time, but in investing it." -- Stephen R. Covey</h1>
                            <button className="btn-start col-6 col-sm-3 col-md-2 col-lg-2 offset-3 offset-sm-5 offset-md-5" onClick={() => handleStart()}>Get Start</button>

                        </div>
                        <div className=" carousel-item slid-item item-two">
                            <h1 className="Slid-item-quote col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">"Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin." - Mother Teresa</h1>
                            <button className="btn-start col-6 col-sm-3 col-md-2 col-lg-2 offset-3 offset-sm-5 offset-md-5" onClick={() => handleStart()}>Get Start</button>






                        </div>
                        {/* <div className=" carousel-item slid-item item-three">
                            <h1 className="Slid-item-quote col-lg-6 offset-lg-3">"The shorter way to do many things is to only do one thing at a time." - Mozart</h1>
                            <button className="btn-start col-6 col-sm-3 col-md-2 col-lg-2 offset-3 offset-sm-5 offset-md-5" onClick={() => handleStart()}>Get Start</button>

                        </div> */}
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                    </ol>
                </div>
            </div>
     );
}
 
export default MainSlider;