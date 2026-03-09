# User Catalog (React + TypeScript)

Тестовое задание: страница-каталог пользователей на базе публичного API DummyJSON.

## Что реализовано

- Список пользователей с основной информацией:
  - имя и фамилия
  - email
  - аватар
  - телефон
  - возраст
- Поиск по имени через `GET /users/search?q=...`
- Пагинация с учетом `total`, `skip`, `limit`
- Выбор размера страницы (`10 / 20 / 50 / 100`)
- Обработка ошибок и состояние загрузки

## Стек

- React
- TypeScript
- Vite
- Mantine UI

## API

- `GET /users?limit=10&skip=0`
- `GET /users/search?q=Emily&limit=10&skip=0`

Документация: https://dummyjson.com/docs/users

## Запуск проекта

### 1. Установка зависимостей

```bash
npm install
```

### 2. Переменные окружения

Создай `.env` в корне проекта:

```env
VITE_BASE_URL=https://dummyjson.com
```

Если переменная не задана, используется fallback `https://dummyjson.com`.

### 3. Запуск в режиме разработки

```bash
npm run dev
```

### 4. Проверка линтером

```bash
npm run lint
```

### 5. Production-сборка

```bash
npm run build
```
