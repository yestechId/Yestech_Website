import React, { ReactNode } from 'react'

interface IMainLayout {
  children: ReactNode
}
const MainLayout = ({ children }: IMainLayout) => {
  return (
    <main>
      <h1>Testing Layout</h1>
      {children}
    </main>
  )
}

export default MainLayout
