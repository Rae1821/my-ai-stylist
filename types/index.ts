export interface SearchShapeProps {
  shape: string;
  setShape: (shape: string) => void;
}

export interface ClothingProps {
  clothingTitle: string;
  clothingDescription: string;
  clothingPrice: number;
  clothingOriginalPrice: number;
  clothingCurrency: string;
  clothingRating: number;
  clothingNumRatings: number;
  clothingUrl: string;
  clothingImg: string;
}
