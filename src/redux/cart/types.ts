export type CartItem = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
};

export interface CartSliceState {
	items: CartItem[];
}
