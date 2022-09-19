import React from 'react';
import './productListItem.scss';
import trash from '../../resources/img/trash.svg';

import { useAppDispatch } from '../../redux/hook';
import { changeImportant, clearItems } from '../../redux/cart/slice';

interface CartItemProps {
	id: string;
	title: string;
	desc: string;
	price: string;
	imageUrl: string;
	important: boolean;
}

const ProductListItem: React.FC<CartItemProps> = ({
	id,
	title,
	desc,
	price,
	imageUrl,
	important,
}) => {
	const dispatch = useAppDispatch();

	let importantStyle;
	if (important) {
		importantStyle = ' product__list-item-important';
	} else {
		importantStyle = '';
	}

	return (
		<li
			className={`product__list-item ${importantStyle}`}
			onClick={() => dispatch(changeImportant(id))}>
			<div className="item__img">
				<img src={imageUrl} alt="Изображение отсутствует" />
			</div>
			<div className="item__wrapper">
				<h2 className="item__title">{title}</h2>
				<div className="item__descr">{desc}</div>
				<div className="item__price">{price} руб.</div>
				{/*{important && <div className="important">ВАЖНОЕ</div>}*/}
				<button className="item__delete" onClick={() => dispatch(clearItems(id))}>
					<img src={trash} alt="trash" />
				</button>
			</div>
		</li>
	);
};

export default ProductListItem;
