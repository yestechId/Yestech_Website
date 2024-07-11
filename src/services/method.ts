/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { BASE_API } from '../config/env'

export const GET = async (path: string) => {
  try {
    const response = await axios.get(`${BASE_API}${path}`)
    if (response.status !== 200) {
      return response.data
    }
    return response.data
  } catch (error: any) {
    return error.response.data
  }
}

export const GETDETAIL = async (path: string, id: number) => {
  try {
    const response = await axios.get(`${BASE_API}${path}?id=${id}`)
    if (response.status !== 200) {
      return response.data
    }
    return response.data
  } catch (error: any) {
    return error.response.data
  }
}
