import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div className=" my-20 px-5 md:px-20">
            <div className=" text-center">
                <h1 className=" text-5xl font-extrabold">Job Category List {categories.length} </h1>
                <p className=" text-base text-[#757575] py-4 ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {
                    categories.map(category => <Category key={ category.id} category={category}></Category> )
                }
            </div>
        </div>
    );
};

export default Categories;