import ProductListItem from '../productListItem/ProductListItem';
import './productList.scss';

const ProductList = ({ data, onDelete }) => {
	const element = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<ProductListItem key={id} {...itemProps} onDelete={() => onDelete(id)} />
		);
	});

	return <ul className="product__list">{element}</ul>;
};

export default ProductList;
