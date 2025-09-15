import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import FactsList from "../features/ui/facts-list"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <FactsList />
    </QueryClientProvider>
  </StrictMode>
)
