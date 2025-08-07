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
import { FacebookIcon, Icons, InstagramIcon, LinkedinIcon, XLogoIcon } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function UserMetaCard(): React.ReactElement {
  // const { isOpen, openModal, closeModal } = useModal()
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
                Zack Zheng
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
              <a
                href="https://www.facebook.com/PimjoHQ"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <FacebookIcon width={20} height={20} />
              </a>

              <a
                href="https://x.com/PimjoHQ"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <XLogoIcon width={20} height={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/pimjo"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <LinkedinIcon width={20} height={20} />
              </a>

              <a
                href="https://instagram.com/PimjoHQ"
                target="_blank"
                rel="noopener"
                className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <InstagramIcon width={20} height={20} />
              </a>
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
    </>
  )
}
