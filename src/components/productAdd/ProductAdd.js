import './productAdd.scss';

const ProductAdd = () => {
	return (
		<form action="#" className="productAdd">
			<label htmlFor="#productTitle">Наименование товара</label>
			<input
				id="productTitle"
				name=""
				type="text"
				placeholder="Введите наименование товара"
			/>

			<label htmlFor="#productDescr">Описание товара</label>
			<textarea
				id="productDescr"
				type="text"
				placeholder="Введите описание товара"
			></textarea>

			<label htmlFor="#productURL">Ссылка на изображение товара</label>
			<input id="productURL" type="text" placeholder="Введите ссылку" />

			<label htmlFor="#productPrice">Цена товара</label>
			<input id="productPrice" type="number" placeholder="Введите цену" />

			<button type="submit" className="btn_active">
				Добавить товар
			</button>
		</form>
	);
};

export default ProductAdd;
