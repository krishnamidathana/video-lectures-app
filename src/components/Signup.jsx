import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'-3'}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'28'} />

          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder={'Email'}
            type={'Email'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder={'Password'}
            type={'Password'}
            required
            focusBorderColor="purple.500"
          />
          <Button type="submit" colorScheme={'purple'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?{''}
            <Button
              variant={'link'}
              colorScheme="purple"
              alignSelf={'flex-end'}
            >
              <Link to={'/login'}>Log In Now</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
