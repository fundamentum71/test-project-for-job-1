import React from 'react';
import { setSort } from '../../redux/filter/slice';
import { SortPropertyEnum, Sort as SortType } from '../../redux/filter/types';
import { useAppDispatch } from '../../redux/hook';
import styles from './productSort.module.scss';

type PopupItem = {
	name: string;
	sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
	path: Node[];
};

type SortPopupProps = {
	value: SortType;
};

export const popupList: PopupItem[] = [
	{ name: 'По умолчанию', sortProperty: SortPropertyEnum.DEFAULT },
	{ name: 'По возр. цены', sortProperty: SortPropertyEnum.PRICE_DESC },
	{ name: 'По убыв. цены', sortProperty: SortPropertyEnum.PRICE_ASC },
];

const ProductSort: React.FC<SortPopupProps> = ({ value }) => {
	const dispatch = useAppDispatch();

	const [isVisablePopup, setIsVisablePopup] = React.useState(false);

	const sortRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as PopupClick;
			if (sortRef.current && !_event.path.includes(sortRef.current)) {
				setIsVisablePopup(false);
			}
		};
		document.body.addEventListener('click', handleClickOutside);
		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);

	const onClickListItem = (obj: PopupItem) => {
		dispatch(setSort(obj));
		setIsVisablePopup(false);
	};

	return (
		<div ref={sortRef} className={styles.sort}>
			<div className={styles.sort__wrapper}>
				<div className={styles.sort__label}>
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
							fill="#2C2C2C"
						/>
					</svg>
					<span onClick={() => setIsVisablePopup(!isVisablePopup)}>{value.name}</span>
				</div>

				{isVisablePopup && (
					<div className={styles.sort__popup}>
						<ul>
							{popupList.map((item, i) => (
								<li
									className={styles.sort__popup_item}
									key={i}
									onClick={() => onClickListItem(item)}>
									{item.name}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductSort;
