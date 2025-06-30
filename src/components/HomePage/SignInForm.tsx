import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";

export function SingInForm() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-transparent">
            Sing in
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center">
              Login
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Email</Label>
                <Input
                  id="name-1"
                  name="name"
                  defaultValue="halima@gmail.com"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Password</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@password"
                  type="password"
                />
              </div>
            </div>

            <div className="flex justify-between gap-3 flex-wrap my-6">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="terms"
                  className="border-[#FF6A1A] data-[state=checked]:bg-[#FF6A1A] data-[state=checked]:border-[#FF6A1A]"
                />
                <Label htmlFor="terms">Remember Me</Label>
              </div>
              <p className="font-semibold underline">Forgot Password</p>
            </div>

            <Button className="bg-[#FF6A1A] hover:bg-[#FF6A1A] text-white w-full">
              {" "}
              Login
            </Button>

            <div className="flex items-center gap-3 my-4">
              <hr className="border-b border-[#D9D9D9] flex-1" />
              <p className="w-max text-[#4A4A52] font-bold">Or Sign In</p>
              <hr className="border-b border-[#D9D9D9] flex-1" />
            </div>

            <div className="flex gap-4">
              <Button variant={"outline"} className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4285F4"
                    d="M44.5 20H24v8.5h11.8C34.1 33.7 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.4 4.4 29.5 2 24 2 12.3 2 3 11.3 3 23s9.3 21 21 21c10.6 0 20-7.7 20-21 0-1.4-.2-2.7-.5-4z"
                  />
                  <path
                    fill="#34A853"
                    d="M6.3 14.7l6.6 4.9C14.3 16 18.8 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.4 4.4 29.5 2 24 2 16 2 9 6.9 6.3 14.7z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M24 44c5.4 0 10.3-1.9 14.1-5.1l-6.5-5.3C29.6 36.1 27 37 24 37c-5.6 0-10.1-3.3-11.8-8.5l-6.6 5.1C9 39.9 16 44 24 44z"
                  />
                  <path
                    fill="#EA4335"
                    d="M44.5 20H24v8.5h11.8c-1.3 3.4-4.4 6-8.3 7.2l6.5 5.3c3.8-3.5 6.5-8.6 6.5-15c0-1.4-.2-2.7-.5-4z"
                  />
                </svg>
                <span className="text-[#212337] font-bold text-base">
                  {" "}
                  Google
                </span>
              </Button>
              <Button variant={"outline"} className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="28"
                  height="28"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="text-[#212337]  font-bold text-base">
                  {" "}
                  Google
                </span>
              </Button>
            </div>

            <p className="text-[#212337] font-bold text-center mt-14">Don&apos;t have an account? <span className="text-[#FF6A1A]">Sign up</span></p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              
            </DialogClose>
            
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
