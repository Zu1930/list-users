import type { FetchUsersParams, UsersResponse } from '../model/types'

export const fetchUsers = async ({
	baseUrl,
	limit,
	page,
	query
}: FetchUsersParams): Promise<UsersResponse> => {
	const trimmedQuery = query.trim()
	const url = new URL(trimmedQuery ? '/users/search' : '/users', baseUrl)
	url.searchParams.set('limit', String(limit))
	url.searchParams.set('skip', String((page - 1) * limit))

	if (trimmedQuery) {
		url.searchParams.set('q', trimmedQuery)
	}

	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`Ошибка загрузки (${response.status})`)
	}

	return (await response.json()) as UsersResponse
}
