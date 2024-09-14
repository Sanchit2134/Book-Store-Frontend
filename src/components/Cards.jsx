import React from 'react'

const Cards = ({item}) => {
    console.log(item) 
    return (
        <>
            <div className='mt-6 flex p-4 '>
                <div className="card bg-base-100 w-96 hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={item.image}
                            alt="Books" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <button className="badge badge-outline hover:bg-pink-500 cursor-pointer duration-200">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards