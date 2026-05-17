import React from 'react';

function Rightsection() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className="col-6 p-5 mt-5 " style={{ width: "50%" }}>

                    <h3 className="mb-3 mt-5">Kite Connect API</h3>
                    <div className="mb-3">
                        <p className='mb-3'>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                        <a href="javascript:void(0)" style={{ textDecoration: "none" }}>Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    </div>
                </div>
                <div className="col-6  ">
                        <img src='media/kiteconnect.png' alt='console' style={{ width: "110%" }} />
                </div>
            </div>


            <div className='row p-3 mb-5 '>
                <div className="col-6  ">

                    <img src='media/varsity.png' alt='versity' style={{ width: "75%" }} />

                </div>
                <div className='col-1 '></div>
                <div className="col-5 p-5" style={{ width: "40%" }}>
                    <h3 className="mb-4">Varsity mobile</h3>
                    <div className="mb-3">
                        <p className='mb-4'>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                        <div className='row'>
                            <div className='col-6 mt-4'><img src="media/googlePlayBadge.svg" style={{ width: "90%" }} /></div>
                            <div className='col-6 mt-4'><img src="media/appstoreBadge.svg" style={{ width: "83%" }} /></div>
                        </div>
                    </div>
                </div>


            </div>
            <h4 className='text-center '>Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.</h4>

        </div>
    );
}

export default Rightsection;