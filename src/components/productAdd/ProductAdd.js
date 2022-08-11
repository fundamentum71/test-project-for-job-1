import { useEffect, useState } from 'react';
import './productAdd.scss';

const ProductAdd = (props) => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [link, setLink] = useState('');
	const [price, setPrice] = useState('');

	//при заходе в инпут, поменяется на true
	const [titleDirty, setTitleDirty] = useState(false);
	const [descDirty, setDescDirty] = useState(false);
	const [linkDirty, setLinkDirty] = useState(false);
	const [priceDirty, setPriceDirty] = useState(false);

	//ошибки
	const [titleError, setTitleError] = useState('Поле является обязательным');
	const [descError, setDescError] = useState('Поле является обязательным');
	const [linkError, setLinkError] = useState('Поле является обязательным');
	const [priceError, setPriceError] = useState('Поле является обязательным');

	//Состояние отвечает за то что валидна форма или нет
	const [formValid, setFormValid] = useState(false);

	//пока false, кнопка будет true
	useEffect(() => {
		if (titleError || descError || linkError || priceError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [titleError, descError, linkError, priceError]);

	//функция управляет импутами, а так же делает их проверку
	const onValueChange = (e) => {
		switch (e.target.name) {
			case 'title':
				setTitle(e.target.value);
				if (e.target.value.length < 2 || e.target.value.length > 16) {
					setTitleError('Название должно быть min=2, max=16 символов');
					if (!e.target.value) {
						setTitleError('Поле является обязательным');
					}
				} else {
					setTitleError('');
				}
				break;

			case 'desc':
				setDesc(e.target.value);
				if (e.target.value.length < 2 || e.target.value.length > 180) {
					setDescError('Описание должно быть min=2, max=180 символов ');
					if (!e.target.value) {
						setDescError('Поле является обязательным');
					}
				} else {
					setDescError('');
				}
				break;

			case 'link':
				setLink(e.target.value);
				if (!e.target.value) {
					setLinkError('Поле является обязательным');
				} else {
					setLinkError('');
				}
				break;

			case 'price':
				setPrice(e.target.value);
				setPrice(e.target.value);
				if (!e.target.value) {
					setPriceError('Поле является обязательным');
				} else {
					setPriceError('');
				}

				break;

			default:
				console.log(new Error());
		}
	};
	//функция которая при уходе из фокуса, выведет ошибку
	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'title':
				setTitleDirty(true);
				break;
			case 'desc':
				setDescDirty(true);
				break;
			case 'link':
				setLinkDirty(true);
				break;
			case 'price':
				setPriceDirty(true);
				break;
			default:
				console.log(new Error());
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

	return (
		<div className="wrapper-productAdd">
			<form action="#" className="productAdd" onSubmit={onSubmit}>
				<label htmlFor="#productTitle" className="red-circle">
					Наименование товара
				</label>
				{titleDirty && titleError && (
					<div
						style={{ color: 'red', fontSize: '0.625rem', marginBottom: '10px' }}
					>
						{titleError}
					</div>
				)}
				<input
					id="productTitle"
					name="title"
					value={title}
					onChange={onValueChange}
					onBlur={(e) => blurHandler(e)}
					type="text"
					placeholder="Введите наименование товара"
				/>

				<label htmlFor="#productDescr">Описание товара</label>
				{descDirty && descError && (
					<div
						style={{ color: 'red', fontSize: '0.625rem', marginBottom: '10px' }}
					>
						{descError}
					</div>
				)}
				<textarea
					name="desc"
					value={desc}
					onChange={onValueChange}
					onBlur={(e) => blurHandler(e)}
					id="productDescr"
					type="text"
					placeholder="Введите описание товара"
				></textarea>

				<label htmlFor="#productURL" className="red-circle">
					Ссылка на изображение товара
				</label>
				{linkDirty && linkError && (
					<div
						style={{ color: 'red', fontSize: '0.625rem', marginBottom: '10px' }}
					>
						{linkError}
					</div>
				)}
				<input
					id="productURL"
					type="text"
					placeholder="Введите ссылку"
					name="link"
					value={link}
					onChange={onValueChange}
					onBlur={(e) => blurHandler(e)}
				/>

				<label htmlFor="#productPrice" className="red-circle">
					Цена товара
				</label>
				{priceDirty && priceError && (
					<div
						style={{ color: 'red', fontSize: '0.625rem', marginBottom: '10px' }}
					>
						{priceError}
					</div>
				)}
				<input
					id="productPrice"
					type="number"
					placeholder="Введите цену"
					name="price"
					value={price}
					onChange={onValueChange}
					onBlur={(e) => blurHandler(e)}
				/>

				<button disabled={!formValid} type="submit">
					Добавить товар
				</button>
			</form>
		</div>
	);
};

export default ProductAdd;
