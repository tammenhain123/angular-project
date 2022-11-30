export interface PaymentForm {
  type: string;
  barCode?: string;
  cardName?: string;
  expeditionYear?: string;
  expeditionMonth?: string;
  cardNumber?: string;
  ccv?: string;
}
