import { previewify } from "@react-portable/core";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

const Component = ({ images }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={images[2].src}
            alt={images[2].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img
          src={images[3].src}
          alt={images[3].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export const ImageGallery = previewify(Component, "image-gallery");
