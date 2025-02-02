import Image, { ImageProps } from "next/image";

function Icon(props: ImageProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} width={64} height={64} />;
}

export default Icon;
