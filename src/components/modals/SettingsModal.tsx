import {
  HARD_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export type SettingsProps = Omit<Props, 'isOpen' | 'handleClose'>

export const SettingsModalContent = ({
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: SettingsProps) => {
  return (
    <div className="mt-2 flex flex-col divide-y">
      <SettingsToggle
        settingName="Hard Mode"
        flag={isHardMode}
        handleFlag={handleHardMode}
        description={HARD_MODE_DESCRIPTION}
      />
      <SettingsToggle
        settingName="Dark Mode"
        flag={isDarkMode}
        handleFlag={handleDarkMode}
      />
      <SettingsToggle
        settingName="High Contrast Mode"
        flag={isHighContrastMode}
        handleFlag={handleHighContrastMode}
        description={HIGH_CONTRAST_MODE_DESCRIPTION}
      />
    </div>
  )
}

export const SettingsModal = ({ isOpen, handleClose, ...props }: Props) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <SettingsModalContent {...props} />
    </BaseModal>
  )
}
