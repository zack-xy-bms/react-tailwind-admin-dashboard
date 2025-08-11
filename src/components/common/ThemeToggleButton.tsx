import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { useTheme } from '@/context/ThemeContext'

export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <div className="relative">
      <Button onClick={toggleTheme} variant="rounded">
        <Icons.Sun className="hidden dark:block" size={20} />
        <Icons.Moon className="dark:hidden" size={20} />
      </Button>
    </div>

  )
}
