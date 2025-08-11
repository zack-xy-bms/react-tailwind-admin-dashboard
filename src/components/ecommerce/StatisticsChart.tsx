import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function StatisticsChart(): React.ReactElement {
  // const options: ApexOptions = {
  //   legend: {
  //     show: false, // Hide legend
  //     position: 'top',
  //     horizontalAlign: 'left',
  //   },
  //   colors: ['#465FFF', '#9CB9FF'], // Define line colors
  //   chart: {
  //     fontFamily: 'Outfit, sans-serif',
  //     height: 310,
  //     type: 'line', // Set the chart type to 'line'
  //     toolbar: {
  //       show: false, // Hide chart toolbar
  //     },
  //   },
  //   stroke: {
  //     curve: 'straight', // Define the line style (straight, smooth, or step)
  //     width: [2, 2], // Line width for each dataset
  //   },

  //   fill: {
  //     type: 'gradient',
  //     gradient: {
  //       opacityFrom: 0.55,
  //       opacityTo: 0,
  //     },
  //   },
  //   markers: {
  //     size: 0, // Size of the marker points
  //     strokeColors: '#fff', // Marker border color
  //     strokeWidth: 2,
  //     hover: {
  //       size: 6, // Marker size on hover
  //     },
  //   },
  //   grid: {
  //     xaxis: {
  //       lines: {
  //         show: false, // Hide grid lines on x-axis
  //       },
  //     },
  //     yaxis: {
  //       lines: {
  //         show: true, // Show grid lines on y-axis
  //       },
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false, // Disable data labels
  //   },
  //   tooltip: {
  //     enabled: true, // Enable tooltip
  //     x: {
  //       format: 'dd MMM yyyy', // Format for x-axis tooltip
  //     },
  //   },
  //   xaxis: {
  //     type: 'category', // Category-based x-axis
  //     categories: [
  //       'Jan',
  //       'Feb',
  //       'Mar',
  //       'Apr',
  //       'May',
  //       'Jun',
  //       'Jul',
  //       'Aug',
  //       'Sep',
  //       'Oct',
  //       'Nov',
  //       'Dec',
  //     ],
  //     axisBorder: {
  //       show: false, // Hide x-axis border
  //     },
  //     axisTicks: {
  //       show: false, // Hide x-axis ticks
  //     },
  //     tooltip: {
  //       enabled: false, // Disable tooltip for x-axis points
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       style: {
  //         fontSize: '12px', // Adjust font size for y-axis labels
  //         colors: ['#6B7280'], // Color of the labels
  //       },
  //     },
  //     title: {
  //       text: '', // Remove y-axis title
  //       style: {
  //         fontSize: '0px',
  //       },
  //     },
  //   },
  // }

  // const series = [
  //   {
  //     name: 'Sales',
  //     data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
  //   },
  //   {
  //     name: 'Revenue',
  //     data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
  //   },
  // ]

  const data = [
    {
      name: 'Jan',
      sales: 180,
      revenue: 40,
    },
    {
      name: 'Feb',
      sales: 190,
      revenue: 30,
    },
    {
      name: 'Mar',
      sales: 170,
      revenue: 50,
    },
    {
      name: 'Apr',
      sales: 160,
      revenue: 40,
    },
    {
      name: 'May',
      sales: 175,
      revenue: 55,
    },
    {
      name: 'Jun',
      sales: 165,
      revenue: 40,
    },
    {
      name: 'Jul',
      sales: 170,
      revenue: 70,
    },
    {
      name: 'Aug',
      sales: 205,
      revenue: 100,
    },
    {
      name: 'Sep',
      sales: 230,
      revenue: 110,
    },
    {
      name: 'Oct',
      sales: 210,
      revenue: 120,
    },
    {
      name: 'Nov',
      sales: 240,
      revenue: 150,
    },
    {
      name: 'Dec',
      sales: 235,
      revenue: 140,
    },
  ]

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Statistics
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Target you’ve set for each month
          </p>
        </div>
        <Tabs defaultValue="Monthly">
          <TabsList className="flex items-start w-full gap-3 sm:justify-end">
            <TabsTrigger value="Monthly">Monthly</TabsTrigger>
            <TabsTrigger value="Quarterly">Quarterly</TabsTrigger>
            <TabsTrigger value="Annually">Annually</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] h-[310px] xl:min-w-full">

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#465fff" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="linear"
                dataKey="sales"
                stackId="1"
                stroke="#465fff"
                fill="url(#areaGradient)"
                fillOpacity={0.8}
                connectNulls={true}
              />
              <Area type="linear" dataKey="revenue" stackId="1" stroke="#a0a0ff" fill="#a0a0ff" />
            </AreaChart>
          </ResponsiveContainer>

          {/* <Chart options={options} series={series} type="area" height={310} /> */}
        </div>
      </div>
    </div>
  )
}
