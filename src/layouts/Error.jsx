import React from 'react'
import { useRouteError } from 'react-router-dom'

export function Error() {

    const error = useRouteError();
    console.log( error )
    return (
        <div className='alert alert-danger'>
            <h1>Error occurs</h1>
            <p>{error.message}</p>
        </div>
    )
}
