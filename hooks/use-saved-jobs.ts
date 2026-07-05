"use client";

import * as React from "react";

const STORAGE_KEY = "orbitjobs:saved-jobs";

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event("orbitjobs:saved-jobs-updated"));
}

export function useSavedJobs() {
  const [savedIds, setSavedIds] = React.useState<string[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setSavedIds(readStorage());
    setHydrated(true);

    const sync = () => setSavedIds(readStorage());
    window.addEventListener("orbitjobs:saved-jobs-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("orbitjobs:saved-jobs-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isSaved = React.useCallback((id: string) => savedIds.includes(id), [savedIds]);

  const toggleSaved = React.useCallback((id: string) => {
    const current = readStorage();
    const next = current.includes(id)
      ? current.filter((j) => j !== id)
      : [...current, id];
    writeStorage(next);
    setSavedIds(next);
    return next.includes(id);
  }, []);

  const removeSaved = React.useCallback((id: string) => {
    const next = readStorage().filter((j) => j !== id);
    writeStorage(next);
    setSavedIds(next);
  }, []);

  return { savedIds, isSaved, toggleSaved, removeSaved, hydrated };
}
