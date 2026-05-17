import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id="supportHero">

            <div className='p-5' id="supportTitle">
                <div className="col-6">
                    <h7>Support Portal</h7>
                </div>
                <div className="col-6">
                    <a href='#' style={{ textDecoration: "none" }}>Track Tickets</a>
                </div>
            </div>

            <div className='row p-3' id="supportTitle">
                <div className="col-6 ">
                    <h6>Search for an answer or browse help topics to create a ticket</h6>
                    <input className='p-2' placeholder='Eg. how do i activate F&O' /><br />
                    <a href='#'>track account opening</a>
                    <a href='#'>track segment activation</a>
                    <a href='#'>intraday margins</a>

                </div>
                <div className="col-6 ">
                    <ol>
                        <h6>Featured</h6>
                        <a href='#'>Current Takeover & Delisting-jan 2026</a><br/>
                        <a href='#'>Latest Intraday laverages- MIS & CO</a>
                    </ol>
                </div>
            </div>

        </section>
    );
}

export default Hero;