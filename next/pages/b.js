import React, { useState, useEffect, useReducer } from 'react'


// class MyPageB extends React.Component {

// 	_isMounted = false;

// 	state = {
// 		count: 0,
// 	}

// 	componentDidMount(){
// 		this._isMounted = true;
// 		this.timer = setInterval(()=>{
// 			this.setState({
// 				count: this.state.count+1
// 			})
// 		}, 1000);
// 	}

// 	componentWillUnmount() {
// 	 	this._isMounted = false;
// 	 	if(this.timer){
// 	 		this.timer = null;
// 	 		clearInterval(this.timer);
// 	 	}
	 	
// 	}


// 	render() {
// 		return  <span> { this.state.count } </span>
// 	}
// }

// export default MyPageB;
// 



/**
 * hooks
 * useState
 */
// function MyFunction(){
// 	const [ count, setCount ] = useState(0);
// 	useEffect(()=>{
// 		const timer = setInterval(()=>{
// 			setCount(c=>c+1)
// 		}, 1000);
// 		return ()=>clearInterval(timer)
// 	},[])

// 	return  <span> { count } </span>
// }

// export default MyFunction

/**
 * hooks
 * @param  useReducer
 */
// function countreducer(state, action) {
// 	switch (action.type){
// 		case 'add':
// 			return state + 1
// 		case  'minus':
// 			return state - 1
// 		default: state
// 	}
// }

// function MyFunction(){
// 	const [ count, dispatch ] = useReducer(countreducer, 100);
// 	useEffect(()=>{
// 		const timer = setInterval(()=>{
// 			dispatch({type:'add'})
// 		}, 1000);
// 		return ()=>clearInterval(timer)
// 	},[])

// 	return  <span> { count } </span>
// }


/**
 *  hooks
 *  useEffect
 */
function countreducer(state, action) {
	switch (action.type){
		case 'add':
			return state + 1
		case  'minus':
			return state - 1
		default: state
	}
}

function MyFunction(){
	const [ count, dispatch ] = useReducer(countreducer, 100);
	const [name, setName ] = useState('张沪生')

	useEffect(()=>{
		// console.info('effect invoked');
		return ()=>{
			// console.info('effect deteched')
		}
	},[])

	return (
		<div>
			<input value={name} onChange={(e)=>setName(e.target.value)} />
			<button onClick={()=>dispatch({type:'add'})}>{ count }</button>
		</div>
	)
}

export default MyFunction

