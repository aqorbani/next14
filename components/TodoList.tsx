import Todo from "@/models/Todo"
import connectDB from "@/utils/ConnectDB"

export default async function TodoList() {
    await connectDB()

    const data = await Todo.find();



    return (
        <div>
            <hr />
            {
                data.map(item => (
                    <p key={item._id}>
                        {item.title}
                    </p>
                ))
            }
        </div>
    )
}
