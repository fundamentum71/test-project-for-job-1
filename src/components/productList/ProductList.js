import ProductListItem from '../productListItem/ProductListItem';
import './productList.scss';

const ProductList = () => {
	return (
		<ul className="product__list">
			<ProductListItem />
			<ProductListItem />
			<ProductListItem />
			<ProductListItem />
			<ProductListItem />
			<ProductListItem />
		</ul>
	);
};

export default ProductList;
