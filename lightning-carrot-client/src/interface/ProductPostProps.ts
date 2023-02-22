export interface ProductPostProps {
  postId?: string;
  img?: string[];
  title: string;
  category: string;
  regionDepth1: string;
  regionDepth2?: string;
  regionDepth3?: string;
  status: string;
  price: number;
  content: string;
}
