import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { usePagination, UsePaginationProps } from "react-instantsearch";

export function ProductsPagination(props: UsePaginationProps) {
  const {
    pages,
    currentRefinement,
    nbPages,
    isFirstPage,
    isLastPage,
    refine,
    createURL,
  } = usePagination(props);
  const firstPageIndex = 0;
  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;
  const lastPageIndex = nbPages - 1;

  return (
    <ul className="flex flex-row w-full flex-wrap justify-center items-center gap-4">
      <PaginationItem
        isDisabled={isFirstPage}
        href={createURL(firstPageIndex)}
        onClick={() => refine(firstPageIndex)}
      >
        First
      </PaginationItem>
      <PaginationItem
        isDisabled={isFirstPage}
        href={createURL(previousPageIndex)}
        onClick={() => refine(previousPageIndex)}
      >
        <i className="material-icons">chevron_left</i>
      </PaginationItem>
      {pages.map((page) => {
        const label = page + 1;

        return (
          <PaginationItem
            key={page}
            isDisabled={false}
            aria-label={`Page ${label}`}
            href={createURL(page)}
            onClick={() => refine(page)}
          >
            {label}
          </PaginationItem>
        );
      })}
      <PaginationItem
        isDisabled={isLastPage}
        href={createURL(nextPageIndex)}
        onClick={() => refine(nextPageIndex)}
      >
        Next
      </PaginationItem>
      <PaginationItem
        isDisabled={isLastPage}
        href={createURL(lastPageIndex)}
        onClick={() => refine(lastPageIndex)}
      >
        Last
      </PaginationItem>
    </ul>
  );
}

type PaginationItemProps = Omit<React.ComponentProps<"a">, "onClick"> & {
  onClick: NonNullable<React.ComponentProps<"a">["onClick"]>;
  isDisabled: boolean;
};

function PaginationItem({
  isDisabled,
  href,
  onClick,
  children,
}: PaginationItemProps) {
  if (isDisabled) {
    return (
      <li>
        <div
          className={clsx(
            "block px-4 py-2  bg-neutral-100 rounded-md  hover:bg-neutral-300 text-neutral-800",
            isDisabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {children}
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href || "#"}
        className="inline-block px-4 py-2 bg-neutral-100 rounded-md  hover:bg-neutral-300 text-neutral-800"
        onClick={(event) => {
          if (isModifierClick(event)) {
            return;
          }

          event.preventDefault();

          onClick(event);
        }}
      >
        {children}
      </Link>
    </li>
  );
}

function isModifierClick(event: React.MouseEvent) {
  const isMiddleClick = event.button === 1;

  return Boolean(
    isMiddleClick ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
  );
}
