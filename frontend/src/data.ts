import { Food } from "./app/components/shared/food.model"
import { Tag } from "./app/components/shared/tag.model"
import { User } from "./app/components/shared/user.model"

export const sample_foods: Food[] = [
	{
		"id": 1,
		"name": "lobortis mauris.",
		"price": 21.88,
		"cookTime": "40-50",
		"favorite": false,
		"origins": ["Christmas Island"],
		"stars": 4.1,
		"imageUrl": "https://picsum.photos/id/220/2400/1600",
		"tags": ["stews", "cereals"]
	},
	{
		"id": 2,
		"name": "et, magna.",
		"price": 14.31,
		"cookTime": "40-50",
		"favorite": true,
		"origins": ["Norway"],
		"stars": 4.3,
		"imageUrl": "https://picsum.photos/id/127/2400/1600",
		"tags": ["stews", "sandwiches", "pies"]
	},
	{
		"id": 3,
		"name": "gravida nunc",
		"price": 36.16,
		"cookTime": "40-50",
		"favorite": true,
		"origins": ["Chile"],
		"stars": 4.1,
		"imageUrl": "https://picsum.photos/id/98/2400/1600",
		"tags": ["soups", "pies"]
	},
	{
		"id": 4,
		"name": "Proin non",
		"price": 29.29,
		"cookTime": "40-50",
		"favorite": true,
		"origins": ["Saint Helena", "France"],
		"stars": 4.0,
		"imageUrl": "https://picsum.photos/id/356/2400/1600",
		"tags": ["salads", "soups", "pies"]
	},
	{
		"id": 5,
		"name": "senectus et",
		"price": 3.76,
		"cookTime": "40-50",
		"favorite": false,
		"origins": ["Saint Martin"],
		"stars": 4.2,
		"imageUrl": "https://picsum.photos/id/290/2400/1600",
		"tags": ["desserts", "stews"]
	},
	{
		"id": 6,
		"name": "a, magna.",
		"price": 13.28,
		"cookTime": "40-50",
		"favorite": false,
		"origins": ["Sri Lanka"],
		"stars": 4.0,
		"imageUrl": "https://picsum.photos/id/543/2400/1600",
		"tags": ["soups"]
	},
	{
		"id": 7,
		"name": "consectetuer adipiscing",
		"price": 12.49,
		"cookTime": "40-50",
		"favorite": false,
		"origins": ["Solomon Islands"],
		"stars": 3.9,
		"imageUrl": "https://picsum.photos/id/124/2400/1600",
		"tags": ["stews", "sandwiches", "soups"]
	},
	{
		"id": 8,
		"name": "mauris id",
		"price": 14.68,
		"cookTime": "40-50",
		"favorite": false,
		"origins": ["Saint Martin"],
		"stars": 3.5,
		"imageUrl": "https://picsum.photos/id/652/2400/1600",
		"tags": ["sandwiches", "cereals"]
	},
	{
		"id": 9,
		"name": "senectus et",
		"price": 10.15,
		"cookTime": "40-50",
		"favorite": true,
		"origins": ["Finland"],
		"stars": 3.9,
		"imageUrl": "https://picsum.photos/id/419/2400/1600",
		"tags": ["pies"]
	},
	{
		"id": 10,
		"name": "mi fringilla",
		"price": 37.50,
		"cookTime": "40-50",
		"favorite": false,
		"origins": ["Belgium"],
		"stars": 4.3,
		"imageUrl": "https://picsum.photos/id/367/2400/1600",
		"tags": ["cereals", "soups"]
	}
]

export const sample_tags: Tag[] = [
	{ name: 'all', count: 10 },
	{ name: 'stews', count: 4 },
	{ name: 'cereals', count: 3 },
	{ name: 'soups', count: 5 },
	{ name: 'pies', count: 4 },
	{ name: 'sandwiches', count: 3 },
	{ name: 'desserts', count: 1 },
	{ name: 'salads', count: 1 },
]

export const sample_users: User[] = [
	{
		id: 1,
		name: "John Doe",
		email: "elge.nicolas@gmail.com",
		password: "azertyuiop",
		address: "Toronto On",
		token: '',
		isAdmin: true,
	},
	{
		id: 2,
		name: "Jane Doe",
		email: "jane@gmail.com",
		password: "azertyuiop",
		address: "Shanghai",
		token: '',
		isAdmin: false,
	}
]