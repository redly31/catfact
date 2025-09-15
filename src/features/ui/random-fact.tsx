import { useGetFact } from "../facts/api/facts-api"

export default function RandomFact() {
  const { data: randomFact, isLoading } = useGetFact()

  if (isLoading) return <h2 className="text-xl font-bold">Loading...</h2>
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Random Fact</h2>
      <h3>{randomFact?.fact}</h3>
    </section>
  )
}
