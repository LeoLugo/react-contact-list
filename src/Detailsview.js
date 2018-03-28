import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import data from './randomUsers.json'
import './Detailsview.css'




class Detailsview extends Component {
	render() {
		return (
			<div>
				{data.filter(person => person.id == this.props.match.params.id).map(person =>(
					<div className="detailcontent">
						<div className="detailtop">
							<Link to="../"><img className="detailarrow" alt="pic" src={require("./images/backarrow.svg")}/></Link>
							<img  className="detailpic" alt="pic" src={person.picture.large}/>
						</div>
							<div className="detail"><img className="detailicon" alt="pic" src={require("./images/contact.svg")}/>{person.name.first} {person.name.last}</div>
							<div className="detail"><img className="detailicon" alt="pic" src={require("./images/mail.svg")}/>{person.email}</div>
							<div className="detail"><img className="detailicon" alt="pic" src={require("./images/phone.svg")}/>{person.phone}</div>
							<div className="detail"><img className="detailicon" alt="pic" src={require("./images/earth.svg")}/>{person.location.city}, {person.location.state}</div>

					</div>
			))}
			</div>
		)
	}
}

export default Detailsview;