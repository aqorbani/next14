"use client"
import { usePathname } from "next/navigation"

function PostPage({ params }: { params: { slug: string } }) {
    const path = usePathname()
    console.log(path)
    return (
        <div>
            <h4>slug is :</h4>
            <p>{params.slug}</p>
        </div>
    )
}

export default PostPage