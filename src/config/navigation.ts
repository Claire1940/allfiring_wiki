import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Gift,
  CalendarClock,
  Smartphone,
  Sparkles,
  RotateCcw,
  Trophy,
  Users,
} from 'lucide-react'

export interface NavigationItem {
	key: string
	path: string
	icon: LucideIcon
	isContentType: boolean
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'codes', path: '/codes', icon: Gift, isContentType: true },
	{ key: 'release', path: '/release', icon: CalendarClock, isContentType: true },
	{ key: 'platforms', path: '/platforms', icon: Smartphone, isContentType: true },
	{ key: 'gacha', path: '/gacha', icon: Sparkles, isContentType: true },
	{ key: 'reroll', path: '/reroll', icon: RotateCcw, isContentType: true },
	{ key: 'tier', path: '/tier', icon: Trophy, isContentType: true },
	{ key: 'characters', path: '/characters', icon: Users, isContentType: true },
]

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
)

export type ContentType = (typeof CONTENT_TYPES)[number]

export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
