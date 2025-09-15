import type { Fact } from "../facts/model"

export default function FactItem({ fact }: { fact: Fact }) {
  return (
    <article className="p-4 border-2 border-black">
      <h3>{fact.fact}</h3>
    </article>
  )
}
