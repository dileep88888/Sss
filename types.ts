
export interface Product {
  id: number;
  name: string;
  category: 'Men' | 'Women' | 'Kids' | 'Fabric';
  style: 'Modern' | 'Traditional' | 'Fusion';
  price: string;
  imageUrl: string;
  isFavorite: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}
