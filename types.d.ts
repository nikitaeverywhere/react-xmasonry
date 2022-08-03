declare module "react-xmasonry" {
    export interface XMasonryProps {
      children?: React.ReactNode;
      center?: boolean;
      maxColumns?: number;
      responsive?: boolean;
      smartUpdate?: boolean;
      smartUpdateCeil?: number;
      targetBlockWidth?: number;
      updateOnFontLoad?: boolean;
      updateOnImagesLoad?: boolean;
    }
    export interface XBlockProps {
      children?: React.ReactNode;
      width?: number;
    }
    export const XMasonry: React.ComponentClass<XMasonryProps, {}>;
    export const XBlock: React.ComponentClass<XBlockProps, {}>;
  }
  