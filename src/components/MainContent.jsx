
import doctor2 from "../assets/undraw-medical-2.svg";
import doctor3 from "../assets/undraw-medical-3.svg";
import doctor4 from "../assets/undraw-medical-4.svg";

const MainContent = () => {
  return (
    <section className="h-auto pt-[8rem]">
      <div className="section h-full flex flex-col items-center justify-center">
        <div className="bg-[#eaedff] h-[500px] rounded-[15px] py-[5rem] my-[2rem] flex flex-row justify-evenly">
          <div className="w-[80%] lg:w-[30%] h-full text-[1.5rem] lg:text-[1.8rem] flex flex-col justify-center">
            <div className="uppercase text-yellow-500 text-bold lg:text-[1rem]">The future of healthcare </div>
            <div>Instantly view patient history, keep track of vital signs, medications, lab results, and other important information.</div>
          </div>
          <div className="hidden lg:flex lg:w-[30%] h-full ">
            <img src={doctor2}></img>
          </div>
        </div>
        <div className="bg-[#fbf9f6] h-[500px] rounded-[15px] py-[5rem] my-[2rem] flex flex-row justify-evenly">
          <div className="hidden lg:flex  lg:w-[30%]  h-full  ">
            <img src={doctor3}></img>
          </div>
          <div className="w-[80%] lg:w-[30%] h-full text-[1.5rem] lg:text-[1.8rem] flex flex-col justify-center">
            <div className="uppercase text-yellow-500 text-bold lg:text-[1rem]"> easy communication</div>
            <div>helps healthcare professionals streamline their workflow and provide the best care possible to their patients.</div>
          </div>
        </div>
        <div className="bg-[#eaedff] h-[500px] rounded-[15px] py-[5rem] my-[2rem] flex flex-row justify-evenly">
          <div className="w-[80%] lg:w-[30%] h-full text-[1.5rem] lg:text-[1.8rem] flex flex-col justify-center">
            <div className="uppercase text-yellow-500 text-bold lg:text-[1rem]">Comprehensive Views</div>
            <div>Gather real-time data and insights on how their patients are progressing through the system.</div>
          </div>
          <div className="hidden lg:flex w-[90%] lg:w-[30%] h-full ">
            <img src={doctor4}></img>
          </div>
        </div>
      </div>
      <div className="section h-[400px] flex flex-col items-center justify-center">
        <div className="text-bold flex text-[2rem] lg:text-[3rem]">
          <span className="text-green-400">40%</span>&nbsp;increase in customer retention.
        </div>
        <div className="text-bold  text-[2rem] lg:text-[2rem]">
          80% <span className="text-red-400"> cost savings</span> compared to other solutions.
        </div>
      </div>
      <div className="section h-[1000px] flex flex-col relative items-center w-full ">
        <div className="text-[3rem] font-bold mb-[2rem]">Pricing</div>
        <div className="relative  lg:absolute top-[10%] z-[4] lg:left-[10%] max-w-[600px] max-h-[700px] w-[80%] lg:w-[60%] h-[70%] rounded-[2rem] bg-white drop-shadow-lg flex flex-col justify-center items-center">
          <div className="text-[2rem] capitalize  mb-[2rem] text-green-800">
            New: nobis est eligendi
          </div>
          <div className="text-[2rem] lg:text-[3rem] mb-[2rem] text-green-400">
            x.XX% + $XX <sub className="text-[1rem]"> / transaction </sub>
          </div>
          <div className="lg:text-[1.4rem] text-[#888] mx-[4rem] mb-[2rem] ">
            <span className="text-[#536dc2]">Et harum quidem</span> rerum facilis Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere <span className="text-black">est et expedita XX%.</span> possimus,
            omnis voluptas assumenda est, omnis dolor repellendus.
          </div>
        </div>
        <div className="hidden lg:flex absolute top-[20%] z-[3]  left-[55%] w-[400px] h-[500px] rounded-[2rem] bg-[#0b2655] drop-shadow-xl flex-col justify-center items-center">
          <div className="lg:text-[2rem] mb-[2rem] text-red-200">
            $XX <sub className="text-[1rem]"> / month </sub>
          </div>
          <div className="lg:text-[1rem] text-[#888] mx-[4rem] mb-[2rem]">
            <span className="text-[#20398c]">Et harum quidem</span> rerum facilis
            <span className="text-black">est et expedita XX%.</span> Nam libero tempore, cum soluta
            nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </div>
        </div>
      </div>
      <div className="section h-[800px] py-[3rem] relative">
        <div className=" max-w-[1000px]">
          <div className="text-[2rem] lg:text-[3rem] tracking-tighter leading-[2rem] lg:leading-[3rem]">
            For Developers: <span className="text-purple-400"> Our new API</span>. helps to manage
            patient records, capture patient data and track their progress throughout their care
            journey.
            {/* It allows health professionals to view patient history, keep track of vital signs, medications, lab results, and other important information. It also allows for easy communication between providers and patients, helping to keep everyone on the same page and make sure the patient’s needs are met. The Health Journey API is a powerful tool that helps healthcare professionals streamline their workflow and provide the best care possible to their patients. */}
          </div>
        </div>
        <div className="relative h-full overflow-hidden">
          {/* terminal 1 */}
          <div className="select-none absolute left-[20%] top-[20%] w-[400px] h-[300px] bg-[#171b21] border-[.5px] border-[rgba(255,255,255,.4)] rounded-[8px] shadow-xl">
            <div className="flex items-between justify-center flex-col h-[30px] border-b-[.5px] border-[rgba(255,255,255,.4)] px-[1rem]">
              <div className=""></div>
              <div className="flex flex-row space-x-[4px]">
                <span className="text-red-600">•</span>
                <span className="text-yellow-600">•</span>
                <span className="text-green-700">•</span>
              </div>
            </div>
            <div className="h-full w-full m-[2rem]">
              <pre>$ nice</pre>
            </div>
          </div>
          {/* terminal 2 */}
          <div className="select-none absolute left-[40%] top-[10%] w-[400px] h-[300px] text-green-400 bg-[#122134] border-[.5px] border-[rgba(255,255,255,.4)]   rounded-[8px] shadow-xl">
            <div className="flex items-between justify-center flex-col h-[30px] border-b-[.5px] border-[rgba(255,255,255,.4)]  px-[1rem]">
              <div className=""></div>
              <div className="flex flex-row space-x-[4px]">
                <span className="text-red-600">•</span>
                <span className="text-yellow-600">•</span>
                <span className="text-green-700">•</span>
              </div>
            </div>
            <div className="h-full w-full m-[2rem]">
              <pre>$ nice -n 19 coffee</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainContent;
