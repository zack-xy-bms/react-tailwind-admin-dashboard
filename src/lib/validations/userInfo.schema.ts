import { z } from 'zod'

export const platforms = ['facebook', 'x', 'linkedin', 'instagram'] as const

export const UserInfoSchema = z.object({
  firstname: z.string(),
  lastname: z.string().min(1, 'Last name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().regex(/^\d+$/).nullable(),
  bio: z.string().max(500).nullable(),
  location: z.string().max(100).nullable().optional(),
  socialMedia: z.array(z.object({
    platform: z.string().max(100),
    icon: z.enum(platforms),
    url: z.url('Invalid URL'),
  })),
})
