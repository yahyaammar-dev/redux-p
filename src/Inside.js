import React from 'react'
import { increment , decrement } from './store/Actions';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";

const Inside = () => {
  const dispatch = useDispatch()
	const counter = useSelector((state) => (state.count));
  return (
		<div>
			<div>Count: {counter}</div>
    	<button onClick={()=>dispatch(increment())}>Increase Count</button>
			<button onClick={()=>dispatch(decrement())}>Decrease Count</button>
		</div>
	);
}

export default Inside