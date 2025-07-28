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
  Pencil,
  Plug,
  Plus,
  Rows3,
  Sheet,
  UsersRound,
} from 'lucide-react'
import { ReactComponent as FacebookIcon } from './facebook.svg?react'
import { ReactComponent as InstagramIcon } from './instagram.svg?react'
import { ReactComponent as LinkedinIcon } from './linkedin.svg?react'
import { ReactComponent as XLogoIcon } from './xlogo.svg?react'

const CustomStar = createLucideIcon('CustomStar', [
  ['path', { d: 'M12 2l3.09 6.26L22 9.27l-5.45 5.32L18.18 22 12 18.27 5.82 22l1.63-7.41L2 9.27l6.91-1.01L12 2z', key: '1' }],
])

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
  Pencil,
}

export {
  FacebookIcon, // 自定义图标(svg文件图标)
  Icons, // lucide-react定义的图标
  InstagramIcon,
  LinkedinIcon,
  XLogoIcon,
}
