import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { getCurrentlyPlaying } from '@/lib/spotify';

export async function GET() {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  
  const currentTrack = await getCurrentlyPlaying(session.accessToken);
  
  if (!currentTrack) {
    return new Response(null, { status: 204 });
    // return NextResponse.json({ message: "No track currently playing" }, { status: 204 });
  }
  
  const track = {
    title: currentTrack.item.name,
    artist: currentTrack.item.artists.map((artist: any) => artist.name).join(", "),
    album: currentTrack.item.album.name,
    albumArt: currentTrack.item.album.images[0]?.url,
    isPlaying: currentTrack.is_playing,
  };
  
  return NextResponse.json(track);
}