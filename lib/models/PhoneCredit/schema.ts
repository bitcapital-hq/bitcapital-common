import { BaseModelSchema, BaseModel } from "../..";


export interface PhoneCreditSchema extends BaseModelSchema {
  walletId?: string;
  providerCode: string;
  phoneNumber: string;
  phoneCode: string;
  chosenAmount?: string;
  providerOrderId: string;
  status: string;
  amounts:[{
      id:string,
      amount:string,
      amountKey:string
  }]
}

export class PhoneCredit extends BaseModel implements PhoneCreditSchema{
  walletId?: string;
  providerCode: string;
  phoneNumber: string;
  phoneCode: string;
  chosenAmount?: string;
  providerOrderId: string;
  status: string;
  amounts:[{
    id:string,
    amount:string,
    amountKey:string
  }]
  constructor(data: Partial<PhoneCreditSchema>) {
    super(data);
    Object.assign(this, data);
  }
}

export interface PhoneCreditDealersSchema{
    dealers:[{
        name: string,
        code: string
    }];
}

export class PhoneCreditDealers extends BaseModel implements PhoneCreditDealersSchema {
    dealers:[{
        name: string,
        code: string
    }];
    constructor(data: Partial<PhoneCreditDealersSchema>) {
        super(data);
        Object.assign(this, data);
    }
}
