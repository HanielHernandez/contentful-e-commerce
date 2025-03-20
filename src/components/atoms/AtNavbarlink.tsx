import Link from "next/link";

export interface AtNavbarLinkProps {
  url: string;
  text: string;
  icon: string;
  links?: AtNavbarLinkProps[];
}

export default function AtNavbarLink({ url, text }: AtNavbarLinkProps) {
  return (
    <Link
      className="text-base font-bold text-neutral-800 hover:opacity-75 p-2"
      href={url}
    >
      {text}
    </Link>
  );
}
