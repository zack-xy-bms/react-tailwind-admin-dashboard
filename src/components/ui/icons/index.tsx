import {
  ArrowDown,
  ArrowUp,
  Box,
  Calendar,
  ChartPie,
  ChevronDown,
  ChevronLeft,
  CircleUser,
  Clock3,
  createLucideIcon,
  Ellipsis,
  EllipsisVertical,
  Eye,
  EyeClosed,
  Files,
  LayoutGrid,
  Mail,
  Moon,
  Plug,
  Plus,
  Rows3,
  Sheet,
  UsersRound,
} from 'lucide-react'
import { ReactComponent as AlertHexaIcon } from './alert-hexa.svg?react'

const CustomStar = createLucideIcon('CustomStar', [
  ['path', { d: 'M12 2l3.09 6.26L22 9.27l-5.45 5.32L18.18 22 12 18.27 5.82 22l1.63-7.41L2 9.27l6.91-1.01L12 2z', key: '1' }],
])

function MyHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 12h3v8h14v-8h3z" />
    </svg>
  )
}

function MyXLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      stroke="currentColor"
      {...props}
    >
      <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" />
    </svg>
  )
}

// 收集lucide-react定义的图标
const Icons = {
  CustomStar, // 自定义lucide-react风格图标
  Moon,
  ChevronLeft,
  EyeClosed,
  Eye,
  EllipsisVertical,
  ArrowUp,
  ArrowDown,
  Box,
  UsersRound,
  LayoutGrid,
  Calendar,
  CircleUser,
  Rows3,
  Sheet,
  Files,
  ChartPie,
  Plug,
  ChevronDown,
  Ellipsis,
  Plus,
  Clock3,
  Mail,
}

export {
  AlertHexaIcon, // svg文件图标
  Icons, // lucide-react定义的图标
  MyHome, // 自定义图标
  MyXLogo,
}
