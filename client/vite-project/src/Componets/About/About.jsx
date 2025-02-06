import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function About(){
    return(

<div>
<Navbar/>
<main className="container mx-auto p-4">
  <section className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4 text-yellow-400">About Us</h2>
    <p className="mb-4 text-gray-700">
      Welcome to Recipe App, your number one source for all things recipes.
      We're dedicated to providing you the very best of culinary delights, with
      an emphasis on simplicity, taste, and health.
    </p>
    <p className="mb-4 text-gray-700">
      Founded in 2023, Recipe App has come a long way from its beginnings. When
      we first started out, our passion for cooking drove us to start our own
      business.
    </p>
    <p className="mb-4 text-gray-700">
      We hope you enjoy our recipes as much as we enjoy offering them to you. If
      you have any questions or comments, please don't hesitate to contact us.
    </p>
    <p className="font-bold text-gray-700">Sincerely,</p>
    <p className="font-bold text-gray-700">The Recipe App Team</p>
  </section>
  <section className="mt-8">
    <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          alt="Portrait of John Doe, the founder and head chef"
          className="w-32 h-32 mx-auto rounded-full mb-4"
          height={150}
          src="https://storage.googleapis.com/a1aa/image/l2HHsPPt_Up1EtEpNY2PiCOjpgSNib14shZAS4kAn68.jpg"
          width={150}
        />
        <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
        <p className="text-gray-600">Founder &amp; Head Chef</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          alt="Portrait of Jane Smith, the nutritionist"
          className="w-32 h-32 mx-auto rounded-full mb-4"
          height={150}
          src="https://storage.googleapis.com/a1aa/image/ki4X1ZMjH6PfIF8sbeY6fexFAX3n9cPGUF0F4Wxhj3s.jpg"
          width={150}
        />
        <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
        <p className="text-gray-600">Nutritionist</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          alt="Portrait of Emily Johnson, the content creator"
          className="w-32 h-32 mx-auto rounded-full mb-4"
          height={150}
          src="https://storage.googleapis.com/a1aa/image/PrjbVo3n3HnJNTOcTWBgnkcPMKK1nL5wfkvoT2UswTk.jpg"
          width={150}
        />
        <h3 className="text-xl font-bold text-gray-800">Emily Johnson</h3>
        <p className="text-gray-600">Content Creator</p>
      </div>
    </div>
  </section>
  <section className="mt-8">
    <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Mission</h2>
    <p className="mb-4 text-gray-700">
      At Recipe App, our mission is to inspire and empower home cooks to create
      delicious and healthy meals with ease. We believe that cooking should be
      an enjoyable and rewarding experience, and we strive to make it accessible
      to everyone, regardless of their skill level.
    </p>
    <p className="mb-4 text-gray-700">
      We are committed to providing high-quality recipes that are easy to follow
      and use readily available ingredients. Our team of culinary experts and
      nutritionists work tirelessly to develop recipes that are not only tasty
      but also nutritious.
    </p>
    <p className="mb-4 text-gray-700">
      We also aim to build a community of food enthusiasts who can share their
      experiences, tips, and feedback. We believe that cooking is a journey best
      enjoyed together, and we are here to support you every step of the way.
    </p>
  </section>
  <section className="mt-8">
    <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          alt="Icon representing quality"
          className="w-16 h-16 mx-auto mb-4"
          height={64}
          src="https://storage.googleapis.com/a1aa/image/zqpw5yc8YrNgREQayjMwWfOYW7UyaeCmugy6KIdmLgQ.jpg"
          width={64}
        />
        <h3 className="text-xl font-bold text-gray-800">Quality</h3>
        <p className="text-gray-600">
          We prioritize quality in everything we do, from the ingredients we use
          to the recipes we create.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          alt="Icon representing simplicity"
          className="w-16 h-16 mx-auto mb-4"
          height={64}
          src="https://storage.googleapis.com/a1aa/image/87pa1XEQokUlgwpBTbZU_32JYGMUX46Sdj7-iEN4J_w.jpg"
          width={64}
        />
        <h3 className="text-xl font-bold text-gray-800">Simplicity</h3>
        <p className="text-gray-600">
          We believe that great cooking doesn't have to be complicated. Our
          recipes are designed to be simple and straightforward.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          alt="Icon representing community"
          className="w-16 h-16 mx-auto mb-4"
          height={64}
          src="https://storage.googleapis.com/a1aa/image/rdX9R1CO9d0eO_pbke6D4q9m_z2YnkDtFaY3gI1B9pc.jpg"
          width={64}
        />
        <h3 className="text-xl font-bold text-gray-800">Community</h3>
        <p className="text-gray-600">
          We are dedicated to building a supportive and inclusive community of
          food lovers.
        </p>
      </div>
    </div>
  </section>
</main>
<Footer/>
</div>


    )
}

export default About