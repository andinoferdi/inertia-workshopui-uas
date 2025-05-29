import Image from "next/image";
import Link from "next/link";

export default function WeHelp() {
  return (
    <div className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Images Grid */}
          <div className="relative">
            {/* Green dots decoration */}
            <div className="absolute -top-16 -left-16 w-32 h-32 opacity-30 z-0">
              <div className="grid grid-cols-8 gap-2">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-green-600 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Images Grid Layout */}
            <div className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[500px]">
              {/* Main large image - left side */}
              <div className="col-span-7 row-span-12 relative">
                <Image
                  src="/images/img-grid-1.jpg"
                  alt="Modern interior with sofa and plants"
                  fill
                  className="rounded-3xl object-cover"
                />
              </div>

              {/* Small top-right image */}
              <div className="col-span-5 row-span-4 relative ml-2">
                <Image
                  src="/images/img-grid-2.jpg"
                  alt="Interior design with chairs"
                  fill
                  className="rounded-3xl object-cover"
                />
              </div>

              {/* Medium bottom-right image */}
              <div className="col-span-5 row-span-7 relative ml-2 mt-2">
                <Image
                  src="/images/img-grid-3.jpg"
                  alt="White wooden stool"
                  fill
                  className="rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              We Help You Make Modern Interior Design
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>

            {/* Bullet points in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    Donec vitae odio quis nisl dapibus malesuada
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    Donec vitae odio quis nisl dapibus malesuada
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    Donec vitae odio quis nisl dapibus malesuada
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    Donec vitae odio quis nisl dapibus malesuada
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/user/shop"
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors inline-block"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
