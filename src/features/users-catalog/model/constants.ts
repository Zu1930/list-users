export const PAGE_LIMIT_OPTIONS = ['10', '20', '50', '100'] as const

export type LimitPagination = (typeof PAGE_LIMIT_OPTIONS)[number]

export const MIN_LOADING_MS = 350
export const SKELETON_CARDS_COUNT = 8
