import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeTogglerTwo(): React.ReactElement {
  const { toggleTheme } = useTheme()
  return (
    <>
      <Button variant="rounded" className="h-14! w-14! bg-brand-500 hover:bg-brand-600! hover:text-white text-white border-none p-0! transition-colors dark:bg-brand-500 dark:text-white " onClick={toggleTheme}>
        <Icons.Sun className="hidden dark:block size-5" />
        <Icons.Moon className="dark:hidden size-5" />
      </Button>
    </>

  )
}
