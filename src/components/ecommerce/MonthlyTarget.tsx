import type { ApexOptions } from 'apexcharts'
import { useState } from 'react'
import Chart from 'react-apexcharts'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'

export default function MonthlyTarget(): React.ReactElement {
  const series = [75.55]
  const infos = {
    Target: { count: '$20K', type: 'down' },
    Revenue: { count: '$30K', type: 'up' },
    Today: { count: '$20K', type: 'up' },
  }
  const options: ApexOptions = {
    colors: ['#465FFF'],
    chart: {
      fontFamily: 'Outfit, sans-serif',
      type: 'radialBar',
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: '80%',
        },
        track: {
          background: '#E4E7EC',
          strokeWidth: '100%',
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '36px',
            fontWeight: '600',
            offsetY: -40,
            color: '#1D2939',
            formatter(val) {
              return `${val}%`
            },
          },
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#465FFF'],
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isOpen, setIsOpen] = useState(false)

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
          <div className="max-h-[330px]" id="chartDarkStyle">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={330}
            />
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
