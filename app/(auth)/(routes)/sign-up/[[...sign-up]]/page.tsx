import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="background flex flex-col justify-center items-center gap-y-10">
      <div className="text-center font-mono font-semibold">
        <span className="text-8xl">Hi there!</span>
      </div>
      <SignUp />
    </div>
  );
}
