import React from "react";
import ProcessImage from "../../../assets/0.jpg"; // Adjust path as needed

const OurProcess: React.FC = () => {
  return (
    <section className="w-full bg-[#E9E9E9] md:ml-[11px] px-6 md:px-[10%] py-1 md:pt-64 md:pb-20 font-manrope">
      <div className="flex flex-col md:flex-row w-full items-stretch gap-12">
        {/* Left Image */}
            <div className="w-full md:w-[40%]">
          <img
            src={ProcessImage}
            alt="Our Process"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="uppercase text-sm text-[#444] tracking-widest mb-6 font-manrope">
            Our Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="text-xl">▶️</div>
              <div>
                <h3 className="text-lg font-[300] mb-1 font-manrope">High velocity</h3>
                <p className="text-sm leading-relaxed font-manrope">
                  As fast as 12 weeks from start to finish.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="text-xl">✔️</div>
              <div>
                <h3 className="text-lg font-[300] mb-1 font-manrope">Proven</h3>
                <p className="text-sm leading-relaxed font-manrope">  
                  Finely tuned from over a decade of building products in diverse industries.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="text-xl">❤️</div>
              <div>
                <h3 className="text-lg font-[300] mb-1 font-manrope">Ego-free</h3>
                <p className="text-sm leading-relaxed font-manrope">
                  Your business matters to us as much as our own.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-4">
              <div className="text-xl">📊</div>
              <div>
                <h3 className="text-lg font-[300] mb-1 font-manrope">Efficient</h3>
                <p className="text-sm leading-relaxed font-manrope">
                  Every single one of our 50+ clients has shipped something at the end of our partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
