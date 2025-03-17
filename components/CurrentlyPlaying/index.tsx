'use client'

import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { PiSpotifyLogo } from 'react-icons/pi';
import { BsSpotify } from 'react-icons/bs';
import Image from 'next/image';

interface TrackData {
    title: string;
    artist: string;
    album: string;
    albumArt?: string;
    isPlaying: boolean;
}

const CurrentlyPlaying = () => {
    const { data: session } = useSession();
    const [currentTrack, setCurrentTrack] = useState<TrackData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchCurrentTrack = async () => {
            if (!session) return;

            setLoading(true);
            try {
                const res = await fetch('/api/currently-playing');
                if (res.status === 204) {
                    setCurrentTrack(null);
                } else if (res.ok) {
                    const data = await res.json();
                    setCurrentTrack(data);
                }
            } catch (error) {
                console.error('Error fetching currently playing track', error);
            } finally {
                setLoading(false);
            }
        };

        // Fetch initially
        fetchCurrentTrack();

        // Then set up polling every 30 seconds
        const intervalId = setInterval(fetchCurrentTrack, 30000);

        // Clean up on unmount
        return () => clearInterval(intervalId);
    }, [session]);

    if (!session) {
        return (
            <div className="mb-5 rounded-lg text-white max-w-md mt-10 md:mt-0">
                <button
                    onClick={() => signIn('spotify')}
                    className="flex items-center gap-3 border border-gray-200 text-sm text-white font-semibold py-2 px-6 rounded-full hover:border-[#1DB954] transition cursor-pointer"
                >
                   <BsSpotify fill='#1DB954' size={25} /> Login with Spotify
                </button>
            </div>
        );
    }

    return (
        <div className='w-full border-y border-gray-700 py-4 mb-5 mt-10 md:mt-0'>

            {currentTrack ? (<div className="flex items-center gap-4">
                <BsSpotify fill='#1DB954' size={25} />
                <div className='p-2 border border-gray-400 rounded-md flex justify-between items-center max-w-xs w-full'>
                    <div className='flex items-center'>

                        {currentTrack.albumArt && (
                            <img
                                src={currentTrack.albumArt}
                                alt={`${currentTrack.album} cover`}
                                className="w-10 h-10 rounded mr-5 shadow-lg"
                            />
                        )}
                        <div>
                            <p className={`text-xs ${currentTrack.isPlaying ? 'text-green-500' : 'text-yellow-500'}`}>
                                {currentTrack.isPlaying ? 'Now Playing' : 'Paused'}
                            </p>
                            <p className="font-semibold text-sm text-gray-300">{currentTrack.title}</p>
                        </div>
                    </div>
                    <div>
                        <Image src={'/playing.gif'} width={25} height={25} alt='gif' />
                    </div>
                </div>
            </div>) : (<p className="text-gray-300 flex items-center gap-4"><BsSpotify fill='#1DB954' size={25} />  No track currently playing</p>)}



        </div>
        // <div className="p-6 rounded-lg text-white max-w-md mx-auto">
        //     <h2 className="text-base font-bold mb-4">Currently Playing</h2>
        //     {loading ? (
        //         <p className="text-gray-300">Loading...</p>
        //     ) : false ? (
        //         <div className="flex items-center">
        //             {currentTrack.albumArt && (
        //                 <img
        //                     src={currentTrack.albumArt}
        //                     alt={`${currentTrack.album} cover`}
        //                     className="w-20 h-20 rounded mr-5 shadow-lg"
        //                 />
        //             )}
        //             <div>
        //             <BsSpotify fill='#1DB954' /> 
        //                 <p className="font-bold text-lg mb-1">{currentTrack.title}</p>
        //                 <p className="text-gray-400 mb-1">{currentTrack.artist}</p>
        //                 <p className="text-gray-400 text-sm mb-1">{currentTrack.album}</p>
        //                 <p className={`text-sm ${currentTrack.isPlaying ? 'text-green-500' : 'text-yellow-500'}`}>
        //                     {currentTrack.isPlaying ? 'Now Playing' : 'Paused'}
        //                 </p>
        //             </div>
        //         </div>
        //     ) : (
        //         <p className="text-gray-300"><BsSpotify fill='#1DB954' size={30}/>  No track currently playing</p>
        //     )}
        // </div>
    );
};

export default CurrentlyPlaying;