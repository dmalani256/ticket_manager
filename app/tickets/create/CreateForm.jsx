"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
    const router = useRouter()

    const[title, setTitle] = useState('')
    const[user_email, set_user_email] = useState('')
    const[body, setBody] = useState('')
    const[priority, setPriority] = useState('low')
    const[isLoading, setIsLoading] = useState(false)

    const handlingSubmissionOfTickets = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const ticket = {
            id, title, body, priority, user_email
        }
        const res = await fetch('http://localhost:4000/tickets', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        })
        if(res.status === 201){
            router.push('/tickets')
            router.refresh()
        }
    }
    
    return (
        <form onSubmit={handlingSubmissionOfTickets} className="w-1/2">
            <label>
                <span>Title</span>
                <input 
                required
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
                />
            </label>
            <label>
                <span>User</span>
                <input 
                required
                type="text"
                onChange={(e) => set_user_email(e.target.value)}
                value={user_email} 
                />
            </label>
            <label>
                <span>Body</span>
                <textarea 
                required 
                onChange={(e) => setBody(e.target.value)} 
                value={body}
                />
            </label>
            <label>
                <span>Priority</span>
                <select
                required
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
            className="btn-primary"
            disabled={isLoading}
            >
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}
