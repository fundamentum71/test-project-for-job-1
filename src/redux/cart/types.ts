export type CartItem = {
	id: string;
	title: string;
	desc: string;
	price: string;
	imageUrl: string;
};

export type CartItemADD = {
	title: string;
	desc: string;
	price: string;
	imageUrl: string;
};

export interface CartListState {
	list: CartItem[];
}
