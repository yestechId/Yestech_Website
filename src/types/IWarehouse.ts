interface IImage {
  link: string
}
export interface IWarehouse {
  id: number
  name: string
  alamat: string
  image: IImage[]
  createdAt?: string
  updatedAt?: string
}
