"use client";
import { ToastContainer, toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
    const success = () => {toast.success('Login Successfully');}
    const fail = () => {toast.error('Email or Password is incorrect');}
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const{data:res, error} = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: '/'
    })
    if(!error){
            success();
    }
    else{
        fail()
    }
  };

  return (
    <Card className=" mx-auto w-125 py-10 my-10">
      <h1 className="text-center text-2xl font-bold">Login</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
       
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Login
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
          
        </div>
        <Link href="/signup">
           <span className="text-sm"> Don't have an account? <span className="text-blue-500 hover:underline">Sign up</span> </span>
          </Link>
      </Form>
      <ToastContainer/>
    </Card>
  );
}