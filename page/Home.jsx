import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginContext } from '../context/loginContext'

const Home = () => {
    const navigate = useNavigate()
    const { user, setUser } = useLoginContext()

    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token)
        if (!token) {
            navigate("/login")
        }
    }, [])
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null)
        navigate("/login")
    }
    console.log(user)
    return (
        <div><h1 className='text-4xl'>{`Welcome to Home ${user?.name}`}</h1>
            <button type='submit' className='text-3xl bg-slate-500 rounded-md p-3 mt-5' onClick={logout}>Logout</button>
        </div>
    )
}

export default Home