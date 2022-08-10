import { useState, useEffect, useSyncExternalStore } from 'react';
import ProductSort from '../productSort/ProductSort';
import ProductAdd from '../productAdd/ProductAdd';
import ProductList from '../productList/ProductList';

const App = () => {
	//constructor(props) {
	//	super(props);
	//	this.state = {
	//		data: [],
	//	};
	//	this.maxId = 0;
	//}

	const [data, setData] = useState([]);
	let maxId = 0;

	const deleteItem = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const addItem = (title, desc, link, price) => {
		const newItem = {
			title,
			desc,
			link,
			price,
			id: ++maxId,
		};

		const newArr = [...data, newItem];
		return setData(newArr);
	};

	//const onSaveLocal = () => {
	//	localStorage.setItem('saveProduct', JSON.stringify(data));
	//	localStorage.setItem('idProduct', JSON.stringify(maxId));
	//};

	//const onGetLocal = () => {
	//	setData(JSON.parse(localStorage.getItem('saveProduct')));
	//	maxId = JSON.parse(localStorage.getItem('idProduct'));
	//};

	useEffect(() => {
		const raw = localStorage.getItem('saveProduct') || [];
		setData(JSON.parse(raw));
		//maxId = JSON.parse(localStorage.getItem('idProduct'));
	}, []);

	useEffect(() => {
		localStorage.setItem('saveProduct', JSON.stringify(data));
		//localStorage.setItem('idProduct', JSON.stringify(maxId));
		console.log('init');
	}, [data]);

	//componentDidMount = () => {
	//	if (
	//		localStorage.getItem('saveProduct') !== null &&
	//		localStorage.getItem('idProduct') !== null
	//	) {
	//		this.onGetLocal();
	//	}
	//};
	//componentDidUpdate = () => {
	//	onSaveLocal();
	//};

	//const { data } = this.state;
	return (
		<div className="App">
			<header>
				<h1>Добавление товара</h1>
				<ProductSort />
			</header>
			<main className="main__container">
				<div>
					<ProductAdd onAdd={addItem} />
				</div>
				<div>
					<ProductList data={data} onDelete={deleteItem} />
				</div>
			</main>
		</div>
	);
};

export default App;
