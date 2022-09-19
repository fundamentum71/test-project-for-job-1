import ProductSort from '../productSort/ProductSort';
import ProductAdd from '../productAdd/ProductAdd';
import React from 'react';
import ProductList from '../productList/ProductList';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { sumPrice } from '../../redux/cart/slice';

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const sort = useAppSelector((state) => state.filter.sort);
	const { list, sum } = useAppSelector((state) => state.cart);

	React.useEffect(() => {
		dispatch(sumPrice());
	}, [list]);

	return (
		<div className="App">
			<header className="header__container">
				<h1>Добавление товара</h1>
				{list.length > 0 && <ProductSort value={sort} />}
			</header>
			<section className="header__sum-price">Общая стоимость товаров: {sum} рублей</section>
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
