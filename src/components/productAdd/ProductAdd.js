import { useState, useEffect } from 'react';
import './productAdd.scss';

const ProductAdd = (props) => {
	//constructor(props) {
	//	super(props);
	//	this.state = {
	//		title: '',
	//		desc: '',
	//		link: '',
	//		price: '',
	//	};
	//}

	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [link, setLink] = useState('');
	const [price, setPrice] = useState('');

	const onValueChange = (e) => {
		switch (e.target.name) {
			case 'title':
				setTitle(e.target.value);
				break;
			case 'desc':
				setDesc(e.target.value);
				break;
			case 'link':
				setLink(e.target.value);
				break;
			case 'price':
				setPrice(e.target.value);
				break;
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (title.length && desc.length && link.length && price.length) {
			props.onAdd(title, desc, link, price);

			setTitle('');
			setDesc('');
			setLink('');
			setPrice('');
		} else {
			alert('Заполните данные');
		}
	};

	//const { title, desc, link, price } = this.state;
	return (
		<div className="wrapper-productAdd">
			<form action="#" className="productAdd" onSubmit={onSubmit}>
				<label htmlFor="#productTitle">Наименование товара</label>
				<input
					id="productTitle"
					name="title"
					value={title}
					onChange={onValueChange}
					type="text"
					placeholder="Введите наименование товара"
				/>

				<label htmlFor="#productDescr">Описание товара</label>
				<textarea
					name="desc"
					value={desc}
					onChange={onValueChange}
					id="productDescr"
					type="text"
					placeholder="Введите описание товара"
				></textarea>

				<label htmlFor="#productURL">Ссылка на изображение товара</label>
				<input
					id="productURL"
					type="text"
					placeholder="Введите ссылку"
					name="link"
					value={link}
					onChange={onValueChange}
				/>

				<label htmlFor="#productPrice">Цена товара</label>
				<input
					id="productPrice"
					type="number"
					placeholder="Введите цену"
					name="price"
					value={price}
					onChange={onValueChange}
				/>

				<button type="submit">Добавить товар</button>
			</form>
		</div>
	);
};

export default ProductAdd;
