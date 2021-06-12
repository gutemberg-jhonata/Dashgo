import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jhonata Gutemberg</Text>
        <Text color="gray.300" fontSize="small">
          gutemberg.honata@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Jhonata Gutemberg"
        src="https://github.com/gutemberg-jhonata.png"
      />
    </Flex>
  )
}