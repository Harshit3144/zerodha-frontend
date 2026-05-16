import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 '>
            <div className='row'>
                <div className="col-6 p-5" style={{width:"50%"}}>
                    <h3 className="mb-3">Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                    <a href=""  style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-6 p-5 ">
                    <div className="row ">
                        <div className="col-4"><img src='media/pricing0.svg' alt='pricing0' /></div>
                        <div className="col-4"><img src='media/pricingEquity.svg' alt='pricingEquity' /></div>
                        <div className="col-4"><img src='media/intradayTrades.svg' alt='intradayTrades' /></div>
                    </div>
                </div>
                    
            </div>
        </div>
        
        
     );
}

export default Pricing;