import { LinkButton } from "@/components/common/LinkButton";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/types/Card";
import {
  SocialFacebook,
  SocialGitHub,
  SocialYoutube,
  Live,
} from "@/components/materials/Socials";


export const Card = ({
  title,
  year,
  description,
  pageLink,
  githubLink,
  liveLink,
  imagePath,
}: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <div className="relative h-56 w-full">
        {/* Using Next.js Image component for optimized images */}
        <Image src={imagePath} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-lg font-bold">
          {title} ({year})
        </h5>
        <p className="mb-4 text-base text-gray-700">{description}</p>

          <LinkButton className="mb-6" href={pageLink}>Read More</LinkButton>
        <div className="flex space-x-4 flex-auto">

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
};
