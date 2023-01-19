export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          business: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: number
          last_name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          business?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          business?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
      }
      daily_checklists: {
        Row: {
          change_order: boolean
          created_at: string | null
          customer_satisfaction: string
          date: string | null
          id: number
          machines_parked: boolean
          project_id: number | null
          set_up_for_tomorrow: boolean
          site_secure: boolean
          soil_site_conditions: string
          tracks_shoveled: boolean
          type: string
          updated_at: string | null
        }
        Insert: {
          change_order?: boolean
          created_at?: string | null
          customer_satisfaction?: string
          date?: string | null
          id?: number
          machines_parked?: boolean
          project_id?: number | null
          set_up_for_tomorrow?: boolean
          site_secure?: boolean
          soil_site_conditions?: string
          tracks_shoveled?: boolean
          type?: string
          updated_at?: string | null
        }
        Update: {
          change_order?: boolean
          created_at?: string | null
          customer_satisfaction?: string
          date?: string | null
          id?: number
          machines_parked?: boolean
          project_id?: number | null
          set_up_for_tomorrow?: boolean
          site_secure?: boolean
          soil_site_conditions?: string
          tracks_shoveled?: boolean
          type?: string
          updated_at?: string | null
        }
      }
      end_checklists: {
        Row: {
          change_order: boolean
          created_at: string | null
          customer_satisfaction: string
          date: string | null
          id: number
          machines_parked: boolean
          project_id: number
          setup: boolean
          site_secure: boolean
          soil_site_conditions: string
          status: boolean
          type: string
          updated_at: string | null
        }
        Insert: {
          change_order?: boolean
          created_at?: string | null
          customer_satisfaction?: string
          date?: string | null
          id?: number
          machines_parked?: boolean
          project_id: number
          setup?: boolean
          site_secure?: boolean
          soil_site_conditions?: string
          status?: boolean
          type?: string
          updated_at?: string | null
        }
        Update: {
          change_order?: boolean
          created_at?: string | null
          customer_satisfaction?: string
          date?: string | null
          id?: number
          machines_parked?: boolean
          project_id?: number
          setup?: boolean
          site_secure?: boolean
          soil_site_conditions?: string
          status?: boolean
          type?: string
          updated_at?: string | null
        }
      }
      leads: {
        Row: {
          created_at: string | null
          email: string
          first_name: string | null
          id: number
          last_name: string | null
          promo_waive_equipment_fee: string | null
          promo_waive_equipment_fee_used: boolean
          unsubscribed: boolean
          unsubscribed_at: string | null
          verified: boolean
          verified_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          promo_waive_equipment_fee?: string | null
          promo_waive_equipment_fee_used?: boolean
          unsubscribed?: boolean
          unsubscribed_at?: string | null
          verified?: boolean
          verified_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          promo_waive_equipment_fee?: string | null
          promo_waive_equipment_fee_used?: boolean
          unsubscribed?: boolean
          unsubscribed_at?: string | null
          verified?: boolean
          verified_at?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
          username?: string | null
        }
      }
      projects: {
        Row: {
          address: string | null
          assigned_to: string | null
          city: string | null
          created_at: string | null
          created_by: string | null
          customer_id: number
          id: number
          name: string
          start_date: string | null
          state: string | null
          status: string | null
          updated_at: string | null
          zip: string | null
        }
        Insert: {
          address?: string | null
          assigned_to?: string | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id?: number
          id?: number
          name?: string
          start_date?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          zip?: string | null
        }
        Update: {
          address?: string | null
          assigned_to?: string | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id?: number
          id?: number
          name?: string
          start_date?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          zip?: string | null
        }
      }
      start_checklists: {
        Row: {
          approved_plans: boolean
          created_at: string | null
          customer_contact: string
          date: string | null
          hazard: boolean
          hazard_list: string[]
          id: number
          locates: string[]
          project_id: number | null
          scope_of_work: string
          signed_contract_url: string
          status: boolean
          type: string
          updated_at: string | null
        }
        Insert: {
          approved_plans?: boolean
          created_at?: string | null
          customer_contact?: string
          date?: string | null
          hazard?: boolean
          hazard_list?: string[]
          id?: number
          locates?: string[]
          project_id?: number | null
          scope_of_work?: string
          signed_contract_url?: string
          status?: boolean
          type?: string
          updated_at?: string | null
        }
        Update: {
          approved_plans?: boolean
          created_at?: string | null
          customer_contact?: string
          date?: string | null
          hazard?: boolean
          hazard_list?: string[]
          id?: number
          locates?: string[]
          project_id?: number | null
          scope_of_work?: string
          signed_contract_url?: string
          status?: boolean
          type?: string
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
