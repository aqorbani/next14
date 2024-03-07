import { revalidateTag } from "next/cache"

interface Message {
    id: number,
    name: string,
    email: string,
    message: string
}

async function ContactPage() {

    const response = await fetch("http://localhost:8000/messages", { cache: "no-cache", next: { tags: ['messages'] } })
    let data: Message[] = await response.json()

    async function addMessage(e: FormData) {
        'use server'

        const name = e.get('name')
        const email = e.get('email')
        const message = e.get('message')

        const newMessage = { name, email, message }

        const res = await fetch("http://localhost:8000/messages", {
            method: 'POST',
            body: JSON.stringify(newMessage),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (res.status === 201) {
            revalidateTag('messages')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold p-5">Contact Form</h3>
            <form action={addMessage} className="flex flex-col w-full md:w-2/3 lg:w-1/2 gap-4 bg-slate-100 rounded">
                <input type="text" name="name" placeholder="Name" className="m-2 p-2 rounded" />
                <input type="email" name="email" placeholder="Email" className="m-2 p-2 rounded" />
                <textarea name="message" placeholder="Message" className="m-2 p-2 rounded" />
                <button className="bg-green-800 m-2 p-2 text-white font-bold rounded">Send</button>
            </form>
            <div>
                <h5>latest messages</h5>
                <ul>
                    {
                        data.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default ContactPage;
