import { AppShell } from '@mantine/core';
import React from 'react';
import HeaderLayout from '../components/Header';
import { NavBar } from '../components/Navbar';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell padding="md" navbar={<NavBar />} header={<HeaderLayout />}>
      {children}
    </AppShell>
  );
}

export default HomePageLayout;
