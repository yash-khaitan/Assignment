import Head from "next/head";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [validInput, setValidInput] = useState(false);

  // checking if the number entered is valid or not
  const checkValidity = () => {
    const valid = phoneNumber.checkValidity();
    if (checkbox.checkValidity() && valid) {
      setValidInput(true);
      return;
    }
    setValidInput(false);
  };

  // preventing page to reload after submission
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" relative min-h-screen bg-[url('../public/Rectangle.png')] bg-no-repeat bg-left-bottom bg-[length:100%_auto] md:bg-[length:100%_50%]  bg-white">
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -------------------------NAV BUTTON----------------------------------------------- */}

      <div className="pt-[30px] md:pt-[50px] flex justify-end mr-[30px] ml-[30px] md:mr-[200px] md:ml-[200px]">
        <Link href="/Enter_Your_otp">
          <button
            className={`flex items-center justify-center background_navbutton h-[42px] w-[42px] md:h-[46px] md:w-[46px] 2xl:h-[55px] 2xl:w-[55px] rounded-full box-shadow_button ${
              validInput ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            disabled={!validInput ? true : false}
          >
            <img
              src="/Vector.svg"
              alt="ChevronRightIcon"
              className="md:h-[17.2px] h-[15px] text-[#FAFAFA]"
            />
          </button>
        </Link>
      </div>

      {/* ------------------------MOBILE NUMBER-------------------------------------------- */}

      <div className=" ml-[30px] mt-11 md:mt-[70px] md:mr-[200px] md:ml-[200px] relative z-[5]">
        <h1 className="mb-3 font-semibold text-[24px] relative  leading-[36px] md:leading-[130%] md:mb-4 text-[#1A1A1A] ">
          Your mobile number?{" "}
          <span className="absolute -top-[6px] -ml-[6px] transform rotate-12 ">
            {" "}
            <Image
              src="/Sparkle.svg"
              alt=""
              layout="fixed"
              height={18}
              width={18}
            />{" "}
          </span>{" "}
        </h1>

        {/* -------------------------NUMBER INPUT FORM------------------------------------------ */}

        <form>
          <div className="flex flex-col relative w-[18.75rem] md:w-[25.75rem]">
            <div className="flex items-center relative w-[18.75rem]">
              <span className="absolute pl-[110px] md:pl-[96px] flex items-center h-10 text-base  md:leading-[21px] text-[#1A1A1A] font-semibold not-italic">
                (+91)
              </span>
              <input
                type="number"
                placeholder="7992457474"
                name="PhoneNumber"
                required
                maxLength={10}
                pattern="[0-9]{10}"
                id="phoneNumber"
                className="h-10 w-[300px] pl-[155px] md:pl-[138px] pt-[2.5px] bg-[#f4f4f5]  box-shadow_input border-solid border border-[#cacaca] rounded-[10px] focus:outline-none text-base text-[#1a1a1a] font-medium md:text-[14px] md:leading-[21px] "
                onChange={checkValidity}
              />
            </div>
            <div className="w-[96px] md:w-[91px] flex items-center  absolute top-0 p-1 h-10 box-shadow_input rounded-[10px] bg-[#f4f4f5] ">
              <div className=" flex items-center mr-[6px] box-shadow_flag">
                {" "}
                <Image
                  src="/Indian_Flag2.webp"
                  alt="Indian Flag"
                  layout="fixed"
                  width={30}
                  height={20}
                  priority
                />
              </div>
              <p className="text-base font-medium mr-2">IN</p>
              <ChevronDownIcon className="w-6" />
            </div>

            {/* -----------------------TERMS AND CONDITIONS-------------------------------------------- */}

            <div className="mt-3 md:mt-4 flex">
              <div className="">
                <input
                  type="checkbox"
                  name="TermsAndConditions"
                  id="checkbox"
                  onClick={checkValidity}
                  required
                  className="mr-[6px] md:mr-3 h-[20px] w-[20px] box-shadow_input bg-[#f4f4f5] appearance-none checked:bg-[#6776ff] checked:before:content-['✔'] text-white flex justify-center items-center "
                />
              </div>
              <label
                htmlFor="TermsAndConditions"
                className="font-medium text-[12px] leading-[18px] tracking-[1px] "
              >
                By checking you confirm that you accept our <br />
                <a href="#" className="font-semibold underline">
                  {" "}
                  Terms and conditions
                </a>
                &nbsp;and have read out{" "}
                <a href="#" className="font-semibold underline">
                  {" "}
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
          <button type="submit" className="hidden" onClick={submit}></button>
        </form>
      </div>
      {/* --------------------------IMAGE--------------------------------------------------- */}

      <div className="absolute bottom-0 w-[100vw] m-[auto]  md:mt-[30px] md:-ml-[20px] flex justify-center z-0 ">
        <img
          src="/businessman_in_black_suit_jumping.png"
          alt="businessman in black suit jumping"
          className="w-[211px] h-[252px] 2xl:w-[392px] 2xl:h-[470px]"
        />
      </div>
    </div>
  );
}