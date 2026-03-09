export const getCatalogErrorMessage = (error: unknown): string => {
	if (error instanceof Error) {
		return error.message
	}

	return 'Не удалось загрузить пользователей'
}
