import type { UserInfos } from '@/types'
import { useState } from 'react'
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
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function UserInfoCard(): React.ReactElement {
  // const { isOpen, openModal, closeModal } = useModal()
  const [userInfo] = useState<Omit<UserInfos, 'socialMedia'>>({
    firstname: 'Lisa',
    lastname: 'Wang',
    email: 'lisa.wang@example.com',
    phone: '+86 123 4567 890',
    bio: 'Team Manager',
  })
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                First Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userInfo.firstname}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Last Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userInfo.lastname}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Email address
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userInfo.email}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Phone
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userInfo.phone}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Bio
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userInfo.bio}
              </p>
            </div>
          </div>
        </div>

        <Dialog>
          <form className="flex flex-col">
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
              <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                <div>
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Social Links
                  </h5>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div>
                      <Label>Facebook</Label>
                      <Input
                        type="text"
                        value="https://www.facebook.com/PimjoHQ"
                      />
                    </div>

                    <div>
                      <Label>X.com</Label>
                      <Input type="text" value="https://x.com/PimjoHQ" />
                    </div>

                    <div>
                      <Label>Linkedin</Label>
                      <Input
                        type="text"
                        value="https://www.linkedin.com/company/pimjo"
                      />
                    </div>

                    <div>
                      <Label>Instagram</Label>
                      <Input type="text" value="https://instagram.com/PimjoHQ" />
                    </div>
                  </div>
                </div>
                <div className="mt-7">
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                    Personal Information
                  </h5>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div className="col-span-2 lg:col-span-1">
                      <Label>First Name</Label>
                      <Input type="text" value="Musharof" />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>Last Name</Label>
                      <Input type="text" value="Chowdhury" />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>Email Address</Label>
                      <Input type="text" value="randomuser@pimjo.com" />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>Phone</Label>
                      <Input type="text" value="+09 363 398 46" />
                    </div>

                    <div className="col-span-2">
                      <Label>Bio</Label>
                      <Input type="text" value="Team Manager" />
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
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  )
}
