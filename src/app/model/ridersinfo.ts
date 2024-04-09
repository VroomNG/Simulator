
export interface IRiders {
    id: number
    email: string
    firstname: string
    lastname: any,
    phone_no: any,
    user_type: any,
    ref_code: string,
    created_at: string,
    last_update: string
  }

  export interface IRatings_R {
    id: number
    riderName: string
    driverName: string
    rating: number
    comments: string
    updated_at: string
    trip_id: number
    phone_no: string
  }
  
  