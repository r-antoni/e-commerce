import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
      <div className='flex'>
        <div className="flex justify-center min-h-screen items-center">
          <div className="flex-row w-1/2">
            <h1 className="text-[#212529] font-normal text-[64px] leading-[76px]">
              E-Commerce
            </h1>
            <h1 className="text-[#012970] font-normal text-[64px] leading-[76px]">
              for your needs
            </h1>
            <p className="mt-4 text-[##757F8E]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              ipsum beatae nam laborum dignissimos. Perspiciatis quaerat ducimus
              ipsa assumenda maiores.
            </p>
          </div>
        </div>
        <form className="flex w-80 flex-col gap-4 justify-center">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email2"
            value="Your email"
          />
        </div>
        <TextInput
          id="email2"
          placeholder="name@flowbite.com"
          required
          shadow
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password2"
            value="Your password"
          />
        </div>
        <TextInput
          id="password2"
          required
          shadow
          type="password"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="repeat-password"
            value="Repeat password"
          />
        </div>
        <TextInput
          id="repeat-password"
          required
          shadow
          type="password"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label
          className="flex"
          htmlFor="agree"
        >
          <p>
            I agree with the <span className="text-cyan-600 hover:underline dark:text-cyan-500">terms and conditions</span>
          </p>
          
        </Label>
      </div>
      <Button type="submit">
        Register new account
      </Button>
      <p className="text-sm">
          Have an account ? <Link className="text-cyan-800" to="/">Login Here</Link>
    </p>
    </form>
      </div>
  )
}

export default Register