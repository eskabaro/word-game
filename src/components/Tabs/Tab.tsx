import { PropsWithChildren, ReactElement } from 'react'

interface Props extends PropsWithChildren<unknown> {
  icon: ReactElement
}

export const Tab = ({ children }: Props) => {
  return <>{children}</>
}
