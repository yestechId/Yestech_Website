interface IImage {
  link: string
}
export interface INewsHome {
  id: number
  name: string
  details: string
  imageNews: IImage[]
  createdAt?: string
  updatedAt?: string
}
