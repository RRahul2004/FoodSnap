import React from 'react';
import './landing.css'

function Landing() {
    return(
        <div className={"main-content"}>
            <div className={"top-content"}>
                <h1>Want to help your community?</h1>
                <h3>See what local food banks are in need of!</h3>
            </div>
            <div className={"title-1"}>
                <h2>Food Needed</h2>
            </div>
            <div className={"foods"}>
                <div className={"oil"}>
                    <img
                        src={"https://purepng.com/public/uploads/large/purepng.com-olive-oilolive-oiloliveoilcrop-1411527968157j3fmw.png"}
                        alt={"oil"}
                        width={100}
                    />
                    <h1>Oil</h1>
                    <h3>Amount needed: ...</h3>
                </div>
                <div className={'banana'}>
                    <img
                        src={"https://i.pinimg.com/originals/5f/0d/f7/5f0df7a242b8f3d7795db84d5ceb7f13.png"}
                        alt={"banana"}
                        width={100}
                    />
                    <h1>Banana</h1>
                    <h3>Amount needed: ...</h3>
                </div>
                <div className={'flour'}>
                    <img
                        src={"https://www.pngall.com/wp-content/uploads/8/Flour-PNG-Clipart.png"}
                        alt={"flour"}
                        width={100}
                    />
                    <h1>Flour</h1>
                    <h3>Amount needed: ...</h3>
                </div>
            </div>
        </div>
  );
}

export default Landing;
