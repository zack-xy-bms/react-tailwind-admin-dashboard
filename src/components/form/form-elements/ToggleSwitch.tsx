import ComponentCard from '../../common/ComponentCard'
import Switch from '../switch/Switch'

export default function ToggleSwitch(): React.ReactElement {
  const handleSwitchChange = (checked: boolean): void => {
    // eslint-disable-next-line no-console
    console.log('Switch is now:', checked ? 'ON' : 'OFF')
  }
  return (
    <ComponentCard title="Toggle switch input">
      <div className="flex gap-4">
        <Switch
          label="Default"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label="Checked"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label="Disabled" disabled={true} />
      </div>
      {' '}
      <div className="flex gap-4">
        <Switch
          label="Default"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label="Checked"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label="Disabled" disabled={true} color="gray" />
      </div>
    </ComponentCard>
  )
}
