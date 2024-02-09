import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Image from 'next/image';


async function Login() {

    const providers = await getProviders();

    return (
        <div>
            {/* <img className='w-52 mb-5' src='https://links.papareact.com/9xl' /> */}

            <Image src="/spotifyLogo.png" alt="Spotify_Logo" width={208} height={500} style={{ marginBottom: '20px' }} />


            {providers ? (
                Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className='bg-[#18D860]'>Login with {provider.name}</button>
                    </div>
                ))
            ) : (
                <div>Loading Providers...</div>
            )}
        </div>
    )
}

export default Login