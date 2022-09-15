import './productAdd.scss';

const ProductAdd: React.FC = () => {
	return (
		<div className="wrapper-productAdd">
			<form action="#" className="productAdd">
				<label htmlFor="productTitle" className="red-circle">
					Наименование товара
				</label>
				<input
					id="productTitle"
					name="title"
					type="text"
					placeholder="Введите наименование товара"
				/>

				<label htmlFor="productDescr">Описание товара</label>
				<textarea name="desc" id="productDescr" placeholder="Введите описание товара"></textarea>

				<label htmlFor="productURL" className="red-circle">
					Ссылка на изображение товара
				</label>
				<input id="productURL" type="text" placeholder="Введите ссылку" name="link" />

				<label htmlFor="productPrice" className="red-circle">
					Цена товара
				</label>

				<input id="productPrice" type="number" placeholder="Введите цену" name="price" />
				<button type="submit">Добавить товар</button>
			</form>
		</div>
	);
};

export default ProductAdd;
