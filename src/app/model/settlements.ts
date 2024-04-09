export interface ICash {
    id: number
    driver_id: number
    total_commission: number
    total_cash_earned: number
    current_commission: number
    last_commission: number
    last_settlement_date: string
    next_settlement_date: string
    is_active: string
    last_trip_id: number
    to_trip: number
    email: any
    firstname: any
    lastname: any
    phone_no: any
  }
export interface Iwithdraw_Request {
    id: number,
    driver_code:string,
    driver_name: string,
    driver_email: string,
    phone: string,
    withdrawn_amount: string,
    withdraw_date: string,
    status: string,
    details_history: boolean,
    
}

export interface IPartnerWRQ {
  id: number
  firstname: string
  lastname: string
  ref_code: string
  amount: number
  withdrawal_time: string
  paid: number
  pay_date: string
}
