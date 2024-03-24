import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import { Tab } from '../Tabs/Tab'
import { Tabs } from '../Tabs/Tabs'
import { BaseModal } from './BaseModal'
import { InfoModalContent } from './InfoModal'
import { SettingsModalContent, SettingsProps } from './SettingsModal'
import { StatsModalContent, StatsProps } from './StatsModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  settingsModalContent: SettingsProps
  statsModalContent: StatsProps
}

export const GlobalMobile = ({
  isOpen,
  handleClose,
  settingsModalContent,
  statsModalContent,
}: Props) => {
  return (
    <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
      <Tabs>
        <Tab
          icon={
            <InformationCircleIcon className="h-6 w-6 cursor-pointer dark:stroke-white" />
          }
        >
          <InfoModalContent />
        </Tab>
        <Tab
          icon={
            <CogIcon className='className="h-6 dark:stroke-white" w-6 cursor-pointer' />
          }
        >
          <SettingsModalContent {...settingsModalContent} />
        </Tab>
        <Tab
          icon={
            <ChartBarIcon className="h-6 w-6 cursor-pointer dark:stroke-white" />
          }
        >
          <StatsModalContent {...statsModalContent} />
        </Tab>
      </Tabs>
    </BaseModal>
  )
}
