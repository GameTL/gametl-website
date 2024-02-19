import LinkButton from "@/components/common/LinkButton";
import React, { useState } from "react";
import Image from "next/image";
import CardProps from "@/types/CardProps";
import Typography from "./Typography";
import { SocialGitHub, Live } from "@/components/materials/Socials";
import clsx from "clsx";

interface ImageOnLoadEvent {
  naturalWidth: number;
  naturalHeight: number;
}

export default function Card({
  title,
  year,
  description,
  pageLink,
  githubLink,
  liveLink,
  imagePath,
  keys,
}: CardProps) {
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );
  const handleImageLoad = (event: ImageOnLoadEvent) => {
    setImageSize({ width: event.naturalWidth, height: event.naturalHeight });
  };
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-lg ",
        // normal effect
        "bg-backGroundColor transition-all duration-300",
        "shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]",
        "hover:shadow-[0.625rem_0.625rem_0.875rem_0.5rem_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0.5rem_rgb(255,255,255)]",
        "text-textPrimaryColor"
      )}
    >
      <div className="w-full">
        <Image
          src={imagePath}
          layout="responsive"
          width={imageSize.width || 1}
          height={imageSize.height || 1}
          objectFit="scale-down"
          alt={title}
          onLoadingComplete={handleImageLoad}
        />
      </div>

      <div className="px-6 py-5">
        {title && year && (
          <Typography type="h5" className="mb-2">
            {title} ({year})
          </Typography>
        )}
        {description && (
        <Typography type="p" className="mb-4">
          {description}
        </Typography>
        )}
        {keys && (
        <Typography type="p" className="mb-4">
          {keys[0]}
        </Typography>
        )}
        {pageLink && (
          <LinkButton className="mb-6" href={pageLink}>
            Read More
          </LinkButton>
        )}
        <div className="flex flex-auto space-x-4">
          {githubLink && (
            <LinkButton href={githubLink} buttonLogo={<SocialGitHub />}>
              Github
            </LinkButton>
          )}
          {liveLink && (
            <LinkButton href={liveLink} buttonLogo={<Live />}>
              Live
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}
