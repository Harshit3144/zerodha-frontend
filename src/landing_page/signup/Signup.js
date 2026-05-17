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
                    <h3>Signup now</h3>
                    <h5 className="text-muted">Or track your existing application</h5>

                    <div className="mt-4">
                        <div className="input-group">
                            <span className="input-group-text">🇮🇳 +91</span>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter your mobile number"
                            />
                        </div>
                    </div>

                    <button className="btn btn-primary p-2.7 mt-4 fs-5" style={{ width: "50%" }}>Get OTP</button>
                    <p style={{ fontSize: "14px" }} className="mt-3 text-muted">By proceeding, you agree to the Zerodha <a href="https://zerodha.com/">terms</a> & <a href="https://zerodha.com/">privacy policy</a></p>
                    <p style={{ fontSize: "14px" }}>Looking to open NRI account? <a href="https://zerodha.com/">Click here</a></p>
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