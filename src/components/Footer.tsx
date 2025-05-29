import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-16 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sofa Image - Better positioned to avoid overlap */}

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 relative z-20">
          <div className="md:col-span-2 lg:col-span-5 xl:col-span-4">
            <div className="mb-6">
              <Link href="/" className="text-green-800 text-3xl font-medium">
                Furni<span className="opacity-40">.</span>
              </Link>
            </div>
            <p className="text-gray-600 mb-8 max-w-md">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-200 text-green-800 rounded-full flex items-center justify-center hover:bg-green-800 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-200 text-green-800 rounded-full flex items-center justify-center hover:bg-green-800 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-200 text-green-800 rounded-full flex items-center justify-center hover:bg-green-800 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-200 text-green-800 rounded-full flex items-center justify-center hover:bg-green-800 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 bg-white/80 xl:bg-transparent p-4 xl:p-0 rounded-lg xl:rounded-none">
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/user/about"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/user/services"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/user/blog"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/user/contact"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Knowledge base
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Live chat
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Our team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Nordic Chair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Kruzo Aero
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm lg:text-base"
                    >
                      Ergonomic Chair
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 relative z-20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm text-center lg:text-left mb-4 lg:mb-0">
              Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. —
              Designed with love by{" "}
              <Link href="https://untree.co" className="text-gray-800">
                Untree.co
              </Link>{" "}
              Distributed By{" "}
              <Link href="https://themewagon.com" className="text-gray-800">
                ThemeWagon
              </Link>
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
