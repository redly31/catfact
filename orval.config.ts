import { defineConfig } from "orval"

export default defineConfig({
  factsApi: {
    input: "./openapi.yaml",
    output: {
      mode: "split",
      target: "./src/features/facts/api/facts-api.ts",
      schemas: "./src/features/facts/model",
      client: "react-query",
      mock: false,
      prettier: true,
      override: {
        mutator: {
          path: "./src/shared/api/axios-instance.ts",
          name: "customInstance",
        },
      },
    },
  },
})
