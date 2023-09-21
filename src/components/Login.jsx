
import sideBanner from "../assets/login-banner.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useLoginContext } from '../../context/loginContext'
import { loginURL } from "../../utils/apiUrl"
import { useEffect } from "react"


const Login = () => {

  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  const { email, setEmail, password, setPassword, setUser } = useLoginContext()
  const navigate = useNavigate()


  const inputHandler = async (e) => {
    e.preventDefault()
    if (!email || !password) return;
    // console.log(email, password)

    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({ email, password })


    })
    const data = await response.json()
    setUser(data.user)
    if (data.success) {
      navigate("/")
    }

    localStorage.setItem("token", data.token)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      // console.log()
      navigate("/")
    }
  }, [])


  return (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] py-8 px-3 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="py-8 px-3 w-[600px]">
          <h1 className="text-6xl font-bold">Login</h1>

          <form onSubmit={inputHandler}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                required
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"

            >
              Sign in
            </button>
            <span className='ml-5 hover:underline text-[14px]'><Link to="/forgetPassword">Forget Password?</Link></span>
          </form>

        </div>
      </div>
      <div
        className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
        style={{
          backgroundImage: `${sideBanner}`,
        }}
      >
        {/* <img src={sideBanner} alt="" /> */}
      </div>
    </main>

  )
}

export default Login