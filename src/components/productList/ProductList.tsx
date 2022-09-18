import React from 'react';
import { useAppSelector } from '../../redux/hook';
import ProductListItem from '../productListItem/ProductListItem';
import './productList.scss';

const ProductList: React.FC = () => {
	const cartList = useAppSelector((state) => state.cart.list);
	const { sortProperty } = useAppSelector((state) => state.filter.sort);

	let nowCartList;

	switch (sortProperty) {
		case 'default': {
			nowCartList = cartList;
			break;
		}
		case 'price': {
			nowCartList = cartList.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
			break;
		}
		case '-price': {
			nowCartList = cartList.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
			break;
		}

		default:
			break;
	}

	const isMounted = React.useRef(false);
	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(cartList);
			localStorage.setItem('cart', json);
		}
		isMounted.current = true;
	}, [cartList]);

	return (
		<ul className="product__list">
			{nowCartList?.map((item) => (
				<ProductListItem key={item.id} {...item} />
			))}
		</ul>
	);
};
export default ProductList;
