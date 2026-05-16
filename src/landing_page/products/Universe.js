import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <h3 className=' text-center mb-3 '>The Zerodha Universe</h3>
            <h5 className=' text-center mb-5'>Extend your trading and investment experience even further with our partner platforms</h5>
            <div className="row text-muted p-3" style={{ fontSize: "13px" }}>

                <div className="col-4 text-center  ">
                    <img src="media/zerodhaFundhouse.png" style={{ width: "160px" }} />
                    <p className=' mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    <img src="media/streakLogo.png" style={{ width: "160px" }} className=' mt-3' />
                    <p className=' mt-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>

                <div className="col-4 text-center ">
                    <img src="media/sensibullLogo.svg" style={{ width: "180px" }} />
                    <p className=' mt-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    <img src="media/smallcaseLogo.png" style={{ width: "180px" }} className=' mt-3' />
                    <p className=' mt-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>

                <div className="col-4 text-center">
                    <img src="media/goldenpiLogo.png" style={{ width: "160px" }} />
                    <p className=' mt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    <img src="media/dittoLogo.png" style={{ width: "140px" }} className=' mt-3' />
                    <p className=' mt-3'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>

            </div>

            <div className='row text-center'>
                <button className='p-2 btn btn-primary fs-5' style={{ width: "20%", margin: "0 auto" }}>Signup for free</button>
            </div>

        </div>
    );
}

export default Universe;