import React, { Component, Fragment } from 'react'

import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import { Button } from 'antd'

const colorA = '#000'


const PageA = ({ router, count, add, minus }) => (
	<Fragment>
		<div className="test">
 				 我是A页, 当前count为：<span className="sp"> { count }</span>／ URL的参数：<span className="sp">{ router.query.id }</span>
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
// 
// class PageA extends Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	render(){
// 		let { minus, add, count }  = this.props

// 		return (
// 			<Fragment>
// 				<div className="test">
// 				 我是A页 {count}
// 				<span className="sp">面</span>
// 				<Button onClick={()=>add()}>++++</Button>
//  		    	<Button onClick={()=>minus()}>----</Button>
//  		    </div>

// 			<style jsx>{`
				
// 				.test {
// 					color: pink;
// 				}
// 				.sp {
// 					color: ${colorA};
// 				}
// 			`}</style>

// 			</Fragment>
// 		)
// 	}

// }


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