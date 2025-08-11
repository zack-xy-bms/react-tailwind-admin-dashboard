import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeTogglerTwo(): React.ReactElement {
  const { toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-brand-500 hover:bg-brand-600"
    >
      <Icons.Sun className="hidden dark:block" size={20} />
      <Icons.Moon className="dark:hidden" size={20} />
    </button>
  )
}
