export interface IDiscount {
    id: number
    discount_code: string
    title: string
    description: string
    start_date: string
    end_date: string
    discount_percent: number
    max_discount_amount: number
    max_no_of_users: number
    is_active: string
    max_no_of_user_reached: number
    created_at: string
    applications: number
  }
  