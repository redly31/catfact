import FactsList from "../features/ui/facts-list"
import RandomFact from "../features/ui/random-fact"

export default function Layout() {
  return (
    <main className="max-w-lg mx-auto p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">CatFact</h1>
      <RandomFact />
      <FactsList />
    </main>
  )
}
