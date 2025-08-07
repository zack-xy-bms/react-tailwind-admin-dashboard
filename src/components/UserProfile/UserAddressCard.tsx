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

// import { useModal } from '@/hooks/useModal'

export default function UserAddressCard(): React.ReactElement {
  // const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Address
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Country
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  United States.
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  City/State
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  Phoenix, Arizona, United States.
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Postal Code
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  ERT 2489
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  TAX ID
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  AS4568384
                </p>
              </div>
            </div>
          </div>

          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="rounded">
                  <Icons.Pencil size={16} />
                  Edit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>Edit Address</DialogTitle>
                  <DialogDescription>
                    Update your details to keep your profile up-to-date.
                  </DialogDescription>
                </DialogHeader>
                <div className="px-2 overflow-y-auto custom-scrollbar">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div>
                      <Label>Country</Label>
                      <Input type="text" value="United States" />
                    </div>

                    <div>
                      <Label>City/State</Label>
                      <Input type="text" value="Arizona, United States." />
                    </div>

                    <div>
                      <Label>Postal Code</Label>
                      <Input type="text" value="ERT 2489" />
                    </div>

                    <div>
                      <Label>TAX ID</Label>
                      <Input type="text" value="AS4568384" />
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
