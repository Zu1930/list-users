import { useEffect, useState } from 'react'
import { fetchUsers, type User } from '@/entities'
import { BASE_URL } from '@/shared'
import { getCatalogErrorMessage } from './get-catalog-error-message'
import { MIN_LOADING_MS, type LimitPagination } from './constants'

export const useUsersCatalog = () => {
	const [users, setUsers] = useState<User[]>([])
	const [isError, setIsError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [loading, setLoading] = useState(false)

	const [queryInput, setQueryInput] = useState('')
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(1)
	const [limitPagination, setLimitPagination] = useState<LimitPagination>('10')
	const [total, setTotal] = useState(0)

	const limit = Number(limitPagination)
	const totalPages = Math.max(1, Math.ceil(total / limit))

	useEffect(() => {
		let isActive = true
		const requestStartedAt = Date.now()
		const loadUsers = async () => {
			setLoading(true)
			setIsError(false)

			try {
				const data = await fetchUsers({
					baseUrl: BASE_URL,
					limit,
					page,
					query
				})

				if (!isActive) {
					return
				}

				setUsers(data.users)
				setTotal(data.total)
			} catch (error) {
				if (!isActive) {
					return
				}

				setUsers([])
				setTotal(0)
				setIsError(true)
				setErrorMessage(getCatalogErrorMessage(error))
			} finally {
				const elapsedMs = Date.now() - requestStartedAt
				const remainingMs = MIN_LOADING_MS - elapsedMs
				if (remainingMs > 0) {
					await new Promise((resolve) => setTimeout(resolve, remainingMs))
				}

				if (isActive) {
					setLoading(false)
				}
			}
		}

		void loadUsers()

		return () => {
			isActive = false
		}
	}, [limit, page, query])

	const submitSearch = () => {
		setPage(1)
		setQuery(queryInput.trim())
	}

	const changeLimit = (nextLimit: LimitPagination) => {
		setPage(1)
		setLimitPagination(nextLimit)
	}

	return {
		users,
		isError,
		errorMessage,
		loading,
		total,
		page,
		totalPages,
		limitPagination,
		queryInput,
		setQueryInput,
		setPage,
		submitSearch,
		changeLimit
	}
}
