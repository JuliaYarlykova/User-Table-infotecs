export enum Titles {
	LASTNAME = 'Фамилия',
	FIRSTNAME = 'Имя',
	MAIDENNAME = 'Отчество',
	AGE = 'Возраст',
	GENDER = 'Пол',
	PHONENUMBER = 'Номер телефона',
	ADRESS = 'Адрес',
}

export type ITitle = {
	title: Titles
	value: string
}