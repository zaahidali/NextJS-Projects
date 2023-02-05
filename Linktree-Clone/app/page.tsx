import Image from "next/image";
import data from "../data.json";
import TwitterIcon from "../app/icons/TwitterIcon";
import GitHubIcon from "../app/icons/GitHubIcon";
import LinkedInIcon from "../app/icons/LinkedInIcon";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex h-12 items-center p-4 w-full rounded-md hover:scale-105 transition-all bg-white mb-3 text-gray-200 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sn"
              src={data.avatar}
              alt={data.name}
              width={40}
              height={40}
            />
          )}
        </div>
        <h3 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h3>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-16">
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      <div className="flex items-center gap-2 mt-4">
        {data.socials.map((social) => {
          if (social.href.includes("twitter")) {
            return <TwitterIcon key={social.href} />;
          }
          if (social.href.includes("github")) {
            return <GitHubIcon key={social.href} />;
          }
          if (social.href.includes("linkedin")) {
            return <LinkedInIcon key={social.href} />;
          }
        })}
      </div>
    </div>
  );
}
