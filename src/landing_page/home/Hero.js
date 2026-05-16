import React from 'react';

function Hero() {
    return ( <div className='container p-5'>
        <div className='row text-center'>
            <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
            <h1>Invest in everthing</h1>
            <p>Online plateform to invest in stocks ,derivatives and mutual funds</p>
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
        </div>

    </div>
     );
}

export default Hero;