import React from 'react';

function Openaccount() {

    const handleSignupRedirect = () => {
        window.location.href = "https://auth-mern-frontend-zerodhalogin.vercel.app/signup";
    };

    return (<div className='container p-5 mb-5'>
        <div className='row text-center'>
            <h4 className='mb-4'>Open a Zerodha account</h4>
            <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='p-2 btn btn-primary fs-5'
                style={{ width: "20%", margin: "0 auto" }} 
                onClick={handleSignupRedirect}>Sign up for free</button>
        </div>

    </div>
    );
}

export default Openaccount;