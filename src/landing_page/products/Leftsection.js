import React from 'react';

function Leftsection() {
    return (
        <div className='container border-top'>
            <div className='row p-3 '>
                <div className="col-6  ">

                    <img src='media/kite.png' alt='kite' style={{ width: "110%" }} />

                </div>
                <div className='col-1 '></div>
                <div className="col-5 p-5" style={{ width: "40%" }}>
                    <h3 className="mb-4">kite</h3>
                    <div className="mb-3">
                        <p className='mb-4'>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                        <a href="javascript:void(0)" style={{ textDecoration: "none" }}>Try demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="javascript:void(0)" style={{ textDecoration: "none" }}> Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <div className='row'>
                            <div className='col-6 mt-4'><img src="media/googlePlayBadge.svg" style={{ width: "90%" }} /></div>
                            <div className='col-6 mt-4'><img src="media/appstoreBadge.svg" style={{ width: "83%" }} /></div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='row p-5'>
                <div className="col-6 p-5 mt-5 " style={{ width: "50%" }}>

                    <h3 className="mb-3 mt-5">Console</h3>
                    <div className="mb-3">
                        <p className='mb-3'>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                        <a href="javascript:void(0)" style={{ textDecoration: "none" }}> Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    </div>
                </div>
                <div className="col-6  ">
                        <img src='media/console.png' alt='console' style={{ width: "110%" }} />
                </div>
            </div>


            <div className='row p-3 '>
                <div className="col-6  ">

                    <img src='media/coin.png' alt='kite' style={{ width: "110%" }} />

                </div>
                <div className='col-1 '></div>
                <div className="col-5 p-5" style={{ width: "40%" }}>
                    <h3 className="mb-4">Coin</h3>
                    <div className="mb-3">
                        <p className='mb-4'>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                        <a href="javascript:void(0)" style={{ textDecoration: "none" }}>Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <div className='row'>
                            <div className='col-6 mt-4'><img src="media/googlePlayBadge.svg" style={{ width: "90%" }} /></div>
                            <div className='col-6 mt-4'><img src="media/appstoreBadge.svg" style={{ width: "83%" }} /></div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Leftsection;