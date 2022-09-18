import ProductSort from '../productSort/ProductSort';
import ProductAdd from '../productAdd/ProductAdd';
import ProductList from '../productList/ProductList';
import { useAppSelector } from '../../redux/hook';

const App: React.FC = () => {
	const sort = useAppSelector((state) => state.filter.sort);
	return (
		<div className="App">
			<header className="header__container">
				<h1>Добавление товара</h1>
				<ProductSort value={sort} />
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
