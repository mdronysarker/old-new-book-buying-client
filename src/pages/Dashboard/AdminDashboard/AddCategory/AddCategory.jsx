import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const AddCategory = ({ categoryList }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategory = async (e) => {
    e.preventDefault();
    for (let category of categoryList) {
      if (category.category === categoryName) {
        Swal.fire({
          title: ` "${categoryName}" is already Exist !!`,
          icon: "error",
        });
        return;
      }
    }
    if (categoryName.length < 3) {
      Swal.fire({
        title: "Name must have 3 latter !!",
        icon: "question",
      });
    } else {
      const categoryObject = {
        category: categoryName,
      };
      axios
        .post("http://localhost:5000/addCategory", categoryObject)
        .then((res) => {
          if (res.data.status) {
            Swal.fire({
              icon: "success",
              title: "Category Add successfully",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="ms-14 mt-10 my-10">
      <form method="post" className="flex flex-col">
        <input
          type="text"
          name="Category"
          id="category"
          onBlur={(e) => {
            setCategoryName(e.target.value);
          }}
          placeholder="Add Category"
          className="input input-bordered w-[280px] max-w-xs mx-5 my-3 border"
        />
        <button
          type="submit"
          onClick={handleCategory}
          className=" w-60 mt-5  px-[10px] py-4  text-sm font-bold text-white border bg-primary font-dm hover:text-primary hover:bg-white hover:border hover:border-primary border-radius: rounded"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
