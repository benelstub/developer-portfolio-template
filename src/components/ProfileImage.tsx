"use client";

import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      objectFit="cover"
      className="object-cover w-[250px] h-[250px] rounded-full "
    />
  );
};
