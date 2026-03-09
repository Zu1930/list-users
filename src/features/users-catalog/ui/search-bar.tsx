import { Button, Flex, Input } from '@mantine/core'
import { Search } from 'lucide-react'
import type { SubmitEventHandler } from 'react'

const { Wrapper } = Input

interface SearchBarProps {
	value: string
	onChange: (value: string) => void
	onSubmit: () => void
}

export const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
	const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Flex gap={10}>
				<Wrapper style={{ flex: 1 }}>
					<Input
						value={value}
						onChange={(event) => onChange(event.currentTarget.value)}
						placeholder="Введите имя"
						leftSection={<Search size={16} />}
					/>
				</Wrapper>
				<Button type="submit">Поиск</Button>
			</Flex>
		</form>
	)
}
