import React from "react";

import { AtNavbarLinkProps } from "../atoms/AtNavbarlink";
import Link from "next/link";
import { AtText } from "../atoms/AtText";

export interface MlLinklistProps extends AtNavbarLinkProps {
  title?: string;
}

export function MlLinksList({ links = [], text }: MlLinklistProps) {
  return (
    <details open>
      <summary className="list-none cursor-pointer">
        <AtText variant="h4" className="mb-4">
          {text}
        </AtText>
      </summary>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <Link
                href={link.url}
                className="mb-4 block  font-medium hover:opacity-75"
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
