import { Anchor, Box, Header } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { Me } from '../types';
import Link from 'next/link';
import { UploadVideo } from './UploadVideo';
import { useMe } from '../context/me';

function HeaderLayout() {
  const { user, refetch } = useMe();

  return (
    <Header height={60} p="xs">
      <Box sx={() => ({ display: 'flex' })}>
        <Box sx={() => ({ flex: '1' })}>
          <Image src="/logo.png" alt="logo" width="100px" height="40px" />
        </Box>
        {!user && (
          <>
            <Link href="/auth/login" passHref>
              <Anchor ml="lg" mr="lr">
                Login
              </Anchor>
            </Link>
            <Link href="/auth/register" passHref>
              <Anchor ml="lg" mr="lr">
                Register
              </Anchor>
            </Link>
          </>
        )}
        {user && <UploadVideo />}
      </Box>
    </Header>
  );
}

export default HeaderLayout;
