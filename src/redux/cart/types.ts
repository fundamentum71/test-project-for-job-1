export type CartItem = {
	id: string;
	title: string;
	desc: string;
	price: number;
	imageUrl: string;
};

export interface CartSliceState {
	cart: CartItem[];
}
