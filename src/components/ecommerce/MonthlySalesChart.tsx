import type { TooltipContentProps } from 'recharts'
import { useState } from 'react'

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'

export default function MonthlySalesChart(): React.ReactElement {
  const data = [
    {
      name: 'Jan',
      sales: 168,
    },
    {
      name: 'Feb',
      sales: 385,
    },
    {
      name: 'Mar',
      sales: 201,
    },
    {
      name: 'Apr',
      sales: 298,
    },
    {
      name: 'May',
      sales: 187,
    },
    {
      name: 'Jun',
      sales: 195,
    },
    {
      name: 'Jul',
      sales: 291,
    },
    {
      name: 'Aug',
      sales: 110,
    },
    {
      name: 'Sep',
      sales: 215,
    },
    {
      name: 'Oct',
      sales: 390,
    },
    {
      name: 'Nov',
      sales: 280,
    },
    {
      name: 'Dec',
      sales: 112,
    },
  ]

  const CustomTooltip = ({ active, payload, label }: TooltipContentProps<number, string>) => {
    const isVisible = active && payload && payload.length
    return (
      <div className="bg-white/80 border rounded-lg p-2" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        {isVisible && (
          <>
            <p className="text-black">
              <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#465fff] mr-1 align-middle"></span>
              {`${label} : ${payload[0].value}`}
            </p>
          </>
        )}
      </div>
    )
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenChange(open: boolean): void {
    setIsOpen(open)
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Monthly Sales
        </h3>
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

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[650px] h-[190px] xl:min-w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 0,
              }}
            >
              <CartesianGrid vertical={false} stroke="#E4E7EC" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                content={CustomTooltip}
                cursor={{
                  fill: '#f5f5f5',
                  fillOpacity: 0.8,
                }}
              />
              {/* <Legend /> */}
              <Bar dataKey="sales" barSize={10} radius={[10, 10, 0, 0]} fill="#465fff" activeBar={{ fill: '#1a12d6' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
