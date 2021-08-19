import { Food } from "src/model/Food";

export const Foods: Food[] = [
    {
		name: 'Chocolate Laptop Hp 15-db1200ny cu procesor AMD Ryzen',
		type: 'Food_Group_1',
		description: 'You think it is a laptop but it tastes better... Chocolate Laptop',
		alergies: ['Nuts', 'Lactose'],
		taste: 'Great',
		season: 'All',
		weightInKg: 2,
		url: 'https://placeholder.com/200',
		stock: 100,
		price: 100,
		currency: 'Lei',
		reviews: 'star: 4, reviewers: [\'andra07\', \'test\']',
		order: 1,
	},
	{
		name: 'Cold Burger',
		type: 'Food_Group_1',
		description: 'Cold is the way to eat it',
		alergies: ['Lactose'],
		taste: 'Bitter',
		season: 'Spring',
		url: 'https://placeholder.com/50',
		weightInKg: 0.3,
		stock: 3,
		price: 1000,
		currency: 'Lei',
		reviews: 'star: 2, reviewers: [\'andra07\']',
		order: 2,
	}
];