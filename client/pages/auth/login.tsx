import { Button, Container, Paper, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { AxiosError } from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useMutation } from 'react-query';
import { login } from '../../api';

export default function LoginPage() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof login>['0']
  >(login, {
    onSuccess: () => {
      router.push('/');
    },
  });
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <title>Login</title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
            <Stack>
              <TextInput
                label="Email"
                placeholder="dan@example.com"
                required
                {...form.getInputProps('email')}
              />
              <TextInput
                label="Password"
                placeholder="Your strong password"
                required
                {...form.getInputProps('password')}
              />
              <Button type="submit">Login</Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </>
  );
}
