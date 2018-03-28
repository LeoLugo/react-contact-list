import React, { Component } from 'react';
import './Contactlist.css';
import data from './randomUsers.json'
import {Link} from 'react-router-dom'

class Contactlist extends Component {
	render() {
		return (
			<div>
				<div className="title">My Peeps</div>
	            {data.map(person => (
	                <Link to={"/contact/" + person.id}>
	                  <div className="hold">
	                    <div><img alt="pic" src={person.picture.thumbnail} className="listpic"/></div>
	                    <div className="personname">{person.name.first} {person.name.last}</div>
	                  </div>
	                </Link>
	            ))}
            </div>



			)
	}
}


export default Contactlist;