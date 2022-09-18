// import confetti from "canvas-confetti"
// import Confer
// const Demo = () => {
//     return (
//         <>
//         </>
//     )
// }
// export default Demo

import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import confetti from "canvas-confetti";
import demo_bg from './assets/img/demo_bg1.png'
import user_bg from './assets/img/user_bg.png'
import ppsu_logo from './assets/img/PPSU_logo_2022.png'
import io from 'socket.io-client';

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function getAnimationSettings(angle, originX) {
    return {
        particleCount: 3,
        angle,
        spread: 55,
        origin: { x: originX },
        colors: ["#bb0000", "#ffffff"]
    };
}

export default function Demo() {
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();

    const socket = io("http://aps.ppsu.ac.in:3006");

    socket.on("listenStatus", (data) => {
        console.log(data);
        setStatus(data.status)
    })

    var duration = 15 * 1000;
    var date = Date.now()
    var end = Date.now() + duration;


    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(60, 0));
            refAnimationInstance.current(getAnimationSettings(120, 1));
        }
    }, []);

    const [status, setStatus] = useState("none")

    var end = Date.now() + (15 * 1000);

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 16));
        }
        // if (Date.now() < end) {
        //     requestAnimationFrame(frame);
        // }
    }, [nextTickAnimation, intervalId]);


    const pauseAnimation = useCallback(() => {
        clearInterval(intervalId);
        setIntervalId(null);
    }, [intervalId]);

    const stopAnimation = useCallback(() => {
        clearInterval(intervalId);
        setIntervalId(null);
        refAnimationInstance.current && refAnimationInstance.current.reset();
    }, [intervalId]);

    if (status === "launch") {
        startAnimation()
    } else {
        console.log("dsds")
    }
    const Launch = () => {
        setStatus(true)
        if (date < end) {
            // stopAnimation()
        }

    }


    // if (status === true) {
    //     if (Date.now() < end) {
    //         stopAnimation()
    //     }
    // } else {
    //     console.log("none")
    // }
    const btn = document.getElementById("p_btn")







    var end = Date.now() + (9 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];
    const frame = () => {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        } else {
            setInterval(() => {
                window.location.href = "http://aps.ppsu.ac.in"
            }, 5000)
        }
    }






    if (status === "launched") {
        return (
            <>
                <div className="container-fluid">

                    <div className='ppsu_demo'>
                        <img src={demo_bg} alt="ppsu" className="img-fluid" />
                        <div className='text-center ppsu_text'>
                            <img src={ppsu_logo} className="img-fluid" height='150px' width='200px' />
                            <h3 className='mt-5 '>School of Engineering is happy to</h3>
                            <h3 className='mt-3'>Develop & Launch</h3>
                            <h2 className='box mt-5 mb-5'>PPSU Activity Point System</h2>
                            <h3 className='mt-5'>On</h3>
                            <h3 className='mt-3'>Engineer's Day Celebration</h3>
                            <h3 className='mt-4 text_normal'>September 15, 2022</h3>
                            {/* <button type="submit" className="btn submit-btn btn-lg mt-4 mb-5 mt-5">Launch</button> */}

                        </div>
                    </div>

                    {
                        frame()
                    }
                    {/* <ReactCanvasConfetti
                        refConfetti={getInstance}
                        style={canvasStyles}
                    /> */}
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='container-fluid m-0 p-0'>
                    <div className='ppsu_demo'>

                        <img src={user_bg} alt="ppsu" className="img-fluid" />
                        <div className='text-center ppsu_text'>
                            <img src={ppsu_logo} className="img-fluid" height='150px' width='200px' />
                            <h2 className='box mt-5 mb-5'>
                                Coming Soon..
                            </h2>
                            <h3 className='mt-5'>On</h3>
                            <h3 className='mt-3'>Engineer's Day Celebration</h3>
                            <h3 className='mt-4 text_normal'>September 15, 2022</h3>
                            {/* <button type="submit" className="btn submit-btn btn-lg mt-4 mb-5 mt-5">Launch</button> */}

                        </div>
                    </div>
                </div>
            </>
        );
    }
}


{/*  */ }