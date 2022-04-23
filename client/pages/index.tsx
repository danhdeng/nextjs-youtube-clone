import { SimpleGrid } from '@mantine/core';
import type { NextPage } from 'next';
import { ReactElement } from 'react';
import { VideoTeaser } from '../components/VideoTeaser';
import { useVideo } from '../context/videos';
import HomePageLayout from '../layout/Home';
import styles from '../styles/Home.module.css';
import { Video } from '../types';

const Home: NextPage = () => {
  const { videos, refetch } = useVideo();
  return (
    <div className={styles.container}>
      <SimpleGrid cols={3}>
        {videos &&
          videos.map((video: Video) => {
            return <VideoTeaser key={video.videoId} video={video} />;
          })}
      </SimpleGrid>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
export default Home;
