import React from 'react'
import { getProviders, signIn } from "next-auth/react"

function Login({ providers }) {
    return (
        <div>
            This is a login page new
        </div>
    )
}

export default Login

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}
