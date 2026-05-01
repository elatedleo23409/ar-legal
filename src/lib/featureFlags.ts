export const featureFlags = {
  showTeam: process.env.NEXT_PUBLIC_SHOW_TEAM === "true",
} as const;
