import { Container, VStack, HStack, Input, Button } from '@chakra-ui/react';

import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10Vmax'} />

        <form>
          <HStack shadow={'dark-lg'} borderRadius={'5'}>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme="purple" type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
