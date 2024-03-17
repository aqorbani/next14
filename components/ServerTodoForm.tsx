"use client"

export default function ServerTodoForm() {
    const addHandler = (event: React.SyntheticEvent) => {
        event.preventDefault()
        console.log(event)
    }
    return (
        <div>
            <form onSubmit={addHandler}>
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
