import React from 'react';

function Awards() {
    return ( 
        <div className='container p-5 mb-0'>
            <div className='row'>
                <div className="col-6">
                    <div className="row p-5">
                        <img src='media/largestBroker.svg' alt='Award' />
                    </div>
                </div>
                <div className="col-6 p-5 mb-5">
                    <h1>Largest stock broker in India</h1>
                    <p style={{width:"100%"}}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                        <list>
                            <p>Futures and Options</p>
                            <p>Commodity Derivatives</p>
                            <p>Currency Derivatives</p>
                        </list>
                    </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                        <list>
                            <p>Stocks & IPOs</p>
                            <p>Direct Mutual Funds</p>
                            <p>Bonds & Govt. Securities</p>
                        </list>
                    </ul>
                        </div>
                    </div>
                    <img src="media/pressLogos.png" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
        
     );
}

export default Awards;