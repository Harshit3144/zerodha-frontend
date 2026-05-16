import React from 'react';

function Signup() {
    return (
        <div>
            <div className='container p-5'>
                <div className='row text-center'>
                    <h2 className='mb-4 mt-5'>Open a free demat and trading account online</h2>
                    <h3 style={{ fontSize: "20px" }} className='text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-6 p-5">
                    <img src="media/signup.png" />
                </div>
                <div className="col-5 p-5">
                    <h4>Signup now</h4>
                    <h5 className="text-muted">Or track your existing application</h5>
                    <h5 className="text-muted">Or track your existing application</h5>
                    <button className="btn btn-primary p-2.7 mt-5 fs-5" style={{width:"50%"}}>Get OTP</button>
                    <p style={{fontSize:"14px"}} className="mt-3 text-muted">By proceeding, you agree to the Zerodha <a href="">terms</a> & <a href="">privacy policy</a></p>
                    <p style={{fontSize:"14px"}}>Looking to open NRI account? <a href="">Click here</a></p>
                </div>
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-7"></div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-7"></div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>

        </div>

    );
}

export default Signup;