import React, { Component, Fragment } from 'react'

import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import { Button } from 'antd'

const colorA = '#000'

	// constructor(props) {
	// 	super(props)
	// }
	// 
	// <Button onClick={this.props.add}>++++</Button>
 		    //<Button onClick={this.props.minus}>----</Button>


// const PageA = ({ router, pageProps }) => (
// 	<>
// 		<div className="test">
// 			 我是A页
// 			<span className="sp">面</span>
			
// 		</div> 



// 		<style jsx>{`
				
// 				.test {
// 					color: pink;
// 				}
// 				.sp {
// 					color: ${colorA};
// 				}

// 		`}</style>


// 	</>
// )
// 
class PageA extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		let { minus, add, count }  = this.props

		return (
			<Fragment>
				<div className="test">
				 我是A页 {count}
				<span className="sp">面</span>
				<Button onClick={()=>add()}>++++</Button>
 		    	<Button onClick={()=>minus()}>----</Button>
 		    </div>

			<style jsx>{`
				
				.test {
					color: pink;
				}
				.sp {
					color: ${colorA};
				}
			`}</style>

			</Fragment>
		)
	}

}


const mapStateToProps = (state) =>({
	count: state.header.count
})

const mapDispatchToProps = (dispatch) => ({
	add() {
		dispatch({type:'ADD'})
	},
	minus(){
		dispatch({type:'MINUS'})
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PageA))