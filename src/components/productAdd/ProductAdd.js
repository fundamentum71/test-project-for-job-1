import { Component } from 'react';
import './productAdd.scss';

class ProductAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			desc: '',
			link: '',
			price: '',
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (
			this.state.title.length &&
			this.state.desc.length &&
			this.state.link.length &&
			this.state.price.length
		) {
			this.props.onAdd(
				this.state.title,
				this.state.desc,
				this.state.link,
				this.state.price
			);

			this.setState({
				title: '',
				desc: '',
				link: '',
				price: '',
			});
		} else {
			alert('Заполните данные');
		}
	};

	render() {
		const { title, desc, link, price } = this.state;
		return (
			<div className="wrapper-productAdd">
				<form action="#" className="productAdd" onSubmit={this.onSubmit}>
					<label htmlFor="#productTitle">Наименование товара</label>
					<input
						id="productTitle"
						name="title"
						value={title}
						onChange={this.onValueChange}
						type="text"
						placeholder="Введите наименование товара"
					/>

					<label htmlFor="#productDescr">Описание товара</label>
					<textarea
						name="desc"
						value={desc}
						onChange={this.onValueChange}
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
						onChange={this.onValueChange}
					/>

					<label htmlFor="#productPrice">Цена товара</label>
					<input
						id="productPrice"
						type="number"
						placeholder="Введите цену"
						name="price"
						value={price}
						onChange={this.onValueChange}
					/>

					<button type="submit">Добавить товар</button>
				</form>
			</div>
		);
	}
}

export default ProductAdd;
