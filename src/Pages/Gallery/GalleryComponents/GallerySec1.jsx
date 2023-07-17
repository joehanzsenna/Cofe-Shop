import React from "react";
import { Link } from "react-router-dom";

const GallerySec1 = () => {
  return (
    <main className="w-full max-w[1440px] h-[auto] mx-auto flex flex-col items-center justify-center ">
      <div className="w-full max-w[1440px] mx-suto bg-green-900 flex flex-col justify-center items-center py-5">
        <button className="w-[10rem] p-4 bg-green-700 mt-10 rounded-lg hover:bg-green-600">
        <Link to="/">Go back home</Link>
        </button>
      </div>

      {/* Parallax scroling section  */}

      <section className="w-full max-w-[1440px] mx-auto h-[100rem] bg-gradient-to-b from-purple-500 bg-green-500 ">
        {/* The coffee Section 1 */}

        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee01 bg-fixed bg-center bg-cover transition-1s">
          <h1 className="text-5xl font-medium">The coffee Section 1</h1>
        </div>

        <div className="w-full max-w-[1440px] mx-auto h-[40rem] bg-teal-700 ">
          <h2>Texts here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            voluptatibus asperiores doloribus minus nihil expedita et nam
            recusandae deserunt reiciendis.
          </p>
        </div>

        {/* The coffee Section 2 */}

        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee02 bg-center bg-cover bg-fixed">
          <h1 className="text-5xl font-medium">The coffee Section 2</h1>
        </div>

        <div className="w-full max-w-[1440px] mx-auto h-[40rem] bg-yellow-800 ">
          <h2>Texts here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            voluptatibus asperiores doloribus minus nihil expedita et nam
            recusandae deserunt reiciendis.
          </p>
        </div>
        {/* The coffee Section 3 */}

        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee03 bg-center bg-cover bg-fixed">
          <h1 className="text-5xl font-medium">The coffee Section 3</h1>
        </div>

        <div className="w-full max-w-[1440px] mx-auto h-[100vh] bg-orange-800 ">
          <h2>Texts here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            voluptatibus asperiores doloribus minus nihil expedita et nam
            recusandae deserunt reiciendis.
          </p>
        </div>

        {/* The coffee freestyle */}
        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee01 bg-fixed bg-center bg-cover transition-1s">
          <h1 className="text-5xl font-medium"> </h1>
        </div>

        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee02 bg-center bg-cover bg-fixed">
          <h1 className="text-5xl font-medium"> </h1>
        </div>

        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee03 bg-center bg-cover bg-fixed">
          <h1 className="text-5xl font-medium"> </h1>
        </div>
        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee04 bg-center bg-cover bg-fixed">
          <h1 className="text-5xl font-medium"> </h1>
        </div>
        <div className="w-full max-w-[1440px] h-[50rem] flex justify-center items-center bg-no-repeat bg-coffee05 bg-center bg-cover bg-fixed">
          <h1 className="text-5xl font-medium"> </h1>
        </div>
      </section>
    </main>
  );
};

export default GallerySec1;
