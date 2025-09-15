import type { Fact } from "../facts/model"

export default function FactItem({ fact }: { fact: Fact }) {
  return (
    <article>
      <h2>{fact.fact}</h2>
    </article>
  )
}
