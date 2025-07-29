import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'

export default function UserDropdown(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleToPage(path: string): void {
    navigate(path)
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <div className="relative">
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger asChild>
          <div
            className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
          >
            <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
              <img src="/images/user/owner.jpg" alt="User" />
            </span>

            <span className="block mr-1 font-medium text-theme-sm">Zack</span>
            <Icons.ChevronDown
              size={15}
              className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 translate-x-[-20px]" align="start" sideOffset={20}>
          <DropdownMenuLabel>
            <div>
              <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                Zack Zheng
              </span>
              <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
                zack_zhengxiyun@163.com
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="px-4 py-2 text-base text-gray-500 dark:text-gray-400" onClick={() => handleToPage('/profile')}>
              <Icons.CircleUser className="!w-6 !h-6" />
              Edit profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2 text-base text-gray-500 dark:text-gray-400" onClick={() => handleToPage('/profile')}>
              <Icons.Settings className="!w-6 !h-6" />
              Account settings
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2 text-base text-gray-500 dark:text-gray-400" onClick={() => handleToPage('/profile')}>
              <Icons.Info className="!w-6 !h-6" />
              Support
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link
              to="/signin"
              className="flex gap-3 items-center px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <Icons.LogOut className="text-gray-500 dark:text-gray-400 scale-x-[-1] p-r-3" />
              Sign out
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
