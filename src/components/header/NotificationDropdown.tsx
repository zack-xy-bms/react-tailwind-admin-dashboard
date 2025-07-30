import clsx from 'clsx'
import { differenceInHours, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'

export default function NotificationDropdown(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const [notifying, setNotifying] = useState(true)
  const [nofifications] = useState([
    { id: '1', avatar: 'https://s21.ax1x.com/2025/07/30/pVYj7j0.jpg', name: 'Terry Franci', message: 'requests permission to change', type: 'Project - Nganter App', time: '2025-07-29T10:00:00Z' },
    { id: '2', avatar: 'https://s21.ax1x.com/2025/07/30/pVYjG11.jpg', name: 'Alena Franci', message: 'requests permission to change', type: 'Project - Nganter App', time: (new Date(+new Date() - 10 * 60 * 1000)).toISOString() },
    { id: '3', avatar: 'https://s21.ax1x.com/2025/07/30/pVYjqBT.png', name: 'Jocelyn Kenter', message: 'requests permission to change', type: 'Project - Nganter App', time: (new Date(+new Date() - 7 * 24 * 60 * 60 * 1000)).toISOString() },
    { id: '4', avatar: 'https://s21.ax1x.com/2025/07/30/pVYjo3n.jpg', name: 'Jocelyn Kenter', message: 'requests permission to change', type: 'Project - Nganter App', time: (new Date(+new Date() - 60 * 1000)).toISOString() },
    { id: '5', avatar: 'https://s21.ax1x.com/2025/07/30/pVYjI9s.jpg', name: 'Jocelyn Kenter', message: 'requests permission to change', type: 'Project - Nganter App', time: (new Date(+new Date() - 2 * 60 * 1000)).toISOString() },
  ])

  function toggleDropdown(): void {
    setIsOpen(!isOpen)
  }

  const handleOpenChange = (open: boolean) => {
    if (true) {
      setNotifying(false)
    }
    setIsOpen(open)
  }

  const handleItemClick = (event: Event): void => {
    // eslint-disable-next-line no-console
    console.log('item clicked !!', event)
  }
  return (
    <div className="relative">
      <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <button
            className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <span
              className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
                !notifying ? 'hidden' : 'flex'
              }`}
            >
              <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
            </span>
            <Icons.Bell size={20} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-88" align="end" sideOffset={20}>
          <DropdownMenuLabel>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
              <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Notification
              </h5>
              <Button onClick={toggleDropdown} variant="link" size="icon" className="text-gray-500 transition dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 size-8">
                <Icons.X className="size-6" />
              </Button>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup className="max-h-96 overflow-y-auto">
            {nofifications.map(notification => (
              <DropdownMenuItem key={notification.id} className="p-2 text-base text-gray-500 dark:text-gray-400" onSelect={(event: Event) => handleItemClick(event)}>
                <div className="flex gap-3 rounded-lg border-b border-gray-100 p-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5">
                  <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                    <img
                      width={40}
                      height={40}
                      src={notification.avatar}
                      alt="User"
                      className="w-full overflow-hidden rounded-full"
                    />
                    <span className={clsx('absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900', differenceInHours(new Date(), new Date(notification.time)) < 1 ? 'bg-success-500' : 'bg-error-500')}></span>
                  </span>

                  <span className="block">
                    <span className="mb-1.5 block  text-theme-sm text-gray-500 dark:text-gray-400 space-x-1">
                      <span className="font-medium text-gray-800 dark:text-white/90">
                        {notification.name}
                      </span>
                      <span>{notification.message}</span>
                      <span className="font-medium text-gray-800 dark:text-white/90">
                        {notification.type}
                      </span>
                    </span>

                    <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                      <span>{notification.type.split('-')[0]}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>{formatDistanceToNow(new Date(notification.time), { addSuffix: true })}</span>
                    </span>
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link
              to="/"
              className="block px-4 py-2 mt-3 text-sm font-medium text-center text-gray-700 bg-white  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              View All Notifications
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
