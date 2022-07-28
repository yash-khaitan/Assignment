import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import { useStateValue } from "../context/StateProvider";

const What_is_Your_Role = () => {
  const timeoutRef = useRef(null);
  const [userData, dispatch] = useStateValue();
  const [experience, setExperience] = useState();
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [failedToastNotification, setFailedToastNotification] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [successToastNotification, setSuccessToastNotification] =
    useState(false);
  const [trendingRoles, setTrendingRoles] = useState([
    "UI Developer",
    "Frontend Developer",
  ]);
  const [yearsOfExperience, setYearsOfExperience] = useState([
    "Fresher",
    "1-3 years",
    "3-6 years",
    "6+ years",
  ]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setSuccessToastNotification(false);
      setFailedToastNotification(false);
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [successToastNotification, failedToastNotification]);

  // closing the roles dropdown box when clicked anywhere outside the box
  useEffect(() => {
    const closeDropDown = (e) => {
      if (e.path[0].tagname !== "INPUT") {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
    document.body.addEventListener("click", closeDropDown);
    return document.body.addEventListener("click", closeDropDown);
  }, []);

  // On checked its adding the role in the array and  on unchecked its removing the role from the array.
  const handleCheck = (e) => {
    // console.log(e.target.name);
    if (e.target.checked) {
      let present = false;
      selectedRoles.map((item, index) => {
        if (item == e.target.name) present = true;
      });
      present ? "" : setSelectedRoles([...selectedRoles, e.target.name]);
    } else {
      setSelectedRoles(
        selectedRoles.filter((role, index) => {
          return e.target.name != role;
        })
      );
    }
  };

  // Pushing the data to API endpoint
  const pushData = () => {
    const data = { ...userData, role: selectedRoles, experience: experience };
    fetch("https://api.fastjobs.io/frontendtask", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        // console.log("success:", data);
        setSuccessToastNotification(true);
        {
        }
      })
      .catch((error) => {
        // console.log("Error:", error);
        setFailedToastNotification(true);
        {
        }
      });
  };

  // preventing page to reload after submission
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[url('/Rectangle.png')] bg-no-repeat bg-left-bottom bg-[length:100%_auto] md:bg-[length:100%_50%]  bg-white realtive">
      <Head>
        <title>Where can I reach you</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --------------------------------Toast Notification------------------------------------- */}

      <div
        className={`absolute top-5 right-5 background-linear-green rounded-[10px] pt-[25px] pb-[25px] pr-[30px] pl-[30px] text-base font-semibold text-[#FAFAFA] flex justify-between w-[380px] ${
          successToastNotification ? "block" : "hidden"
        }`}
      >
        <div
          className="bg-[#FAFAFA] mr-2 w-[23px] h-[23px] rounded-full box-shadow_button text-center text-[#6ef262] font-semibold cursor-pointer"
          onClick={() => {
            setSuccessToastNotification(false);
          }}
        >
          x
        </div>
        <p>Form submitted successfully 😃</p>
      </div>
      <div
        className={`absolute top-5 right-5 background-linear-red  rounded-[10px] pt-[25px] pb-[25px] pr-[30px] pl-[30px] text-base font-semibold text-[#FAFAFA] flex justify-between w-[380px]  ${
          failedToastNotification ? "block" : "hidden"
        }`}
      >
        <div
          className="bg-[#FAFAFA] mr-2 w-[23px] h-[23px] rounded-full box-shadow_button text-center text-[#f26262] font-semibold cursor-pointer"
          onClick={() => {
            setFailedToastNotification(false);
          }}
        >
          x
        </div>
        <p>Form submission unsuccessfull 🥺</p>
      </div>

      <div className="pt-[30px] md:pt-[50px] flex justify-end mr-[30px] ml-[30px] md:mr-[200px] md:ml-[200px]">
        {/* --------------------------Nav Button --------------------------------------------------- */}

        <Link href="#">
          <button
            className={`flex items-center justify-center background_navbutton h-[42px] w-[42px] md:h-[46px] md:w-[46px] 2xl:h-[55px] 2xl:w-[55px] rounded-full box-shadow_button 
              ${
                experience && selectedRoles
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }
            `}
            disabled={experience && selectedRoles ? false : true}
            onClick={pushData}
          >
            <img
              src="/Vector.svg"
              alt="ChevronRightIcon"
              className="md:h-[17.2px] h-[15px] text-[#FAFAFA]"
            />
          </button>
        </Link>
      </div>
      {/* --------------------------Help know you better ---------------------------------------- */}

      <div className=" ml-[30px] mt-[4.66px] md:mt[10px] md:ml-[200px] ">
        <p className="font-normal text-[12px] leading-[18px] text-[#6776FF] mb-3 md:mb-4">
          Help us know you better!
        </p>
        <div className="  relative w-fit">
          <div className="w-fit flex items-start space-x-[32px] ">
            <div className=" z-10 w-[17.99px] h-[18px] rounded-full background-linear-blue text-center text-[12px] leading-[18px] font-semibold text-[#FAFAFA] ">
              1
            </div>
            <div className="z-10 w-[17.99px] h-[18px] rounded-full background-linear-blue text-center text-[12px] leading-[18px] font-semibold text-[#FAFAFA] ">
              2
            </div>
            <div className=" z-10 w-[17.99px] h-[18px] rounded-full background-linear-blue text-center text-[12px] leading-[18px] font-semibold text-[#FAFAFA] ">
              3
            </div>
          </div>
          <div className="absolute z-0 border border-dashed border-[#6776FF] w-1/2 h-0 top-2/4 left-1/2"></div>
          <div className="absolute z-0 border border-dashed border-[#6776FF] w-1/2 h-0 top-1/2 "></div>
        </div>
      </div>
      {/* -------------------------- Role you are looking for ----------------------------------------- */}

      <div className="ml-[30px] mt-[30px] md:mt-[25.16px] md:mr-[200px] md:ml-[200px] relative z-[5]">
        <h1 className=" font-semibold text-[18px] relative  leading-[130%] md:leading-[130%] md:mb-3 text-[#1A1A1A] ">
          Role You are looking for?{" "}
          <span className="absolute -top-[6px] -ml-[6px] transform rotate-[15deg] ">
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
        {/* -------------------------- form --------------------------------------------------- */}

        <form
          className="mt-3 relative w-fit"
          onMouseEnter={() => {
            setDropdown(true);
          }}
          onMouseLeave={() => {
            setDropdown(false);
          }}
          onClick={() => {
            setDropdown(true);
          }}
        >
          {/* -------------------------- Roles input --------------------------------------------------- */}

          <div
            className=" flex items-center justify-center box-shadow_input h-10 w-[300px] bg-[#F4F4F5] border-solid border border-[#cacaca] rounded-[10px] "
            tagname="INPUT"
          >
            <input
              placeholder="Eg.Web Developer"
              required
              disabled
              tagname={"INPUT"}
              className="flex-grow focus:outline-none pt-[8px] pb-[8px] pl-[16px] pr-[16px] gap-[10px] md:pt-[10px] md:pb-[10px] md:pr-[20.64] md:pl-[20.64px] text-base font-medium text-[#1A1A1A] md:text-[14px] md:leading-[21px] "
            />
            <img
              src="/ChevronDownIcon.svg"
              alt=""
              tagname="INPUT"
              className=" w-[12.02px] h-[6px] m-[17px]"
            />
          </div>

          {/* -------------------------- Roles Dropdown --------------------------------------------- */}

          <div
            className={` absolute z-30  bg-[#F4F4F4] w-[300px] h-[120px] p-4  flex flex-col space-y-[12px] rounded-[10px] box-shadow_input  ${
              dropdown ? "block" : "hidden"
            } `}
          >
            <div className="flex  justify-start items-center">
              <input
                type="checkbox"
                name="Business Associate"
                id="checkbox1"
                className=" bg-[#F4F4F4] 
               appearance-none  rounded-md w-6 h-6 mr-3 checked:bg-[#6776ff] checked:before:content-['✔'] text-white flex justify-center items-center box-shadow_checkbox checked:box-shadow_checkbox-checked "
                onClick={handleCheck}
              />
              <label
                htmlFor="checkbox1"
                className=" text-[16px] leading-[24px] text-[#1A1A1A] "
              >
                Business Associate
              </label>
            </div>
            <div className="flex  justify-start items-center">
              <input
                type="checkbox"
                name="UI Engineer"
                id="checkbox2"
                className=" bg-[#F4F4F4] 
               appearance-none  rounded-md w-6 h-6 mr-3 checked:bg-[#6776ff] checked:before:content-['✔'] text-white flex justify-center items-center box-shadow_checkbox checked:box-shadow_checkbox-checked "
                onClick={handleCheck}
              />
              <label
                htmlFor="checkbox2"
                className=" text-[16px] leading-[24px] text-[#1A1A1A] "
              >
                UI Engineer
              </label>
            </div>
            <div className="flex  justify-start items-center">
              <input
                type="checkbox"
                id="checkbox3"
                name="UI Developer"
                className=" bg-[#F4F4F4] 
               appearance-none  rounded-md w-6 h-6 mr-3 checked:bg-[#6776ff] checked:before:content-['✔'] text-white flex justify-center items-center box-shadow_checkbox checked:box-shadow_checkbox-checked "
                onClick={handleCheck}
              />
              <label
                htmlFor="checkbox3"
                className=" text-[16px] leading-[24px] text-[#1A1A1A] "
              >
                UI Developer
              </label>
            </div>
          </div>
          <button type="submit" className="hidden" onClick={submit}></button>
        </form>
        {/* -------------------------- Preferred Roles ---------------------------------------------- */}

        <div className="mt-2 flex  max-w-[300px] flex-wrap">
          {selectedRoles.map((roles, index) => (
            <button
              key={index}
              className={` flex items-center justify-between  h-8 background_city_selected rounded-[10px] pt-[4px] pb-[4px] pr-[8px] pl-[8px] text-base font-medium text-[#FAFAFA] text-center  cursor-default whitespace-pre max-w-[250px] mb-1 mr-1`}
            >
              <div className="flex items-center justify-between w-full">
                <span>{roles}</span>
                <div
                  className="bg-[#FAFAFA] ml-4 w-[23px] h-[23px] rounded-full box-shadow_button text-center text-[#6776FF] font-semibold cursor-pointer"
                  onClick={() => {
                    setSelectedRoles(
                      selectedRoles.filter((item, index) => {
                        return item != roles;
                      })
                    );

                    selectedRoles.map((role, index) => {
                      role == checkbox1.name ? (checkbox1.checked = false) : "";
                      role == checkbox2.name ? (checkbox2.checked = false) : "";
                      role == checkbox3.name ? (checkbox3.checked = false) : "";
                    });
                  }}
                >
                  x
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* -------------------------- Trending Roles --------------------------------------------------- */}

        <div className="mt-3">
          <h3 className="mb-1 font-medium text-[14px] relative text-black leading-[20px] lg:mb-2 tracking-[1px]">
            Trending Roles:{" "}
          </h3>
          <div className="mt-[4px] flex flex-wrap  max-w-[300px] md:max-w-[80vw]">
            {trendingRoles.map((role, index) => (
              <div className="cursor-pointer mr-3 mb-3" key={index}>
                <button
                  className={` cursor-pointer  bg-white rounded-[10px] box-shadow_cities pt-[10px] pb-[10px] pr-[8px] pl-[8px] text-sm font-medium text-[#6776FF] text-center whitespace-nowrap tracking-[1px]`}
                  onClick={() => {
                    let present = false;
                    selectedRoles.map((item, index) => {
                      if (item == role) present = true;
                    });
                    present ? "" : setSelectedRoles([...selectedRoles, role]);
                  }}
                >
                  {role}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* -------------------------- Experience --------------------------------------------------- */}

        <div className=" mt-[12.75px]  lg:mt-[20px]">
          <h1 className=" font-semibold text-[18px] relative  leading-[130%] md:leading-[130%] md:mb-3 text-[#1A1A1A] ">
            How many years of work experience{" "}
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
          <div className="mt-[4px] flex   md:max-w-[80vw] max-w-[300px] flex-wrap ">
            {yearsOfExperience.map((years, index) => (
              <div className="cursor-pointer mr-3 mb-3" key={index}>
                <button
                  className={` cursor-pointer  rounded-[10px] box-shadow_experience pt-[10px] pb-[10px] pr-[8px] pl-[8px] text-sm font-medium  text-center whitespace-nowrap tracking-[1px] ${
                    experience == years
                      ? "background_experience_selected text-[#FAFAFA]"
                      : "bg-white text-[#6776FF]"
                  } `}
                  onClick={() => {
                    setExperience(years);
                    console.log(experience);
                  }}
                >
                  {years}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* -------------------------- Image --------------------------------------------------- */}

      <div className="absolute  w-[100vw] bottom-[1px]  lg:bottom-[46px]   flex justify-center z-0">
        <img
          src="/seated businesswoman in blue suit with laptop.png"
          alt="seated businesswoman in blue suit with laptop"
          className="w-[164.08px] h-[233.89px] 2xl:w-[500.74px] 2xl:h-[373.77px] ml-[110px] "
        />
      </div>
    </div>
  );
};

export default What_is_Your_Role;
