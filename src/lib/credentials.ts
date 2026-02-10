import { NextRequest } from "next/server";
import type { SpotifyCredentials } from "./spotify";

export function getCredentials(request: NextRequest): SpotifyCredentials | null {
  const rawId = request.cookies.get("sp_client_id")?.value;
  const rawSecret = request.cookies.get("sp_client_secret")?.value;
  const rawUri = request.cookies.get("sp_redirect_uri")?.value;

  if (!rawId || !rawSecret || !rawUri) return null;

  return {
    clientId: decodeURIComponent(rawId),
    clientSecret: decodeURIComponent(rawSecret),
    redirectUri: decodeURIComponent(rawUri),
  };
}
