export default function ServerTodoForm() {
    const addHandler = async () => {
        "use server";
        console.log("first")

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
