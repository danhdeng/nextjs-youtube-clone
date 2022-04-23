import { AppShell } from '@mantine/core';
import React from 'react';
import HeaderLayout from '../components/Header';
import { NavBar } from '../components/Navbar';
import { VideoContextProvider } from '../context/videos';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <VideoContextProvider>
      <AppShell padding="md" navbar={<NavBar />} header={<HeaderLayout />}>
        {children}
      </AppShell>
    </VideoContextProvider>
  );
}

export default HomePageLayout;
