// Amaar

import React, { useState, useEffect } from 'react';
import './landing.css'
import { getDocs, doc, updateDoc, increment, onSnapshot } from 'firebase/firestore';
import { db } from "../config/firebase_init";
import { oilCollectionRef,
    beansCollectionRef,
    flourCollectionRef,
    peanutCollectionRef,
    tunaCollectionRef,
    eggCollectionRef,
    pastaCollectionRef,
    riceCollectionRef,
    cornCollectionRef,
} from "../firestore.collections";

function Landing() {
    // All state hooks that the landing page needs to work
    const [oil, setOil] = useState([]);
    const [beans, setBeans] = useState([]);
    const [flour, setFlour] = useState([]);
    const [peanut, setPeanut] = useState([]);
    const [tuna, setTuna] = useState([]);
    const [eggs, setEggs] = useState([]);
    const [pasta, setPasta] = useState([]);
    const [rice, setRice] = useState([]);
    const [corn, setCorn] = useState([]);

    /**
     * Function allows the food quantities to be updated realtime
     * @param setFood: state hook
     * @param coll: reference to the data collection within Firestore
     */
    const quantityChange = (setFood, coll) => {
        useEffect(() => {
            const unsub = onSnapshot(coll, snapshot => {
                setFood(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})
                ));
            });

            return() => {
                unsub();
            }
        }, []);
    }

    /**
     * Function allows the managers to increase the quantity of food they need
     * @param {CollectionReference}col: Reference to the data collection within Firestore
     * @param {string}id: The ID for the document the manager needs to edit
     * @returns {Promise<void>}
     */
    const increaseQuantity = async (col, id) => {
        const ref = doc(db, col, id);
        await updateDoc(ref, {
            quantity: increment(1),
        });
    }

    /**
     * Function allows the managers to decrease the quantity of food they need
     * @param {CollectionReference}col: Reference to the data collection within Firestore
     * @param {string}id: The ID for the document the manager needs to edit
     * @returns {Promise<void>}
     */
    const decreaseQuantity = async (col, id) => {
        const ref = doc(db, col, id);
        await updateDoc(ref, {
            quantity: increment(-1),
        });
    }

    return(
        <div className={"main-contents"}>
            <div className={"top-content"}>
                <div>
                    <h1>Want to help your community?</h1>
                    <h3>See what local food banks are in need of!</h3>
                </div>
            </div>
            <div className={"title-1"}>
                <h2>Food Needed</h2>
            </div>
            <div className={"seva-items"}>
                <h3>Seva Food Bank</h3>
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
                        {quantityChange(setOil, oilCollectionRef)}
                        <h3>Amount needed: {oil.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getOil()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('oil', 'IGEE8MJLd9rN1EyfRKHj')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('oil', 'IGEE8MJLd9rN1EyfRKHj')}>-</button>
                    </div>
                </div>
                <div className={'banana'}>
                    <div>
                        <img
                            src={"https://www.bushbeans.com/-/media/bushsbeans/salsifyimports/0003940001864_H1N1_R.png"}
                            alt={"beans"}
                            width={"170px"}
                        />
                        <h1>Beans</h1>
                        {quantityChange(setBeans, beansCollectionRef)}
                        <h3>Amount needed: {beans.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getBeans()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('beans', 'tA3oxgteXRwCZRrnmhNI')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('beans', 'tA3oxgteXRwCZRrnmhNI')}>-</button>
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
                        {quantityChange(setFlour, flourCollectionRef)}
                        <h3>Amount needed: {flour.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getFlour()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('flour', 'oRde2DbdIlATmwioXiin')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('flour', 'oRde2DbdIlATmwioXiin')}>-</button>
                    </div>
                </div>
            </div>
            <div className={"seva-items"}>
                <h3>Salvation Army</h3>
            </div>
            <div className={"foods"}>
                <div className={"oil"}>
                    <div>
                        <img
                            src={"https://www.pngkey.com/png/full/956-9568178_peanut-butter.png"}
                            alt={"pb"}
                            width={100}
                        />
                        <h1>Pnut Butter</h1>
                        {quantityChange(setPeanut, peanutCollectionRef)}
                        <h3>Amount needed: {peanut.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getOil()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('peanutbutter', '7WT964XTYAzNUtXi2Nh8')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('peanutbutter', '7WT964XTYAzNUtXi2Nh8')}>-</button>
                    </div>
                </div>
                <div className={'banana'}>
                    <div>
                        <img
                            src={"https://www.seekpng.com/png/full/809-8095231_tin-of-tuna-fish.png"}
                            alt={"tuna"}
                            width={"170px"}
                        />
                        <h1>Tuna</h1>
                        {quantityChange(setTuna, tunaCollectionRef)}
                        <h3>Amount needed: {tuna.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getBeans()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('tuna', 'dMBdwblDMK3Nuz25tqsX')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('tuna', 'dMBdwblDMK3Nuz25tqsX')}>-</button>
                    </div>
                </div>
                <div className={'flour'}>
                    <div>
                        <img
                            src={"https://www.pngmart.com/files/5/Eggs-PNG-File.png"}
                            alt={"eggs"}
                            width={"200px"}
                        />
                        <h1>Eggs</h1>
                        {quantityChange(setEggs, eggCollectionRef)}
                        <h3>Amount needed: {eggs.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getFlour()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('eggs', 'UFsX5ainSFTBHxhktMIS')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('eggs', 'UFsX5ainSFTBHxhktMIS')}>-</button>
                    </div>
                </div>
            </div>
            <div className={"seva-items"}>
                <h3>Compass Foodbank</h3>
            </div>
            <div className={"foods"}>
                <div className={"oil"}>
                    <div>
                        <img
                            src={"https://pngimg.com/uploads/pasta/pasta_PNG74.png"}
                            alt={"pasta"}
                            width={180}
                        />
                        <h1>Pasta</h1>
                        {quantityChange(setPasta, pastaCollectionRef)}
                        <h3>Amount needed: {pasta.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getOil()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('pasta', 'aqW93njBzbJSGT9YNKw6')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('pasta', 'aqW93njBzbJSGT9YNKw6')}>-</button>
                    </div>
                </div>
                <div className={'banana'}>
                    <div>
                        <img
                            src={"http://assets.stickpng.com/images/5bbc96d30bc67a02c98d958e.png"}
                            alt={"rice"}
                            width={"170px"}
                        />
                        <h1>Rice</h1>
                        {quantityChange(setRice, riceCollectionRef)}
                        <h3>Amount needed: {rice.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getBeans()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('rice', 'jswy5PCoQkB6R7wTB2qf')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('rice', 'jswy5PCoQkB6R7wTB2qf')}>-</button>
                    </div>
                </div>
                <div className={'flour'}>
                    <div>
                        <img
                            src={"https://greengiantcanada.ca/wp-content/uploads/gg-niblets-wh-kernel-corn.png"}
                            alt={"corn"}
                            width={140}
                        />
                        <h1>Corn</h1>
                        {quantityChange(setCorn, cornCollectionRef)}
                        <h3>Amount needed: {corn.map(amount => {
                            return amount.data.quantity;
                        })}</h3>
                        {/*<button onClick={() => getFlour()}>Refresh</button>*/}
                        <button className={"increase-button"} onClick={() => increaseQuantity('corn', 'IyMVvEgzMUGK0KXlIelo')}>+</button>
                        <button className={"decrease-button"} onClick={() => decreaseQuantity('corn', 'IyMVvEgzMUGK0KXlIelo')}>-</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Landing;
