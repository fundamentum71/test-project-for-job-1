import { Component } from 'react';
import ProductSort from '../productSort/ProductSort';
import ProductAdd from '../productAdd/ProductAdd';
import ProductList from '../productList/ProductList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					title: 'Телевизор',
					desc: 'Прикольный телевизор',
					//ref: 'https://www.lg.com/ru/images/televisions/md07528692/gallery/Medium_01.jpg',
					price: 14000,
				},
				{
					id: 2,
					title: 'Кампуктер',
					desc: 'Прикольный телевизор',
					//ref: 'https://bq.ru/upload/iblock/b6a/front.jpg',
					price: 84000,
				},
				{
					id: 3,
					title: 'микроволновка',
					desc: 'Прикольный телевизор',
					//ref: 'https://bq.ru/upload/iblock/b6a/front.jpg',
					price: 4000,
				},
			],
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

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
						<ProductAdd />
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
