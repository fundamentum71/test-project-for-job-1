export enum SortPropertyEnum {
	DEFAULT = 'default',
	PRICE_DESC = 'price',
	PRICE_ASC = '-price',
}

export type Sort = {
	name: string;
	sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
	sort: Sort;
}
