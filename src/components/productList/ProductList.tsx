import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';
import ProductListItem from '../productListItem/ProductListItem';
import './productList.scss';

const ProductList: React.FC = () => {
	const { cart } = useSelector(selectCart);

	const element = cart.map((item: CartItem) => {
		const { id, ...itemProps } = item;
		return <ProductListItem />;
	});

	return <ul className="product__list">{element}</ul>;
};

export default ProductList;
