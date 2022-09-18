import React from 'react';
import { useAppSelector } from '../../redux/hook';
import ProductListItem from '../productListItem/ProductListItem';
import './productList.scss';

const ProductList: React.FC = () => {
	const cartList = useAppSelector((state) => state.cart.list);

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
			{cartList.map((item) => (
				<ProductListItem key={item.id} {...item} />
			))}
		</ul>
	);
};
export default ProductList;
