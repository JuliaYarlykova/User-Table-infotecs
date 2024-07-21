export type Hair = {
	color: string
	type: string
}

export type Adress = {
	address: string
	city: string
	state: string
	stateCode: string
	postalCode: string
	country: string
}

export type User = {
	id: number
	firstName: string
	lastName: string
	maidenName: string
	age: number
	gender: string
	email: string
	phone: string
	birthDate: string
	image: string
	address: Adress
}

export type UsersList = {
	users: User[]
}
