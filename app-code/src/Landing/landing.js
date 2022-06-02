import React, { useState, useEffect } from 'react';
import './landing.css'
import { db } from '../firebase_init';
import { uid } from 'uid';  
import { DataSnapshot, onValue, ref, set } from "firebase/database";

function Landing() {
    const [amount, setAmount] = useState("");
    const [amounts, setAmounts] = useState([]);
    
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    // reading

    useEffect(() => {
        onValue(ref(db), snapshot => {
            setAmounts([""]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((amount) => {
                    setAmounts(oldArray => [...oldArray, amount]);
                });
            }
        });
    }, []);

    const writeToFirebase = () => {
        const _uid = uid();
        set(ref(db, `/${_uid}`), {
            amount, 
            _uid
        });

        setAmount("");
    }


    return(
        <div className={"main-content"}>
            <div className={"top-content"}>\
                <div>
                    <h1>Want to help your community?</h1>
                    <h3>See what local food banks are in need of!</h3>
                </div>
            </div>
            <div className={"title-1"}>
                <h2>Food Needed</h2>
            </div>
            <div className={"foods"}>
                <div className={"oil"}>
                    <div>
                        <img
                            src={"https://purepng.com/public/uploads/large/purepng.com-olive-oilolive-oiloliveoilcrop-1411527968157j3fmw.png"}
                            alt={"oil"}
                            width={100}
                        />
                        <h1>Oil</h1>
                        <h3>Amount needed: {amounts.map((amount)=> (
                            <>
                                <h3>{amount.amount}</h3>
                            </>
                        ))}</h3>
                        <button onClick={writeToFirebase}>Plus</button>
                        
                    </div>
                </div>
                <div className={'banana'}>
                    <div>
                        <img
                            src={"https://i.pinimg.com/originals/5f/0d/f7/5f0df7a242b8f3d7795db84d5ceb7f13.png"}
                            alt={"banana"}
                            width={"170px"}
                        />
                        <h1>Banana</h1>
                        <h3>Amount needed: ...</h3>
                    </div>
                </div>
                <div className={'flour'}>
                    <div>
                        <img
                            src={"https://www.pngall.com/wp-content/uploads/8/Flour-PNG-Clipart.png"}
                            alt={"flour"}
                            width={"200px"}
                        />
                        <h1>Flour</h1>
                        <h3>Amount needed: ...</h3>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Landing;
