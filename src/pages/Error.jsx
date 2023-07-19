import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
        <p className="text-3xl font-bold">404 Not Found</p>
        <p className="text-xl">Sorry we can't find the page that you're looking for</p>
        <button className="bg-cyan-800 text-white text-xl px-5 py-3 rounded-lg">
            <Link to="/">Go back to homepage</Link>
        </button>
    </div>
  )
}

export default Error