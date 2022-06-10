import React from 'react'
import { useSelector, useDispatch } from "react-redux";  // useSelector is useContext or consumer here
import { incNumber, decNumber } from '../actions/index';

const Redirect = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>using react and redux</h4>

        <div className="quantity">
          <button className="quantity_minus" title="Decrement" onClick={() => dispatch(decNumber())}><span> - </span></button>
          <input name="quantity" type="text" className="quantity_input" value={myState} onChange={() => myState()} />

          <button className="quantity_plus" title="Increment" onClick={() => dispatch(incNumber())}><span> + </span></button>

        </div>


      </div>
    </>
  )
}

export default Redirect