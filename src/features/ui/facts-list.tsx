import { useGetFacts } from "../facts/api/facts-api"
import FactItem from "./fact-item"

export default function FactsList() {
  const { data, isLoading } = useGetFacts()

  if (isLoading || !data) {
    return <h2>Zagruzka</h2>
  }

  const facts = data.data!

  return (
    <main>
      {facts.map((fact) => (
        <FactItem key={fact.fact} fact={fact} />
      ))}
    </main>
  )
}
