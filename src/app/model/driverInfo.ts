
export interface IRatings_D {
  id: number
  driverName: string
  riderName: string
  rating: number
  comments: string
  updated_at: string
  trip_id: number
  phone_no: string
  }

export interface IApproved_Drivers {
        id: number
        firstname: string
        lastname: string
        profile_url: string
        phone_no: string
        city: string
        balance: number
        email: string
        make: string
        model: string
        vehicle_type: string
        current_status: string
        driver_status: number
        is_active: number
        is_online: string
        created_at: string
        last_tripDate: string    
}

export interface IPending {
    id: number
    firstname: string
    lastname: string
    profile_url: string
    phone_no: string
    city: string
    balance: number
    email: string
    make: string
    model: string
    vehicle_type: string
    current_status: string
    driver_status: number
    is_active: number
    is_online: string
    created_at: string
    bearing: any
  }
export interface IRejected {
    id: number
    firstname: string
    lastname: string
    profile_url: string
    phone_no: string
    city: string
    balance: number
    email: string
    make: string
    model: string
    vehicle_type: string
    current_status: string
    driver_status: number
    is_active: number
    is_online: string
    created_at: string
    bearing: any
  }
  