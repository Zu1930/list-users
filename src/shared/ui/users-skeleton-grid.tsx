import { Card, Grid, Group, Skeleton, Stack } from '@mantine/core'
import type { FC } from 'react'

interface UsersSkeletonGridProps {
	count: number
}

export const UsersSkeletonGrid: FC<UsersSkeletonGridProps> = ({ count }) => {
	return (
		<Grid gutter="md">
			{Array.from({ length: count }).map((_, index) => (
				<Grid.Col
					key={index}
					span={{ base: 12, sm: 6, lg: 4, xl: 3 }}
				>
					<Card
						shadow="sm"
						padding="md"
						radius="md"
						withBorder
					>
						<Group
							align="flex-start"
							wrap="nowrap"
						>
							<Skeleton
								radius="lg"
								h={96}
								w={96}
							/>
							<Stack
								gap={6}
								style={{ minWidth: 0, flex: 1 }}
							>
								<Skeleton
									h={18}
									w="70%"
								/>
								<Skeleton
									h={14}
									w="100%"
								/>
								<Skeleton
									h={14}
									w="85%"
								/>
								<Skeleton
									h={14}
									w="60%"
								/>
							</Stack>
						</Group>
					</Card>
				</Grid.Col>
			))}
		</Grid>
	)
}
