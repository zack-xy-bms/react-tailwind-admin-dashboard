import type { UserInfo } from '@schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { userInfoSchema } from '@schemas'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { FacebookIcon, Icons, InstagramIcon, LinkedinIcon, XLogoIcon } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'

export default function UserMetaCard(): React.ReactElement {
  // const { isOpen, openModal, closeModal } = useModal()
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<UserInfo>({
    resolver: zodResolver(userInfoSchema),
    mode: 'onChange',
    defaultValues: {
      firstname: 'Wang',
      lastname: 'Lisa',
      email: 'lisa.wang@example.com',
      phone: '+86 12345678',
      bio: 'Team Manager',
      socialLinks: [
        {
          platform: 'facebook',
          link: 'https://www.facebook.com/zackzheng',
        },
        {
          platform: 'x.com',
          link: 'https://x.com/PimjoHQ',
        },
        {
          platform: 'linkedin',
          link: 'https://www.linkedin.com/company/pimjo',
        },
        {
          platform: 'instagram',
          link: 'https://instagram.com/PimjoHQ',
        },
      ],
    },
  })

  function onSubmit(values: UserInfo) {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  function handleDialogToggle(open: boolean) {
    form.clearErrors()
    setIsOpen(open)
  }

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <img src="https://s21.ax1x.com/2025/07/30/pVYjYX6.jpg" alt="user" />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                Lisa Wang
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Team Manager
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Shanghai, China
                </p>
              </div>
            </div>
            <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
              <Button variant="rounded" className="h-12! w-12!" asChild>
                <a
                  href="https://www.facebook.com/PimjoHQ"
                  target="_blank"
                  rel="noopener"
                >
                  <FacebookIcon width={20} height={20} />
                </a>
              </Button>
              <Button variant="rounded" className="h-12! w-12!" asChild>
                <a
                  href="https://x.com/PimjoHQ"
                  target="_blank"
                  rel="noopener"
                >
                  <XLogoIcon width={20} height={20} />
                </a>
              </Button>
              <Button variant="rounded" className="h-12! w-12!" asChild>
                <a
                  href="https://www.linkedin.com/company/pimjo"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedinIcon width={20} height={20} />
                </a>
              </Button>
              <Button variant="rounded" className="h-12! w-12!" asChild>
                <a
                  href="https://instagram.com/PimjoHQ"
                  target="_blank"
                  rel="noopener"
                >
                  <InstagramIcon width={20} height={20} />
                </a>
              </Button>
            </div>
          </div>

          <Dialog onOpenChange={handleDialogToggle} open={isOpen}>
            <DialogTrigger asChild>
              <Button variant="rounded">
                <Icons.Pencil size={16} />
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle>Edit Personal Information</DialogTitle>
                <DialogDescription>
                  Update your details to keep your profile up-to-date.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                    <div>
                      <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                        Social Links
                      </h5>

                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        <div>
                          <FormField
                            control={form.control}
                            name="socialLinks.0.link"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Facebook</FormLabel>
                                <FormControl>
                                  <Input placeholder="Facebook Link" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
                          <FormField
                            control={form.control}
                            name="socialLinks.1.link"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>X.com</FormLabel>
                                <FormControl>
                                  <Input placeholder="X.com Link" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
                          <FormField
                            control={form.control}
                            name="socialLinks.2.link"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Linkedin</FormLabel>
                                <FormControl>
                                  <Input placeholder="Linkedin Link" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
                          <FormField
                            control={form.control}
                            name="socialLinks.3.link"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Instagram</FormLabel>
                                <FormControl>
                                  <Input placeholder="Instagram Link" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-7">
                      <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                        Personal Information
                      </h5>

                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        <div className="col-span-2 lg:col-span-1">
                          <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="Email Address" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input placeholder="Phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="col-span-2">
                          <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                  <Input placeholder="Bio" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button size="lg" variant="outline">Close</Button>
                    </DialogClose>
                    <Button size="lg" type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </>
  )
}
