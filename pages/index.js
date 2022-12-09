import Head from "next/head";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiNotification2Line } from "react-icons/ri";
import { RiFileListLine } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { GrSchedulePlay } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
import { ImEarth } from "react-icons/im";
import { MdVerified } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdScheduleSend } from "react-icons/md";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="black">
        <style jsx>{`
          .black {
            background-color: #000000;
          }
        `}</style>
        <div className="flex  ">
          <div className=" flex flex-col w-44">
            <div className="flex justify-end mr-6 mt-4  ">
              <BsTwitter className="text-slate-300  w-7 h-7  " />
            </div>
            <div className="flex justify-end mr-6 mt-6 ">
              <BiHomeCircle className="text-slate-300  w-6 h-6  " />
            </div>
            <div className="flex justify-end mr-6 mt-6 ">
              <HiOutlineHashtag className="text-slate-300  w-6 h-6  " />
            </div>
            <div className="flex justify-end mr-6 mt-6 ">
              <RiNotification2Line className="text-slate-300  w-6 h-6  " />
            </div>
            <div className="flex justify-end mr-6 mt-6 ">
              <HiOutlineMail className="text-slate-300  w-6 h-6  " />
            </div>
            <div className="flex justify-end mr-6 mt-6 ">
              <FaRegBookmark className="text-slate-300  w-6 h-6  " />
            </div>

            <div className="flex justify-end mr-6 mt-6 ">
              <RiFileListLine className="text-slate-300  w-6 h-6  " />
            </div>
            <div className="flex justify-end mr-6 mt-6 ">
              <BsPerson className="text-slate-300  w-6 h-6  " />
            </div>

            <div className="flex justify-end mr-6 mt-6 ">
              <CgMoreO className="text-slate-300  w-6 h-6  " />
            </div>
          </div>

          <div className="bg-black text-slate-200 w-2/4 border-x border-slate-500">
            <h1 className="m-2 font-bold">Home</h1>

            <div className="flex">
              <div className="m-3 ">
                <CgProfile className="mt-2 h-10 w-10" />
              </div>
              <div className="m-2 w-full">
                <textarea
                  className="w-full p-2 bg-transparent outline-none placeholder-gray-400 resize-none"
                  rows="2"
                  placeholder="What's happening?"
                ></textarea>
                <div className="m-2 flex flex-row">
                  {" "}
                  <ImEarth className="mt-1 text-blue-500" />
                  <span className="ml-2 mb-2 text-sm font-medium text-blue-500">
                    Everyone can reply
                  </span>
                </div>
                <hr className=" " />
                <div className="flex flex-row  justify-between m-2">
                  <div className="flex flex-row justify-start">
                    <div className="mr-2 mt-2 ">
                      <HiOutlinePhotograph className="w-5 h-5  text-blue-500" />
                    </div>
                    <div className="m-2">
                      <RiFileGifLine className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="m-2">
                      <BiPoll className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="m-2">
                      <BsEmojiSmile className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="m-2">
                      <MdScheduleSend className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="m-2">
                      <SlLocationPin className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="mt-2 mr-2 bg-blue-500 px-4 py-1 font-medium rounded-full ">
                    Tweet
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-row m-4 text-blue-500  justify-center items-center">
              Show 411 Tweets
            </div>
            <hr />
            <div className="mt-4 mb-4">
              <div className="flex flex-row ">
                <CgProfile className="w-10 h-10 ml-2 " />
                <span className="font-medium ml-2">Moneycontrol</span>
                <span className="mt-1.5 ml-1">
                  <MdVerified className="text-blue-500" />
                </span>
                <span className="ml-0.5 text-slate-500 text-sm mt-0.5 ">
                  @moneycontrolcom
                </span>
                <span className="ml-1 text-slate-500 text-sm mt-0.5">.44m</span>
              </div>
              <p className=" ml-14 mr-2">
                In #MCRecommends this weekend: Paul John Christmas Edition 2022,
                HOSA Goa, Hamilton Khakhi Field Murph 38mm.
                <br />
                Full list out in #MCWeekendReads⚡️tomorrow.
              </p>
            </div>
            <hr />
            <div className="ml-16 mt-4 mb-4">
              <div className="flex flex-row"></div>
              <div className="flex flex-row ">
                <span className="font-medium">Moneycontrol</span>
                <span className="mt-1.5 ml-1">
                  <MdVerified className="text-blue-500" />
                </span>
                <span className="ml-0.5 text-slate-500 text-sm mt-0.5 ">
                  @moneycontrolcom
                </span>
                <span className="ml-1 text-slate-500 text-sm mt-0.5">.44m</span>
              </div>

              <p className="mt-2 mr-2">
                In #MCRecommends this weekend: Paul John Christmas Edition 2022,
                HOSA Goa, Hamilton Khakhi Field Murph 38mm.
                <br />
                Full list out in #MCWeekendReads⚡️tomorrow.
              </p>
            </div>
            <hr />
            <div className="ml-16 mt-4 mb-4">
              <div className="flex flex-row ">
                <span className="">Moneycontrol</span>
                <span className="mt-1.5 ml-1">
                  <MdVerified className="text-blue-500" />
                </span>
                <span className="ml-0.5 text-slate-500 text-sm mt-0.5">
                  @moneycontrolcom
                </span>
                <span className="ml-1 text-slate-500 text-sm mt-0.5">.44m</span>
              </div>

              <p className="mt-2 mr-2">
                In #MCRecommends this weekend: Paul John Christmas Edition 2022,
                HOSA Goa, Hamilton Khakhi Field Murph 38mm.
                <br />
                Full list out in #MCWeekendReads⚡️tomorrow.
              </p>
            </div>
            <hr />
          </div>
          <div className="w-96">
            <div className="relative text-white">
              <input
                type="search"
                name="serch"
                placeholder={`🔍 Search`}
                className=" bg-gray-800 h-10 px-5 pr-10 m-5 rounded-full text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                {/* <GoSearch className="w-4 h-4 p-24" /> */}
                {/* <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background:new 0 0 56.966 56.966;"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg> */}
              </button>
            </div>
            <div className="px-5 py-5 mr-4 ml-4  w-10/12 bg-gray-800 text-slate-200 shadow-lg rounded-lg ">
              <span className="text-xl font-bold ">What&apos;s Happening </span>
              <div className="mr-2 mt-2 text-sm "> sports LIVE</div>
              <div className="mb-4 text-sm font-bold "> COVID-19 in India</div>

              <span className="text-sm ">Trending in India</span>
              <div className=" text-md font-bold"> Reactjs</div>
              <div className="mb-4 text-sm"> 35.5k tweets</div>

              <span className="text-sm ">Trending</span>
              <div className="text-md font-bold"> Flutter</div>
              <div className="text-sm"> 2,129 tweets</div>
              <span className="text-blue-500 text-sm">Show more</span>
            </div>
            <div className="px-5 py-5 mt-4 mr-4 ml-4 w-10/12  bg-gray-800 text-slate-200 shadow-lg rounded-md  ">
              <span className="text-xl font-bold">Who to follow</span>
              <div className="flex flex-row justify-between items-center">
                <div className="mr-2 mt-2 flex flex-row">
                  <CgProfile className="mt-3  h-10 w-10" />
                  <p className="m-2">
                    <span className="font-bold"> Don Quixote</span> <br />{" "}
                    <span className="text-sm">@donquixo</span>
                  </p>
                </div>
                <div className="py-1 px-3 bg-white rounded-full font-medium text-gray-800">
                  Follow
                </div>
              </div>

              <div className="flex flex-row justify-between   items-center">
                <div className="mr-2 mt-2 flex flex-row">
                  <CgProfile className="mt-3  h-10 w-10" />
                  <p className="m-2">
                    <span className="font-bold"> Don Quixote</span> <br />{" "}
                    <span className="text-sm">@donquixo</span>
                  </p>
                </div>
                <div className="py-1 px-3 bg-white rounded-full font-medium text-gray-800">
                  Follow
                </div>
              </div>
              <span className="text-blue-500 text-sm">Show more</span>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
