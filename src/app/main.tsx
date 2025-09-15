import { StrictMode } from "react"
import "./index.css"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Layout from "./layout"

const client = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Layout />
    </QueryClientProvider>
  </StrictMode>
)
