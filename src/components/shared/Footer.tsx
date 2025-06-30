import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Facebook, Instagram, Mail, MapPin, PhoneCall, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#F4F6F6]">
      <MaxWidthWrapper>
        <footer className="">
          <div className="mx-auto w-full max-w-screen-xl  py-6 lg:py-8">
            <div className="">
              <div className="grid grid-cols-4 gap-4  flex-1">
                <div className="col-span-4 lg:col-span-1">
                  <div className="flex gap-2 items-center">
                    <Image src={"/images/logo.png" } alt="footer logo" height={30} width={30}/>
                    <h3 className="text-[#212337] text-2xl font-bold ">
                    Fresh Harvest
                  </h3>
                  </div>
                </div>
                <div>
                  <h2 className="mb-6 text-[12px] md:text-lg font-semibold text-[#212337]  dark:text-white">
                    Quick Links 1
                  </h2>
                  <ul className="text-[#4A4A52] text-sm dark:text-gray-400">
                    <li className="mb-4">
                      <span>Home</span>
                    </li>
                    <li className="mb-4">
                      <span>Shop</span>
                    </li>
                    <li className="mb-4">
                      <span>About Us</span>
                    </li>
                    <li className="mb-4">
                      <span>Detail Blog</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-[12px] md:text-lg font-semibold text-[#212337]  dark:text-white">
                    Quick Links 2
                  </h2>
                  <ul className="text-[#4A4A52] text-sm dark:text-gray-400">
                    <li className="mb-4">
                      <span>Favorite</span>
                    </li>
                    <li className="mb-4">
                      <span>Cart</span>
                    </li>
                    <li className="mb-4">
                      <span>Sign In</span>
                    </li>
                    <li className="mb-4">
                      <span>Register</span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <h2 className="mb-6 text-[12px] md:text-lg font-semibold text-[#212337]  dark:text-white">
                    Contact Us
                  </h2>
                  <ul className="text-[#4A4A52] text-sm dark:text-gray-400">
                    <li className="mb-4">
                      <span className="">
                        {" "}
                        <PhoneCall
                          size={14}
                          color="#749B3F"
                          className="inline-block mr-1"
                        />{" "}
                        1234 5678 90
                      </span>
                    </li>
                    <li className="mb-4">
                      <span className="">
                        {" "}
                        <Mail
                          size={14}
                          color="#749B3F"
                          className="inline-block mr-1"
                        />{" "}
                        Freshharvests@gmail.com
                      </span>
                    </li>
                    <li className="mb-4">
                      <span>
                        <MapPin
                          size={14}
                          color="#749B3F"
                          className="inline-block mr-1"
                        />{" "}
                        Tanjung Sari Street, Pontianak, Indonesia
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-between  md:flex-row-reverse">
                <div>
                  <h1 className="font-bold text-[#212337]">
                    Accepted Payment Method
                  </h1>
                  <div className="flex gap-3 flex-wrap mt-2">
                    <div>
                      <Image
                        src={"/images/visa.jpg"}
                        width={138}
                        height={40}
                        className="max-w-[69px] md:max-w-[138px] max-h-[40px] object-cover"
                        alt="store"
                      />
                    </div>

                    <div>
                      <Image
                        src={"/images/paypal.png"}
                        width={138}
                        height={40}
                        className="max-w-[69px] md:max-w-[138px]  max-h-[40px] object-cover"
                        alt="store"
                      />
                    </div>
                    <div>
                      <Image
                        src={"/images/applePay.png"}
                        width={138}
                        height={40}
                        className=" max-w-[69px] md:max-w-[138px] max-h-[40px] object-cover object-center"
                        alt="store"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-[#212337]">Download App</h1>
                  <div className="flex gap-3 flex-wrap mt-2">
                    <div>
                      <Image
                        src={"/images/appleStore.png"}
                        width={138}
                        height={40}
                        className="max-w-[138px] max-h-[40px] object-cover"
                        alt="store"
                      />
                    </div>

                    <div>
                      <Image
                        src={"/images/playstore.png"}
                        width={138}
                        height={40}
                        className="max-w-[138px] max-h-[40px] object-cover"
                        alt="store"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex flex-col gap-6 lg:flex-row-reverse">
                 <div className="flex gap-3 justify-center lg:justify-end">
                <div className="w-8 h-8 flex justify-center bg-[#212337] items-center rounded-full text-white">
                    <Twitter size={12} />
                </div>
                <div className="w-8 h-8 flex justify-center bg-[#212337] items-center rounded-full text-white">
                    <Facebook size={12} />
                </div>
                <div className="w-8 h-8 flex justify-center bg-[#212337] items-center rounded-full text-white">
                   <Instagram size={12} />
                </div>
              </div>
              <div>
                <h3 className="text-[12px] font-bold text-[#212337] text-center lg:text-start">
                  © Copyright 2024, All Rights Reserved by Banana Studio
                </h3>
              </div>
             
            </div>
          </div>
        </footer>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
