import { Notification } from '@mantine/core'
import { OctagonAlert } from 'lucide-react'
import type { FC } from 'react'

interface ErrorNoticeProps {
	message: string
}

export const ErrorNotice: FC<ErrorNoticeProps> = ({ message }) => {
	return (
		<Notification
			color="red"
			title="Что-то пошло не так"
			icon={<OctagonAlert />}
			mb="md"
		>
			{message}
		</Notification>
	)
}
