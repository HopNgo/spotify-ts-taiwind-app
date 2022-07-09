export default interface ISong {
  name: string;
  author: string;
  url: string;
  id: number;
  links: {
    images: {
      url: string;
    }[];
  };
}
