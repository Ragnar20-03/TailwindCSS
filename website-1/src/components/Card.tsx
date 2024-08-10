import React from "react"

interface CardProps {
    title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
    return <div className="grid grid-cols-1  sm:col-span-4 sm: sm:justify-center sm:flex-col   p-3 m-3 border-2 rounded-lg shadow-lg shadow-teal-900 border-teal-800">
        <div id="card-header" className="flex justify-center rounded-md bg-teal-800 text-white">
                <h1 className="p-3 ">{title}</h1>
        </div>
        <div className="p-3" id="card-body  ">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad sequi, excepturi consectetur natus aut laudantium voluptas vero inventore nihil tempore labore odio optio eos perferendis voluptates ex qui eius libero voluptatem soluta perspiciatis quis?
            </p>
        </div>
        
        <div className="grid grid-cols-3  text-white gap-1 p-1 " id="card-buttons">
        <button className="bg-teal-800 rounded-md col-span-1">
                Like
            </button>
            <button className=" bg-teal-800 rounded-md col-span-1">
                Comment
            </button> 
            <button className=" bg-teal-800 rounded-md col-span-1">
                Share
            </button>   
        </div>
        <div  className="w-full bg-red-900 grid grid-cols-3 text-white"  id="footer">
            <button>
                Watch More
            </button>
        </div>
    </div>
}

export default Card