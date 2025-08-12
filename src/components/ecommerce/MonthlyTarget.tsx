import { useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'
import { useTheme } from '@/context/ThemeContext';

export default function MonthlyTarget(): React.ReactElement {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const series = 75.55
  const infos = {
    Target: { count: '$20K', type: 'down' },
    Revenue: { count: '$30K', type: 'up' },
    Today: { count: '$20K', type: 'up' },
  }

  const data = [
    { name: 'Progress', value: series }, // 进度值
    { name: 'Remaining', value: 100 - series }, // 剩余部分
  ]



  function handleOpenChange(open: boolean): void {
    setIsOpen(open)
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Monthly Target
            </h3>
            <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
              Target you’ve set for each month
            </p>
          </div>
          <div className="relative inline-block">
            <DropdownMenu onOpenChange={handleOpenChange}>
              <DropdownMenuTrigger asChild>
                <Button variant="link" size="icon" className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-8">
                  <Icons.EllipsisVertical className="size-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
                    View More
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="relative ">
          <div className="h-[160px]" id="chartDarkStyle">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="90%" // 控制半圆位置（底部居中）
                  innerRadius={120}
                  outerRadius={130}
                  startAngle={180}
                  endAngle={0}
                  dataKey="value"
                  cornerRadius={10}
                  strokeLinecap="round"
                >
                  <Cell fill="#465fff" />
                  {' '}
                  <Cell fill="#eee" />
                  {' '}
                </Pie>
                {/* 自定义中心文本 */}
                <text
                  x="50%"
                  y="70%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="24"
                  fontWeight="bold"
                  fill={theme==='dark' ? 'white' : '#333'}
                  className='dark:text-white/90'
                >
                  {`${series}%`}
                </text>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
            +10%
          </span>
        </div>
        <p className="mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
          You earn $3287 today, it's higher than last month. Keep up your good
          work!
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
        {
          ['Target', '', 'Revenue', '', 'Today'].map((item, index) => {
            if (item === 'Target' || item === 'Revenue' || item === 'Today') {
              const info = infos[item]
              return (
                <div key={index}>
                  <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
                    {item}
                  </p>
                  <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                    {info.count}
                    {info.type === 'down' ? <Icons.ArrowDown className="text-error-600" /> : <Icons.ArrowUp className="text-success-600" />}
                  </p>
                </div>
              )
            }
            else {
              return (
                <div key={index} className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
              )
            }
          })
        }
      </div>
    </div>
  )
}
