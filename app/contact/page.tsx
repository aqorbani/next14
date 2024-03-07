import React from "react";

function ContactPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold p-5">Contact Form</h3>
            <form className="flex flex-col w-full md:w-2/3 lg:w-1/2 gap-4 bg-slate-100 rounded">
                <input type="text" name="name" placeholder="Name" className="m-2 p-2 rounded" />
                <input type="email" name="email" placeholder="Email" className="m-2 p-2 rounded" />
                <button className="bg-green-800 m-2 p-2 text-white font-bold rounded">Send</button>
            </form>
        </div>
    );
}

export default ContactPage;
