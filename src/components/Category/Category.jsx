/* eslint-disable react/prop-types */


const Category = ({category}) => {
    return (
        <div>
            <div className="card bg-[#F9F9FF] text-black p-6">
            <div className="card-body">
                <img className="w-10" src={category.logo} alt="" />
                <h2 className="card-title">{category.category_name}</h2>
                <p> {category.availability} </p>
            </div>
            </div>
        </div>
    );
};

export default Category;