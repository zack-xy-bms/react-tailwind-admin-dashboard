import { Label } from '@/components/ui/label'
import ComponentCard from '../../common/ComponentCard'
import FileInput from '../input/FileInput'

export default function FileInputExample(): React.ReactElement {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    if (file) {
      // eslint-disable-next-line no-console
      console.log('Selected file:', file.name)
    }
  }

  return (
    <ComponentCard title="File Input">
      <div>
        <Label>Upload file</Label>
        <FileInput onChange={handleFileChange} className="custom-class" />
      </div>
    </ComponentCard>
  )
}
