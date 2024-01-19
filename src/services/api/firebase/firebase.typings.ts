interface ILink {
  displayText: string;
  url: string;
}

export interface ICoinSnapshotData {
  about?: string;
  paperUrl?: string;
  creator?: string;
  website?: ILink;
  consensus_method?: string;
  hashing_algorithm?: string;
  explorer?: ILink;
  more_info?: ILink;
  networks?: {
    twitter?: string;
    facebook?: string;
    reddit?: string;
  };
}

export interface IVideo {
  description: string;
  imageurl: string;
  title: string;
  videourl: string;
}

export interface ICourseData {
  description: string;
  imageurl: string;
  title: string;
  key: string;
}

export interface ISnapshotElement<T> {
  val: () => T;
  key: string;
}

export interface IDictinaryItem {
  definitions: string;
  term: string;
  youtubeLink: string;
}

export interface IResourceLink {
  imageurl: string;
  title: string;
  url: string;
}

export interface IResource {
  title: string;
  links: {
    [key: string]: IResourceLink;
  };
}

export interface ISponsors {
  description: string;
  imageurl: string;
  month: string;
  name: string;
  othersponsorurl: string;
  readmoreurl: string;
  title: string;
}
