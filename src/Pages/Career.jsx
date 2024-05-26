import React from "react";

export default function Career() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-16">Careers</h1>
        <h2 className="font-bold text-2xl mb-6">Join Our Team at LUCENT TeleRad</h2>
        <p className="text-gray-600 text-lg mb-6">
          At Lucent TeleRad, we are always on the lookout for talented and passionate individuals to join our team of teleradiology experts. We offer a dynamic work environment, competitive compensation packages, and opportunities for professional growth and development.
        </p>
        <h2 className="font-bold text-2xl mb-4 mt-16">Current Openings:</h2>
        <div className="list-decimal mb-6 text-gray-600 text-left ml-48 pl-80">
          <li> Radiologist</li>
          <li>Sales and Marketing Executive</li>
          </div>
        <p className="text-gray-600 text-lg">
          To apply, please send your resume and cover letter to <a href="mailto:careers@lucenttelerad.com" className="text-blue-700 hover:cursor-pointer hover:scale-110 hover:text-blue-700 transition-all text-bold">careers@lucenttelerad.com</a>. We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
}
