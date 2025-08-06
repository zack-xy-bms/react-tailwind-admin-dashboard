import type { z } from 'zod'
import type { platforms, UserInfoSchema } from '@/lib/validations'

export type UserInfos = z.infer<typeof UserInfoSchema>

export type PlatformIcon = typeof platforms[number]
