import './productListItem.scss';
import trash from '../../resources/img/trash.svg';
import example from '../../resources/img/example.png';

const ProductListItem = () => {
	return (
		<li className="product__list-item">
			<div className="item__img">
				<img src={example} alt="product" />
			</div>
			<div className="item__wrapper">
				<h2 className="item__title">Наименование товара</h2>
				<div className="item__descr">
					Довольно-таки интересное описание товара в несколько строк.
					Довольно-таки интересное описание товара в несколько строк
				</div>
				<div className="item__price">10 000 руб.</div>
			</div>
		</li>
	);
};

export default ProductListItem;
