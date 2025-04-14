import Image from "next/image";
import styles from "./MainImage.module.scss";

type Props = {
  src: string;
  alt: string;
  classImg?: string;
  classContainer?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
};

const MainImage = ({
  priority,
  classContainer,
  classImg,
  alt,
  src,
  sizes,
  quality,
}: Props) => {
  return (
    <div className={`${styles.imageContainer} ${classContainer}`}>
      <Image
        priority={priority}
        src={src}
        alt={alt}
        className={`${styles.mainImage} ${classImg}`}
        fill
        sizes={sizes ? sizes : "100%"}
        quality={quality ? quality : 80}
        loading="lazy"
      />
    </div>
  );
};

export { MainImage };
