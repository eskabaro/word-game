import classNames from 'classnames'
import { FC, PropsWithChildren, useState } from 'react'

export const Tabs: FC<PropsWithChildren<any>> = ({ children }) => {
  const [selected, setSelected] = useState(0)

  const buttons = children?.map((child: any, index: any) => (
    <button
      key={index}
      className={classNames({
        'opacity-50': selected === index,
      })}
      onClick={() => setSelected(index)}
    >
      {child.props.icon}
    </button>
  ))

  const content = (
    <div className="container">{children[selected].props.children}</div>
  )

  return (
    <div>
      <div className="mb-3 flex justify-center gap-3">{buttons}</div>
      {content}
    </div>
  )
}
