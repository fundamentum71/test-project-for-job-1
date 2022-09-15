import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/slice';
import './productAdd.scss';

const ProductAdd: React.FC = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [imageUrl, setImgUrl] = React.useState('');
	const [price, setPrice] = React.useState(0);

	//const onClickButtonAdd = () => {
	//	dispatch(addItem(title, desc, imageUrl, price));
	//};

	return (
		<div className="wrapper-productAdd">
			<form action="#" className="productAdd">
				<label htmlFor="productTitle" className="red-circle">
					Наименование товара
				</label>
				<input
					id="productTitle"
					type="text"
					placeholder="Введите наименование товара"
					name="title"
					value={title}
				/>

				<label htmlFor="productDescr">Описание товара</label>
				<textarea
					id="productDescr"
					placeholder="Введите описание товара"
					name="desc"
					value={desc}></textarea>

				<label htmlFor="productURL" className="red-circle">
					Ссылка на изображение товара
				</label>
				<input
					id="productURL"
					type="text"
					placeholder="Введите ссылку"
					name="imageUrl"
					value={imageUrl}
				/>

				<label htmlFor="productPrice" className="red-circle">
					Цена товара
				</label>

				<input
					id="productPrice"
					type="number"
					placeholder="Введите цену"
					name="price"
					value={price}
				/>
				<button type="submit">Добавить товар</button>
			</form>
		</div>
	);
};

export default ProductAdd;
