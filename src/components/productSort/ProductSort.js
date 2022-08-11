import './productSort.scss';
import arrow from '../../resources/img/arrow.svg';

const ProductSort = () => {
	return (
		<div className="select-container">
			{/*<label htmlFor="selectList" className="select-arrow">
				<img src={arrow} alt="arrow" />
			</label>*/}
			<select className="select-sort" name="sort" id="selectList">
				<option value="def" selected>
					По умолчанию
				</option>
				<option value="max">max</option>
				<option value="min">min</option>
			</select>
		</div>
	);
};

export default ProductSort;
