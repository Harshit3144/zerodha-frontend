import React from 'react';

function Stats() {
    return ( 
        
        <div className='container p-4 mb-3'>
            <div className='row p-5'>
                <div className="col-6 p-4" style={{width:"50%"}}>
                    <h3 className="fs-3 mb-5">Trust with Confidence</h3>
                    <h4 className="fs-4 ">Customer-first Always</h4>
                    <p className="text-muted ">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h4 className="fs-4 ">No Spam or gimmicks</h4>
                    <p className="text-muted ">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h4 className="fs-4 ">The Zerodha Universe</h4>
                    <p className="text-muted ">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4 className="fs-4 ">Do better with money</h4>
                    <p className="text-muted ">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5 ">
                    <div className="row">
                        <img src='media/ecosystem.png' alt='ecosystem' style={{width:"90%"}}/>
                        <div className="row p-5 mb-5 ">
                            <div className="text-center ">
                                <a href="https://zerodha.com/products" className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                                <a href="https://kite-demo.zerodha.com/dashboard" style={{textDecoration:"none" , marginLeft:"50px"}}>Try Kite demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <img src="media/pressLogos.png" style={{width:"69%" , margin:"0 auto"}}/>
            </div>
        </div>
        
        
     );
}

export default Stats;