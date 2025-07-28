import { Icons } from '@/components/ui/icons'
import ComponentCard from '../../components/common/ComponentCard'
import PageBreadcrumb from '../../components/common/PageBreadCrumb'
import PageMeta from '../../components/common/PageMeta'
import Badge from '../../components/ui/badge/Badge'

export default function Badges(): React.ReactElement {
  return (
    <div>
      <PageMeta
        title="React.js Badges Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Badges Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Badges" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="With Light Background">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            {/* Light Variant */}
            <Badge variant="light" color="primary">
              Primary
            </Badge>
            <Badge variant="light" color="success">
              Success
            </Badge>
            {' '}
            <Badge variant="light" color="error">
              Error
            </Badge>
            {' '}
            <Badge variant="light" color="warning">
              Warning
            </Badge>
            {' '}
            <Badge variant="light" color="info">
              Info
            </Badge>
            <Badge variant="light" color="light">
              Light
            </Badge>
            <Badge variant="light" color="dark">
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="With Solid Background">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            {/* Light Variant */}
            <Badge variant="solid" color="primary">
              Primary
            </Badge>
            <Badge variant="solid" color="success">
              Success
            </Badge>
            {' '}
            <Badge variant="solid" color="error">
              Error
            </Badge>
            {' '}
            <Badge variant="solid" color="warning">
              Warning
            </Badge>
            {' '}
            <Badge variant="solid" color="info">
              Info
            </Badge>
            <Badge variant="solid" color="light">
              Light
            </Badge>
            <Badge variant="solid" color="dark">
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Light Background with Left Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="light" color="primary" startIcon={<Icons.Plus />}>
              Primary
            </Badge>
            <Badge variant="light" color="success" startIcon={<Icons.Plus />}>
              Success
            </Badge>
            {' '}
            <Badge variant="light" color="error" startIcon={<Icons.Plus />}>
              Error
            </Badge>
            {' '}
            <Badge variant="light" color="warning" startIcon={<Icons.Plus />}>
              Warning
            </Badge>
            {' '}
            <Badge variant="light" color="info" startIcon={<Icons.Plus />}>
              Info
            </Badge>
            <Badge variant="light" color="light" startIcon={<Icons.Plus />}>
              Light
            </Badge>
            <Badge variant="light" color="dark" startIcon={<Icons.Plus />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Solid Background with Left Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="solid" color="primary" startIcon={<Icons.Plus />}>
              Primary
            </Badge>
            <Badge variant="solid" color="success" startIcon={<Icons.Plus />}>
              Success
            </Badge>
            {' '}
            <Badge variant="solid" color="error" startIcon={<Icons.Plus />}>
              Error
            </Badge>
            {' '}
            <Badge variant="solid" color="warning" startIcon={<Icons.Plus />}>
              Warning
            </Badge>
            {' '}
            <Badge variant="solid" color="info" startIcon={<Icons.Plus />}>
              Info
            </Badge>
            <Badge variant="solid" color="light" startIcon={<Icons.Plus />}>
              Light
            </Badge>
            <Badge variant="solid" color="dark" startIcon={<Icons.Plus />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Light Background with Right Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="light" color="primary" endIcon={<Icons.Plus />}>
              Primary
            </Badge>
            <Badge variant="light" color="success" endIcon={<Icons.Plus />}>
              Success
            </Badge>
            {' '}
            <Badge variant="light" color="error" endIcon={<Icons.Plus />}>
              Error
            </Badge>
            {' '}
            <Badge variant="light" color="warning" endIcon={<Icons.Plus />}>
              Warning
            </Badge>
            {' '}
            <Badge variant="light" color="info" endIcon={<Icons.Plus />}>
              Info
            </Badge>
            <Badge variant="light" color="light" endIcon={<Icons.Plus />}>
              Light
            </Badge>
            <Badge variant="light" color="dark" endIcon={<Icons.Plus />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
        <ComponentCard title="Solid Background with Right Icon">
          <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center">
            <Badge variant="solid" color="primary" endIcon={<Icons.Plus />}>
              Primary
            </Badge>
            <Badge variant="solid" color="success" endIcon={<Icons.Plus />}>
              Success
            </Badge>
            {' '}
            <Badge variant="solid" color="error" endIcon={<Icons.Plus />}>
              Error
            </Badge>
            {' '}
            <Badge variant="solid" color="warning" endIcon={<Icons.Plus />}>
              Warning
            </Badge>
            {' '}
            <Badge variant="solid" color="info" endIcon={<Icons.Plus />}>
              Info
            </Badge>
            <Badge variant="solid" color="light" endIcon={<Icons.Plus />}>
              Light
            </Badge>
            <Badge variant="solid" color="dark" endIcon={<Icons.Plus />}>
              Dark
            </Badge>
          </div>
        </ComponentCard>
      </div>
    </div>
  )
}
