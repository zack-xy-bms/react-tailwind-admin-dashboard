import { createLucideIcon, Moon } from 'lucide-react'

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

const Icons = {
  CustomStar,
  Moon,
}

export {
  Icons,
  MyHome,
}
