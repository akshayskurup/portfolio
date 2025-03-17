// lib/spotify.ts
import axios from "axios";

export const getCurrentlyPlaying = async (accessToken: string) => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // If nothing is playing, return null
    if (response.status === 204) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching currently playing:", error);
    return null;
  }
};