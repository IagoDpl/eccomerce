"use client";

import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter,
  faCcVisa,
  faCcMastercard,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/*TOP*/}
      <div className=" flex flex-col md:flex-row justify-between gap-24">
        {/*LEFT*/}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">NOME EMPRESA</div>
          </Link>
          <p>ENDEREÇO</p>
          <span className="font-semibold">EMAIL</span>
          <span className="font-semibold">TELEFONE</span>
          <div className="flex gap-6">
            <FontAwesomeIcon icon={faFacebook} width={16} height={16} />
            <FontAwesomeIcon icon={faInstagram} width={16} height={16} />
            <FontAwesomeIcon icon={faYoutube} width={16} height={16} />
            <FontAwesomeIcon icon={faXTwitter} width={16} height={24} />
          </div>
        </div>
        {/*CENTER*/}
        <div className="hidden lg:flex justify-between w-1/2"></div>
        {/*RIGHT*/}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>SEJA O PRIMEIRO A RECEBER AS NOTICIAS

          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-pink-500 text-white">JOIN</button>
          </div>
          <span className="font-semibold"> Secure Payment</span>
          <div className=" flex justify-between">
            <FontAwesomeIcon icon={faCcVisa} width={40} height={20} />
            <FontAwesomeIcon icon={faCcMastercard} width={40} height={20} />
          </div>
        </div>
      </div>
      {/*BOTTOM*/}
      <div className=""></div>
    </div>
  );
};

export default Footer;
