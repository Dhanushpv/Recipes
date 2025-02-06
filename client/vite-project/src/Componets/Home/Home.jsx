import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../../assets/img/HeroSection1.png";
import { LuChefHat } from "react-icons/lu";
import Footer from "../Footer/Footer";
import { CloudArrowUpIcon, ClipboardDocumentCheckIcon, HeartIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router-dom";
import chef from '../../assets/img/Chef.jpg';
import QuickEasy from '../../assets/img/Quick&Easy.jpg';
import InternationalFlavors from '../../assets/img/InternationalFlavors.jpg';
import HealthyChoices from '../../assets/img/HealthyChoices.jpg';
import sweets from '../../assets/img/sweets.jpg';
const features = [
  {
    name: 'Discover New Recipes',
    description:
      'Explore a vast collection of delicious recipes from around the world. Find the perfect dish for any occasion.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Easy-to-Follow Instructions',
    description: 'Step-by-step cooking guides with clear instructions to make your cooking experience hassle-free.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Save Your Favorites',
    description: 'Bookmark and organize your favorite recipes so you can easily find them whenever you need.',
    icon: HeartIcon,
  },
];

function Home() {
   const navigate = useNavigate();
  return (
    <div className="relative">
      <Navbar />
      <div className="relative w-full">
        <img
          alt="A vibrant"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
          src={HeroSection}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <h1 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Adventure of
          </h1>
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Delicacies
          </h1>
          <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            Unlock a world of variety culinary recipes and unleash your inner chef the
            easy way with Flavoriz.
          </p>
          <button onClick={() => navigate("/Recipes")} className="bg-yellow-500 px-4 py-2 sm:px-5 sm:py-3 rounded-lg text-xs sm:text-sm md:text-base font-bold flex items-center mt-4 shadow-lg hover:bg-yellow-600 transition">
            <span onClick={() => navigate("/Recipes")} className="px-2 sm:px-3">Explore Recipes</span>
            <LuChefHat className="w-5 h-5 sm:w-6 sm:h-6 border rounded-lg p-1" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better Recipe
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-yellow-500" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={chef}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-green-600">Discover Delicious Recipes</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Explore, Cook, and Enjoy!
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Healthy Choices
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Find nutritious and delicious recipes for a healthier lifestyle.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <img
                  className="size-full object-cover object-top"
                  src={HealthyChoices}
                  alt="Healthy Choices"
                />
              </div>
            </div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Quick & Easy</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Delicious meals that are ready in no time for busy days.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs rounded-lg"
                  src={QuickEasy}
                  alt="Quick & Easy"
                />
              </div>
            </div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Desserts</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Satisfy your sweet tooth with delightful homemade treats.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="object-cover rounded-lg"
                  src={sweets}
                  alt="Desserts"
                />
              </div>
            </div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  International Flavors
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Travel the world through authentic global cuisines.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <img
                  className="size-full object-cover object-top"
                  src={InternationalFlavors}
                  alt="International Flavors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <Footer/>
    </div>
    
  );
}

export default Home;
