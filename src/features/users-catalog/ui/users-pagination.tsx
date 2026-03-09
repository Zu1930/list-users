import { Flex, Group, NativeSelect, Pagination, Text } from '@mantine/core'
import type { FC } from 'react'
import { PAGE_LIMIT_OPTIONS, type LimitPagination } from '../model/constants'

interface UsersPaginationProps {
	total: number
	totalPages: number
	page: number
	limit: LimitPagination
	onPageChange: (page: number) => void
	onLimitChange: (limit: LimitPagination) => void
}

const isLimitPagination = (value: string): value is LimitPagination =>
	PAGE_LIMIT_OPTIONS.includes(value as LimitPagination)

export const UsersPagination: FC<UsersPaginationProps> = ({
	total,
	totalPages,
	page,
	limit,
	onPageChange,
	onLimitChange
}) => {
	return (
		<Flex
			justify="space-between"
			align="center"
			wrap="wrap"
			gap="sm"
		>
			<Text size="sm">Найдено пользователей: {total}</Text>
			<Group gap="sm">
				<NativeSelect
					size="xs"
					data={PAGE_LIMIT_OPTIONS}
					value={limit}
					onChange={(event) => {
						const nextLimit = event.currentTarget.value
						if (isLimitPagination(nextLimit)) {
							onLimitChange(nextLimit)
						}
					}}
				/>
				<Pagination
					total={totalPages}
					value={page}
					onChange={onPageChange}
				/>
			</Group>
		</Flex>
	)
}
