import {Link} from "react-router-dom";
import {Button, Checkbox, Label, TextInput} from "flowbite-react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    Cookies.set("username", userData.username);
    Cookies.set("password", btoa(userData.password));
    navigate("/home");
  };

  return (
    <div className="flex">
      <div className="flex justify-center min-h-screen items-center">
        <div className="flex-row w-1/2">
          <h1 className="text-[#212529] font-normal text-[64px] leading-[76px]">E-Commerce</h1>
          <h1 className="text-[#012970] font-normal text-[64px] leading-[76px]">for your needs</h1>
          <p className="mt-4 text-[##757F8E]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ipsum beatae nam laborum dignissimos.
            Perspiciatis quaerat ducimus ipsa assumenda maiores.
          </p>
        </div>
      </div>
      <form className="flex w-80 flex-col justify-center gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Your username" />
          </div>
          <TextInput id="username" name="username" required type="username" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" name="password" required type="password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
        <p className="text-sm">
          Don't have an account ?{" "}
          <Link className="text-cyan-800" to="/register">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
