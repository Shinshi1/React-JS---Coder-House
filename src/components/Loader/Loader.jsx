import React from 'react'
import { Ring } from '@uiball/loaders'



const Loader = () => {
    return (
        <div className='flex justify-center my-56'>
            <Ring size={70} lineWeight={5} speed={2} color="black"/>
        </div>
    )
}

export default Loader