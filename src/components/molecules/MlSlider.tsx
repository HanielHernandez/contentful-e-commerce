/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC, useRef } from "react";
import { Swiper, SwiperProps, SwiperRef } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { AtButton } from "../atoms/AtButton";
import { AtText } from "../atoms/AtText";
import { ContentfulContentType } from "@/types/contentful/content-model/contentful-types";

export interface MlSliderItem extends ContentfulContentType {
  [key: string]: any;
}

export interface MlSliderProps extends SwiperProps {
  title: string;
  items: MlSliderItem[];
  renderSlider: (slider: MlSliderItem) => React.ReactNode;
}

export const MlSlider: FC<MlSliderProps> = ({
  items = [],
  title,
  renderSlider,
  ...otherProps
}: MlSliderProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="relative w-full h-full flex flex-col gap-6 py-6 group ">
      <AtText variant="h2"> {title}</AtText>
      <div className="relative w-full ">
        <Swiper
          {...otherProps}
          ref={swiperRef}
          slidesPerView={4}
          modules={[Navigation]}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.contentTypeId}>
                {renderSlider(item)}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SwiperArrow
          swiperRef={swiperRef.current}
          direction="left"
        ></SwiperArrow>
        <SwiperArrow
          swiperRef={swiperRef.current}
          direction="right"
        ></SwiperArrow>
      </div>
    </div>
  );
};

export const SwiperArrow: FC<{
  direction: "left" | "right";
  swiperRef: SwiperRef | null;
}> = ({ direction, swiperRef }) => {
  return (
    <AtButton
      color="default"
      onClick={() => {
        if (swiperRef === undefined || swiperRef === null) return;

        if (direction === "right") {
          swiperRef.swiper.slideNext();
        } else {
          swiperRef?.swiper.slidePrev();
        }
      }}
      className={clsx(
        direction === "right" ? "right-0" : "left-0",
        "absolute top-[50%] z-20 w-14 h-14 !rounded-full !pa-2 opacity-0 group-hover:opacity-100 -translate-y-1/2"
      )}
    >
      <span className="material-icons">
        {direction === "left" ? "chevron_left" : "chevron_right"}
      </span>
    </AtButton>
  );
};
