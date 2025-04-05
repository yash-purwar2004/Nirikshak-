"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  })
}


const AuthForm = ({type} : {type: FormType}) => {
  const router = useRouter();
  const formSchema = authFormSchema(type)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Call your API to sign in or sign up
      if (type === "sign-up") {
        // Sign up logic here
        toast.success("Account created successfully");
        router.push("/sign-in");
      } else {
        toast.success("Logged in successfully");
        router.push("/");
      }
    }
    catch (error) {
  }}

  const isSignIn = type === "sign-in";


  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">Nirikshak</h2>
        </div>

        <h3>Practice job interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm