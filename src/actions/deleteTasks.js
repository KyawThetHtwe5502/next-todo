"use server"

import { revalidateTag } from "next/cache";

const deleteTasks = async (currentState,formData) => {
   const id = formData.get("id");
   console.log(id)
    const res = await fetch('http://localhost:3003/tasks/'+id,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  revalidateTag("tasks")
  console.log(res)
}

export default deleteTasks