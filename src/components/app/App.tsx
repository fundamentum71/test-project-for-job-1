import ProductSort from '../productSort/ProductSort';
import ProductAdd from '../productAdd/ProductAdd';
import ProductList from '../productList/ProductList';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="header__container">
				<h1>Добавление товара</h1>
				{/*<ProductSort />*/}
			</header>
			<main className="main__container">
				<div>
					<ProductAdd />
				</div>
				<div>
					<ProductList />
				</div>
			</main>
		</div>
	);
};

export default App;