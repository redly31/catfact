import { useState } from "react"
import { useGetFacts } from "../facts/api/facts-api"
import FactItem from "./fact-item"

export default function FactsList() {
  const [page, setPage] = useState(1)

  const { data: paginatedFacts, isLoading } = useGetFacts({ page })

  if (isLoading || !paginatedFacts) {
    return <h2 className="text-xl font-bold">Loading...</h2>
  }
  const facts = paginatedFacts.data

  return (
    <section className="flex justify-center flex-col gap-4">
      <h2 className="text-xl font-bold">Facts List</h2>
      <div className="flex gap-4 items-center">
        <button
          className="cursor-pointer border-2 border-black px-4 py-2"
          disabled={!paginatedFacts?.prev_page_url}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          className="cursor-pointer border-2 border-black px-4 py-2"
          disabled={!paginatedFacts?.next_page_url}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
      {facts?.map((fact) => (
        <FactItem key={fact.fact} fact={fact} />
      ))}
    </section>
  )
}
