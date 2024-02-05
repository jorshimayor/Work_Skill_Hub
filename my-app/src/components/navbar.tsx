import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Image
                src="/logo.jpg"
                alt="WorkSkillHub Logo"
                width={200}
                height={200}
              />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/services"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/learn"
                    >
                      Learn
                    </a>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/career"
                    >
                      Consultation
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Job Board
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/team"
                    >
                      Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/community"
                    >
                      Community
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-xl">
                <FaSquareXTwitter className="text-blue-700" />
                <FaLinkedin className="text-blue-700" />
                <FaFacebook className="text-blue-700" />
              </div>
              <div className="block md:hidden">
                <button
                  title="button"
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
