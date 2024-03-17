import Todo from "@/models/Todo";
import connectDB from "@/utils/ConnectDB";
import { revalidatePath } from "next/cache";

export default function ServerTodoForm() {
    const addHandler = async (formData: FormData) => {
        "use server";

        const title = formData.get("title")
        const description = formData.get("description")

        await connectDB();

        const todo = await Todo.create({ title, description });

        revalidatePath("/")

    }
    return (
        <div>
            <form action={addHandler}>
                <div>
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" id="description" />
                </div>
                <button type="submit">Add todo</button>
            </form>
        </div>
    )
}
