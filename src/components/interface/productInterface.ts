export interface ProductProps {
  _id: number;
  title: string;
  quantityAvailable?: number;
  price: number | string;
  discountPrice: number;
  productDescription?: string;
  productImages?: string[];
  productIcon?: string;
  minQuantity?: number;
  maxQuantity?: number;
  deliveryDetails?: object[];
  availableColors?: object[];
  category?: object;
  subCategory?: object;
  productSpecification?: {
    availableSizes: string[];
    availableServices: object[];
    packOf: number;
    brand: string;
    isAvailable: boolean;
  };
  rating?: number;
  reviews?: object[];
}
