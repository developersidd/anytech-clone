import Image, { ImageProps } from "next/image";

function Icon(props: ImageProps) {
  return <Image {...props} width={64} height={64} />;
}

export default Icon;
