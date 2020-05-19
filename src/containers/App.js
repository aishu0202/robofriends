import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import { contact } from './contact';


class App extends Component {
	constructor() {
		super()
		this.state = {
			contact: contact,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield : event.target.value });
	}

	render () {
		const { contact,searchfield } = this.state;
		const filteredContact = contact.filter(contact => {
			return contact.first_name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return(
			<div className="App">
				<h1 className="h1"> Contact Book </h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<Cardlist contact={filteredContact}/>
				</Scroll>
			</div>
		);	
	}
}

export default App;