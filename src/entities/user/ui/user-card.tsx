import { Card, Group, Image, Stack, Text } from '@mantine/core'
import type { FC } from 'react'
import type { UserCardProps } from '../model/types'

export const UserCard: FC<UserCardProps> = ({ user }) => {
	return (
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
				<Image
					src={user.image}
					alt={`${user.firstName} ${user.lastName}`}
					radius="lg"
					h={96}
					w={96}
				/>
				<Stack
					gap={4}
					style={{ minWidth: 0 }}
				>
					<Text
						fw={600}
						lineClamp={1}
					>
						{user.firstName} {user.lastName}
					</Text>
					<Text
						size="sm"
						c="dimmed"
						lineClamp={1}
					>
						{user.email}
					</Text>
					<Text size="sm">Телефон: {user.phone}</Text>
					<Text size="sm">Возраст: {user.age}</Text>
				</Stack>
			</Group>
		</Card>
	)
}
