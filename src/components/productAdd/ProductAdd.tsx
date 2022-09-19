import React from 'react';

import { addItem } from '../../redux/cart/slice';
import { useAppDispatch } from '../../redux/hook';
import './productAdd.scss';

const ProductAdd = () => {
	const dispatch = useAppDispatch();
	const [title, setTitle] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [imageUrl, setImgUrl] = React.useState('');
	const [price, setPrice] = React.useState('');

	//VALID

	//при заходе в инпут, поменяется на true
	const [titleDirty, setTitleDirty] = React.useState(false);
	const [descDirty, setDescDirty] = React.useState(false);
	const [imageUrlDirty, setImageUrlDirty] = React.useState(false);
	const [priceDirty, setPriceDirty] = React.useState(false);

	//ошибки
	const [titleError, setTitleError] = React.useState('Поле является обязательным');
	const [descError, setDescError] = React.useState('Поле является обязательным');
	const [linkError, setLinkError] = React.useState('Поле является обязательным');
	const [priceError, setPriceError] = React.useState('Поле является обязательным');

	//Состояние отвечает за то что валидна форма или нет
	const [formValid, setFormValid] = React.useState(false);

	//пока false, кнопка будет true
	React.useEffect(() => {
		if (titleError || descError || linkError || priceError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [titleError, descError, linkError, priceError]);

	//функция которая при уходе из фокуса, выведет ошибку
	const blurHandler = (e: any) => {
		switch (e.target.name) {
			case 'title':
				setTitleDirty(true);
				break;
			case 'desc':
				setDescDirty(true);
				break;
			case 'imageUrl':
				setImageUrlDirty(true);
				break;
			case 'price':
				setPriceDirty(true);
				break;
			default:
				console.log(new Error());
		}
	};

	//функция управляет импутами, а так же делает их проверку
	const onValueChange = (e: any) => {
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

			case 'imageUrl':
				setImgUrl(e.target.value);
				if (!e.target.value) {
					setLinkError('Поле является обязательным');
				} else {
					setLinkError('');
				}
				break;

			case 'price':
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

	//VALID

	const handleAction = () => {
		if (formValid) {
			dispatch(addItem({ title, desc, imageUrl, price }));
			setTitle('');
			setDesc('');
			setImgUrl('');
			setPrice('');
		}
		setFormValid(false);
		setTitleDirty(false);
		setDescDirty(false);
		setImageUrlDirty(false);
		setPriceDirty(false);

		setTitleError('Поле является обязательным');
		setDescError('Поле является обязательным');
		setLinkError('Поле является обязательным');
		setPriceError('Поле является обязательным');
	};

	return (
		<div className="wrapper-productAdd">
			<div className="productAdd">
				<label htmlFor="productTitle" className="red-circle">
					Наименование товара
				</label>
				{titleDirty && titleError && (
					<div style={{ color: 'red', fontSize: '0.625rem', marginBottom: '5px' }}>
						{titleError}
					</div>
				)}
				<input
					id="productTitle"
					type="text"
					placeholder="Введите наименование товара"
					name="title"
					value={title}
					onBlur={(e) => blurHandler(e)}
					onChange={(e) => onValueChange(e)}
				/>

				<label htmlFor="productDescr">Описание товара</label>
				{descDirty && descError && (
					<div style={{ color: 'red', fontSize: '0.625rem', marginBottom: '5px' }}>{descError}</div>
				)}
				<textarea
					id="productDescr"
					placeholder="Введите описание товара"
					name="desc"
					value={desc}
					onBlur={(e) => blurHandler(e)}
					onChange={(e) => onValueChange(e)}></textarea>

				<label htmlFor="productURL" className="red-circle">
					Ссылка на изображение товара
				</label>
				{imageUrlDirty && linkError && (
					<div style={{ color: 'red', fontSize: '0.625rem', marginBottom: '5px' }}>{linkError}</div>
				)}
				<input
					id="productURL"
					type="text"
					placeholder="Введите ссылку"
					name="imageUrl"
					value={imageUrl}
					onBlur={(e) => blurHandler(e)}
					onChange={(e) => onValueChange(e)}
				/>

				<label htmlFor="productPrice" className="red-circle">
					Цена товара
				</label>
				{priceDirty && priceError && (
					<div style={{ color: 'red', fontSize: '0.625rem', marginBottom: '5px' }}>
						{priceError}
					</div>
				)}

				<input
					id="productPrice"
					type="number"
					placeholder="Введите цену"
					name="price"
					value={price}
					onBlur={(e) => blurHandler(e)}
					onChange={(e) => onValueChange(e)}
				/>

				<button disabled={!formValid} onClick={() => handleAction()}>
					Добавить товар
				</button>
			</div>
		</div>
	);
};

export default ProductAdd;
