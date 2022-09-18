import ppsu_logo from './assets/img/ppsu_logo.png'
import launch from './assets/img/launch.svg'
import io from 'socket.io-client';
import { useState } from 'react';
const Launch = () => {
    const socket = io("http://aps.ppsu.ac.in:3006");

    const [status, setstatus] = useState(false)
    const Launch = () => {
        socket.emit("changeStatus", { status: "launched" })
        setstatus(true)
    }
    return (
        <>
            <div className='container'>
                <div className='notFound_err_handle'>
                    <div className='text-center'>
                        <img src={ppsu_logo} className="logo" />
                        {
                            status === true ? <div className='row'>
                                <div className=" col-md-4" role="alert">
                                    {/* Launched Successfully.! */}
                                </div>
                                <div className="alert alert-success col-md-4" role="alert">
                                    Launched Successfully.!
                                </div>
                                <div className=" col-md-4" role="alert">
                                    {/* Launched Successfully.! */}
                                </div>
                            </div> : ""
                        }
                        <h3 className='mt-5'>We are happy to launching Activity Point System.</h3>
                        <button type="submit" className="btn submit-btn btn-lg mt-4 mb-5 mt-5" onClick={() => Launch()}>Launch</button>
                    </div>

                </div>
            </div>


            {/* <div class="banner" >
                <div class="container">
                    <h1 class="font-weight-semibold">Search engine optimisation &<br />Marketing.</h1>
                    <h6 class="font-weight-normal text-muted pb-3">Simple is a simple template with a creative design that solves all your marketing and SEO queries.</h6>
                    <div>
                        <button class="btn btn-opacity-light mr-1">Get started</button>
                        <button class="btn btn-opacity-success ml-1">Learn more</button>
                    </div>
                    <img src={launch} alt="" class="img-fluid" />
                </div>
            </div> */}
        </>
    )
}
export default Launch

{/* <div className='row'>
                    <div className='col-md-3 col-sm-12'></div>
                    <div className='col-md-6 col-sm-12'>
                        <img src={ppsu_logo} className='img-fluid' />
                    </div>
                    <div className='col-md-3 col-sm-12'></div>
                </div> */}


{/* <p className="zoom-area"><b>Opps!</b> Page not Found! </p>
                    <section className="error-container">
                        <span className="four"><span className="screen-reader-text">4</span></span>
                        <span className="zero"><span className="screen-reader-text">0</span></span>
                        <span className="four"><span className="screen-reader-text">4</span></span>
                    </section>
                    <div className="link-container">
                        <div className="more-link" style={{ fontSize: '20px' }}>🙏आपका धन्यवाद| 👏</div>
                    </div> */}