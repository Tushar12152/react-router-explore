import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetail = () => {
     const detail=useLoaderData();
    //  console.log(detail)
     const{thumbnail,title,description,price,category,brand ,rating,stock}=detail;
    const navigate=useNavigate();
     const handleBack=()=>{
            navigate(-1)
     }
    return (
        <div className="w-[80%] ml-80 mt-24">
              <div className="flex gap-6">
                  <div className="border-2 border-pink-400 rounded-xl">
                        <img className="h-52 w-fill " src={thumbnail} />
                  </div>
                  <div>
                         <div className="border-2 border-pink-400 rounded-xl p-5">
                             <h1 className="font-bold text-center text-xl ">{title}</h1>
                             <p className=" text-center text-lg ">{description}</p>
                             <h2 className="font-bold text-center text-xl " >price: {price} $</h2>
                             <p className="font-bold text-center text-xl ">{category}</p>
                             <h1 className="font-semibold text-center text-xl ">Brand Name: {brand}</h1>
                             <p className="text-center text-xl ">{rating}</p>
                             <p className="font-bold text-center text-xl p-5 ">Stock: {stock}</p>
                             <button onClick={handleBack} className="p-2 text-white ml-32 bg-pink-500 rounded-lg">Go Back</button>
                         </div>
                  </div>
                
                   
              </div>
        </div>
    );
};

export default ProductDetail;