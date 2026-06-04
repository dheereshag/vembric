import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ApiVersion = "v1" | "v2";

interface ApiVersionState {
  version: ApiVersion;
  setVersion: (version: ApiVersion) => void;
}

export const useApiVersionStore = create<ApiVersionState>()(
  persist(
    (set) => ({
      version: "v1",
      setVersion: (version) => set({ version }),
    }),
    {
      name: "vembric-api-version",
    }
  )
);
