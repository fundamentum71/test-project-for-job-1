import './productListItem.scss';
import trash from '../../resources/img/trash.svg';
import example from '../../resources/img/example.png';

const ProductListItem = ({ title, desc, ref, price, onDelete }) => {
	return (
		<li className="product__list-item">
			<div className="item__img">
				<img src={example} alt="product" />
			</div>
			<div className="item__wrapper">
				<h2 className="item__title">{title}</h2>
				<div className="item__descr">{desc}</div>
				<div className="item__price">{price} руб.</div>
				<button className="item__delete" onClick={onDelete}>
					<img src={trash} alt="trash" />
				</button>
			</div>
		</li>
	);
};

export default ProductListItem;
