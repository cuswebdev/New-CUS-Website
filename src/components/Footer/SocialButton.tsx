import { chakra } from '@chakra-ui/react'

export const SocialButton = chakra('a', {
  baseStyle: {
    rounded: 'lg',
    w: '12',
    h: '12',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize:'35px',
    transition: 'all 0.2s',
    _hover: {
      bg: 'blue.500',
    },
  },
})