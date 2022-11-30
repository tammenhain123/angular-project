import { PaymentForm } from './payment-form';
export interface Client {
  id: string;
  name: string;
  email: string;
  cpf: string;
  address?: string;
  state?: string;
  CEP?: string;
  city?: string;
  createdAt: string;
  paymentForm?: PaymentForm;
}
