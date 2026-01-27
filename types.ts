
export interface ProductOption {
  id: string;
  name: string;
  size: string;
  price: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  state: string;
  address: string;
  productSize: string;
}
