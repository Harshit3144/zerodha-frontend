import React from 'react';

function Education() {
    return ( 
        <div className='container p-5 mb-0 '>
            <div className='row'>
                <div className="col-6 p-5 ">
                    <div className="row p-5">
                        <img src='media/education.svg' alt='education' />
                    </div>
                </div>
                <div className="col-6 p-5" style={{width:"50%"}}>
                    
                    <h3 className="mb-5">Free and open market education</h3>
                    <div className="mb-3">
                       <p className='mb-1'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                       <a href="https://zerodha.com/varsity/"  style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div >
                       <p className='mb-1'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                       <a href="https://tradingqna.com/"  style={{textDecoration:"none"}}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                    
            </div>
        </div>
        
     );
}

export default Education;