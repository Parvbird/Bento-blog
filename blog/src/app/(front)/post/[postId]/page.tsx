import React from 'react'

type Props = {}

const page = ({params}) => {
    const postId = params
  return (
    <div className='w-full flex flex-col gap-10 align-middle items-start lg:p-10 p-3'>
        <div className="mt-[150px] flex flex-col w-full gap-10 align-middle items-start">
        Post page : {JSON.stringify(postId)}
        </div>
    </div>
  )
}

export default page