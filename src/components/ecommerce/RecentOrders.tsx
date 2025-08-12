import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// Define the TypeScript interface for the table rows
interface Product {
  id: number // Unique identifier for each product
  name: string // Product name
  variants: string // Number of variants (e.g., "1 Variant", "2 Variants")
  category: string // Category of the product
  price: string // Price of the product (as a string with currency symbol)
  // status: string; // Status of the product
  image: string // URL or path to the product image
  status: 'Delivered' | 'Pending' | 'Canceled' // Status of the product
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 13”',
    variants: '2 Variants',
    category: 'Laptop',
    price: '$2399.00',
    status: 'Delivered',
    image: 'https://s21.ax1x.com/2025/07/30/pVYj7j0.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Apple Watch Ultra',
    variants: '1 Variant',
    category: 'Watch',
    price: '$879.00',
    status: 'Pending',
    image: 'https://s21.ax1x.com/2025/07/30/pVYjTcq.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'iPhone 15 Pro Max',
    variants: '2 Variants',
    category: 'SmartPhone',
    price: '$1869.00',
    status: 'Delivered',
    image: 'https://s21.ax1x.com/2025/07/30/pVYjo3n.jpg', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'iPad Pro 3rd Gen',
    variants: '2 Variants',
    category: 'Electronics',
    price: '$1699.00',
    status: 'Canceled',
    image: 'https://s21.ax1x.com/2025/07/30/pVYjI9s.jpg', // Replace with actual image URL
  },
  {
    id: 5,
    name: 'AirPods Pro 2nd Gen',
    variants: '1 Variant',
    category: 'Accessories',
    price: '$240.00',
    status: 'Delivered',
    image: 'https://s21.ax1x.com/2025/07/30/pVYjYX6.jpg', // Replace with actual image URL
  },
]

export default function RecentOrders(): React.ReactElement {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Icons.FunnelPlus />
            {' '}
            Filter
          </Button>
          <Button variant="outline">See all</Button>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableHead className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Products</TableHead>
              <TableHead className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Category</TableHead>
              <TableHead className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Price</TableHead>
              <TableHead className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Status</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map(product => (
              <TableRow key={product.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        className="h-[50px] w-[50px]"
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {product.name}
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {product.variants}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.price}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.category}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <Badge
                    variant={
                      product.status === 'Delivered'
                        ? 'success'
                        : product.status === 'Pending'
                          ? 'warning'
                          : 'error'
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
