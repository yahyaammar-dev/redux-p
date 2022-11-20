import React from 'react'
import { sampleTaskStarted } from "./store/Actions";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";

const Inside = () => {
  const dispatch = useDispatch()
	const counter = useSelector((state) => (state.tasks));
  return (
		<div>
			<h1>hellow</h1>
			{/* {console.log(counter)} */}
			<button onClick={() => dispatch(sampleTaskStarted())}>Increase Count</button>
		</div>
	);
}

export default Inside