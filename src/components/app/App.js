import { useState, useEffect, useRef } from 'react';
import ProductSort from '../productSort/ProductSort';
import ProductAdd from '../productAdd/ProductAdd';
import ProductList from '../productList/ProductList';

const App = () => {
	const [data, setData] = useState([]);
	const [maxId, setMaxId] = useState(0);

	const deleteItem = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const addItem = (title, desc, link, price) => {
		const newItem = {
			title,
			desc,
			link,
			price,
			id: maxId,
		};
		setMaxId(maxId + 1);

		const newArr = [...data, newItem];
		return setData(newArr);
	};

	const setLog = useRef(true);
	//const getLog = useRef(true);

	useEffect(() => {
		if (setLog.current) {
			setLog.current = false;
			const raw = localStorage.getItem('saveProduct');
			setData(JSON.parse(raw));
			setMaxId(JSON.parse(localStorage.getItem('idProduct')));
			console.log('initGet');
		}
	}, []);

	useEffect(() => {
		//if (getLog.current) {
		//getLog.current = false;
		localStorage.setItem('saveProduct', JSON.stringify(data));
		localStorage.setItem('idProduct', JSON.stringify(maxId));
		console.log('initSet');
		//}
	}, [data, maxId]);

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
