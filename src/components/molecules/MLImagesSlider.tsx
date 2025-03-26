"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";

import { AtImage, AtImageProps } from "../atoms/AtImage";
import "swiper/css";
import { useState } from "react";

export interface MlImagesSliderProps {
  images: AtImageProps[];
}

export const MlImagesSlider: React.FC<MlImagesSliderProps> = ({
  images,
}: MlImagesSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((image) => {
            return (
              <SwiperSlide key={image.file.id}>
                <AtImage
                  {...image}
                  className="max-h-168 object-contain object-center bg-neutral-100 w-full rounded-md"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div>
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          slidesPerView={5}
          spaceBetween={16}
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
        >
          {images.map((image) => {
            return (
              <SwiperSlide key={image.file.id}>
                <AtImage
                  {...image}
                  className="object-contain object-center bg-neutral-100 w-25 h-25 rounded-md"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
