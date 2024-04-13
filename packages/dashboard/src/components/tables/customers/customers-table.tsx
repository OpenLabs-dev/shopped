import { Button, Separator } from '@openui-org/react'
import { Plus } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { Heading } from '../../utils/heading'
import { DataTable } from '../../utils/data-table'
import { columns } from './columns'
import { customersMocks } from '@/lib/mocks'

export default function CategoriesTable() {
  const navigate = useNavigate({ from: '/customers' })
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title="Customers (10)"
          description="Manage users (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => navigate({ to: '/customers/new' })}
        >
          <Plus className="mr-2 size-4" />
          {' '}
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" data={customersMocks} columns={columns} />
    </>
  )
}
