import { z } from 'zod'

export const PlATFORMS = ['facebook', 'x.com', 'linkedin', 'instagram'] as const

export const userInfoSchema = z.object({
  firstname: z.string().min(2, {
    message: 'firstname must be at least 2 characters.',
  }).max(15, {
    message: 'firstname must less than 15 characters.',
  }),
  lastname: z.string().min(2, {
    message: 'lastname must be at least 2 characters.',
  }).max(15, {
    message: 'lastname must less than 15 characters.',
  }),
  email: z.email('Invalid email address'),
  phone: z.string().regex(/^\d+$/, 'Invalid phone number'),
  bio: z.string().max(500),
  socialLinks: z.array(z.object({
    platform: z.enum(PlATFORMS),
    link: z.url(),
  })),
})

export type UserInfo = z.infer<typeof userInfoSchema>
