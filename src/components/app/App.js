import { Component } from 'react';
import ProductSort from '../productSort/ProductSort';
import ProductAdd from '../productAdd/ProductAdd';
import ProductList from '../productList/ProductList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		this.maxId = 0;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (title, desc, link, price) => {
		const newItem = {
			title,
			desc,
			link,
			price,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onSaveLocal = () => {
		localStorage.setItem('saveProduct', JSON.stringify(this.state.data));
		localStorage.setItem('idProduct', JSON.stringify(this.maxId));
	};

	onGetLocal = () => {
		this.setState({ data: JSON.parse(localStorage.getItem('saveProduct')) });
		this.maxId = JSON.parse(localStorage.getItem('idProduct'));
	};

	componentDidMount() {
		if (
			localStorage.getItem('saveProduct') !== null &&
			localStorage.getItem('idProduct') !== null
		) {
			this.onGetLocal();
		}
	}
	componentDidUpdate() {
		this.onSaveLocal();
	}

	render() {
		const { data } = this.state;
		return (
			<div className="App">
				<header>
					<h1>Добавление товара</h1>
					<ProductSort />
				</header>
				<main className="main__container">
					<div>
						<ProductAdd onAdd={this.addItem} />
					</div>
					<div>
						<ProductList data={data} onDelete={this.deleteItem} />
					</div>
				</main>
			</div>
		);
	}
}

export default App;
