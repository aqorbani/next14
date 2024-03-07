function PostPage({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h4>slug is :</h4>
            <p>{params.slug}</p>
        </div>
    )
}

export default PostPage