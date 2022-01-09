import React from 'react'
import { Box } from '@rn-base/element'
import BoyAvatarImage from 'src/assets/TestSvg'

type SvgScreenProps = {}

const SvgScreen: React.FC<SvgScreenProps> = () => {
  return (
    <Box center middle flex={1}>
      <BoyAvatarImage />
    </Box>
  )
}

export default SvgScreen
