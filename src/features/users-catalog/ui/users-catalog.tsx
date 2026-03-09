import { AppShell, Grid, ScrollArea, Stack } from '@mantine/core'
import type { FC } from 'react'
import { UserCard } from '@/entities'
import { SearchBar } from './search-bar'
import { UsersPagination } from './users-pagination'
import { ErrorNotice, UsersSkeletonGrid } from '@/shared'
import { SKELETON_CARDS_COUNT } from '../model/constants'
import { useUsersCatalog } from '../model/use-users-catalog'

const { Main } = AppShell

export const UsersCatalog: FC = () => {
	const {
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
	} = useUsersCatalog()

	return (
		<Main style={{ overflowX: 'hidden' }}>
			<Stack gap="md">
				{isError && <ErrorNotice message={errorMessage} />}
				<SearchBar
					value={queryInput}
					onChange={setQueryInput}
					onSubmit={submitSearch}
				/>

				<ScrollArea
					h="70vh"
					w="100%"
					scrollbars="y"
					offsetScrollbars
				>
					{loading ? (
						<UsersSkeletonGrid count={SKELETON_CARDS_COUNT} />
					) : (
						<Grid gutter="md">
							{users.map((user) => (
								<Grid.Col
									key={user.id}
									span={{ base: 12, sm: 6, lg: 4, xl: 3 }}
								>
									<UserCard user={user} />
								</Grid.Col>
							))}
						</Grid>
					)}
				</ScrollArea>

				<UsersPagination
					total={total}
					totalPages={totalPages}
					page={page}
					limit={limitPagination}
					onPageChange={setPage}
					onLimitChange={changeLimit}
				/>
			</Stack>
		</Main>
	)
}
