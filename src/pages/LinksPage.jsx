import React from 'react'

function LinksPage() {
  return (
    <div className='flex w-full justify-between'>
        <div className=' flex flex-col gap-8 mt-4 w-full'>
            <h1 className='text-3xl my-4 font-bold'>Project Links</h1>
            <p><a target="_blank" rel="noreferrer" href='https://github.com/Aaditya2609/fitness-tracker-frontend' class="text-white bg-[#00CED1] hover:text-[#00CED1] hover:bg-[white] hover:border-2 hover:border-[#00CED1] first-letter:focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Frontend Github</a></p>
            <p><a  target="_blank" rel="noreferrer" href='https://github.com/Aaditya2609/fitness-tracker-backend' class="text-white bg-[#00CED1] hover:text-[#00CED1]  hover:bg-[white] focus:ring-4 hover:border-2 hover:border-[#00CED1] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Backend Github</a></p>
            <p><a target="_blank"  rel="noreferrer" href='https://assignmen-17.cyclic.cloud' class="text-white bg-[#00CED1] hover:bg-[white] hover:text-[#00CED1] hover:border-2 hover:border-[#00CED1] first-letter:focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Backend Live Link (https://assignmen-17.cyclic.cloud)</a></p>
        </div>
    </div>
  )
}

export default LinksPage