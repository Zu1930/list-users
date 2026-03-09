export interface User {
	id: number
	firstName: string
	lastName: string
	email: string
	image: string
	age: number
	phone: string
	birthDate: string
}

export interface UsersResponse {
	users: User[]
	total: number
	skip: number
	limit: number
}

export interface FetchUsersParams {
	baseUrl: string
	limit: number
	page: number
	query: string
}

export interface UserCardProps {
	user: User
}
