type customImageLoader = {
  src: string;
  width: number;
  quality?: number;
}
export const customLoader = ({ src, width, quality }:customImageLoader) => {
  return `${src}?w=${width || 350}&q=${quality || 75}`;
};