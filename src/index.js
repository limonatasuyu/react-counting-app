import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function App() {
	
	const [number, setNumber] = React.useState(0)
	
	
	function minus() {
		let newNum = number - 1
		setNumber(newNum);
	}
	
	function plus() {
		let newNum = number + 1
		setNumber(newNum);
	}
	
	
	return(
		<div className="content">
		<h1 style={{"textAlign": "center" }}>Counter</h1>
			<div className="number big--circle">
				<span>{number}</span>
				<div className="minus--button small--circle" onClick={minus}>-</div>
				<div className="plus--button small--circle" onClick={plus}>+</div>
			</div>
		</div>
	)
}

ReactDom.render(<App />, document.querySelector('#root'));
