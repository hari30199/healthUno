import React from 'react'
const dummyData = [
  {
  id:1,
  title:'new1'
},
{
  id:2,
  title:'new2'
},
{
  id:3,
  title:'new3'
},
{
  id:4,
  title:'new4'
},
{
  id:5,
  title:'new5'
},

{
  id:5,
  title:'new6'
},
{
  id:6,
  title:'new7'
},
{
  id:7,
  title:'new8'
}
]

const Category = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-10'>
          <div className="flex justify-between items-center">
        <div/>
      <div>
        <h1 className="text-blue_dark text-2xl text-center">
          Doctor Created health Checks
        </h1>
      </div>
      <div className="text-blue_dark cursor-pointer">
        View all
      </div>
    </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8'>
        {dummyData.map((item, index) => (
                <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md cursor-pointer hover:bg-gray-200 '>
                    <img className='w-16' src={item.image} alt={item.name}/>
                    <h2 className='sm:text-l font-light'>{item.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category