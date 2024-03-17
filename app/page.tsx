import ServerTodoForm from "@/components/ServerTodoForm"
import TodoList from "@/components/TodoList"
import Link from "next/link"

function Home() {
  return (
    <div>
      <h1 className="text-lg text-green-700 font-semibold">صفحه اصلی</h1>
      <ul>
        <li>
          <Link href="/about">
            About Page
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact Page
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog Page
          </Link>
        </li>
      </ul>
      <hr />
      <ServerTodoForm />
      <TodoList />
    </div>
  )
}

export default Home