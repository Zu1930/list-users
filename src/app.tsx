import { AppShell } from '@mantine/core'
import type { FC } from 'react'

import { UsersCatalog } from '@/features/users-catalog/ui/users-catalog'

export const App: FC = () => {
	return (
		<AppShell
			padding="md"
			header={{ height: 60 }}
		>
			<UsersCatalog />
		</AppShell>
	)
}
