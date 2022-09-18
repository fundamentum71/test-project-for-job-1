import React from 'react';

import { addItem } from '../../redux/cart/slice';
import { useAppDispatch } from '../../redux/hook';
import './productAdd.scss';

const ProductAdd: React.FC = () => {
	const [title, setTitle] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [imageUrl, setImgUrl] = React.useState('');
	const [price, setPrice] = React.useState('');
	const dispatch = useAppDispatch();

	const handleAction = () => {
		dispatch(addItem({ title, desc, imageUrl, price }));
		setTitle('');
		setDesc('');
		setImgUrl('');
		setPrice('');
	};

	console.log(title);
	console.log(desc);
	console.log(imageUrl);
	console.log(price);

	return (
		<div className="wrapper-productAdd">
			<div className="productAdd">
				<label htmlFor="productTitle" className="red-circle">
					Наименование товара
				</label>
				<input
					id="productTitle"
					type="text"
					placeholder="Введите наименование товара"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="productDescr">Описание товара</label>
				<textarea
					id="productDescr"
					placeholder="Введите описание товара"
					name="desc"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}></textarea>

				<label htmlFor="productURL" className="red-circle">
					Ссылка на изображение товара
				</label>
				<input
					id="productURL"
					type="text"
					placeholder="Введите ссылку"
					name="imageUrl"
					value={imageUrl}
					onChange={(e) => setImgUrl(e.target.value)}
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
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button onClick={() => handleAction()}>Добавить товар</button>
			</div>
		</div>
	);
};

export default ProductAdd;
