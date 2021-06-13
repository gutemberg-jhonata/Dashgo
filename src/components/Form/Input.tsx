import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

type InputData = {
  name: string,
  label?: string,
}

type InputProps = ChakraInputProps & InputData;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, ...rest }, ref) => {
    return (
      <FormControl>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
          id={name}
          name={name}
          focusBorderColor="pink.500"
          bg="gray.900"
          variant="filled"
          _hover={{
            bg: "gray.900"
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
      </FormControl>
    )
  }

export const Input = forwardRef(InputBase);