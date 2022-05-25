import {useColorMode, IconButton} from '@chakra-ui/react'
import {SunIcon, MoonIcon} from '@chakra-ui/icons'

const DarkModeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      colorScheme="green"
      onClick={toggleColorMode}
    />
  )
}

export default DarkModeSwitch
