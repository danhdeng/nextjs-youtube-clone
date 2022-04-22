export interface Video {
  _id: string;
  owner: string;
  published: boolean;
  videoId: string;
  createdAt: Date;
  __v: string;
  extension: string;
  description: string;
  title: string;
}

export enum QueryKeys {
  me = 'me',
  videos = 'videos',
}

export interface Me {
  _id: string;
  email: string;
  username: string;
}
