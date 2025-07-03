import { About, Form, HeroSection, HowIHelp, Navbar,Faq } from "@/components";

export default function Home() {
  return (
    <>
      <div className="bg-[#fff0ec] py-2 flex justify-between px-4 lg:px-44 border-b-[1px] border-black items-center">
        <div>
          <h1 className="text-[#4a4c60] text-xs md:text-sm hover:underline cursor-pointer">
            (757) 474-5262
          </h1>
        </div>
        <div>
          <p className="text-[#4a4c60] text-xs md:text-sm hover:underline cursor-pointer">
            4913 Fitzhugh Avenue, Suite 102, Richmond, VA 23230
          </p>
        </div>
      </div>
      <Navbar />
      <HeroSection />
      <About />
      <HowIHelp />
      <Faq/>
      <Form />
    </>
  );
}
