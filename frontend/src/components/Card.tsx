import { useId, type ReactNode } from 'react'

type CardProps = {
  title: string
  children: ReactNode
}

function Card({ title, children }: CardProps) {
  const titleId = useId()

  return (
    <section className="card" aria-labelledby={titleId}>
      <h2 className="card-title" id={titleId}>
        {title}
      </h2>
      <div className="card-content">{children}</div>
    </section>
  )
}

export default Card
