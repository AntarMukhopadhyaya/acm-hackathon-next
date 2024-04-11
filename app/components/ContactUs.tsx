'use client';

import './fonts/font.css';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';

const ContactUs = () => {
  return (
    <div>
      <button
        className="btn btn-circle fixed bottom-0 right-0 m-5 btn-info btn-lg "
        onClick={() => {
          if (document) {
            (
              document.getElementById('my_modal_2') as HTMLFormElement
            ).showModal();
          }
        }}
      >
        {' '}
        <IoMdCall
          className="h-8 w-8"
          style={{
            color: '#000000',
          }}
        />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gradient-to-r from-cyan-500 to-blue-500">
          <h3 className="font-bold text-5xl mb-10 text-center text-[#074081]">
            CONTACT US
          </h3>
          <p className="py-4 flex flex-row text-xl">
            <FaLocationDot
              className="mr-5 text-5xl"
              style={{
                color: '#074081',
              }}
            />
            Sonarpur Station Rd, Mission Pally, Narendrapur, Kolkata, West
            Bengal 700150
          </p>
          <div className="divider divider-warning"></div>
          <div className="flex flex-column">
            <IoMdCall
              className="mr-5 mt-5 text-5xl"
              style={{
                color: '#074081',
              }}
            />
            <div className="">
              <p className="py-4 text-xl">Abhishek Bal : (+91) 90382 81735</p>
              <p className="py-4 -mt-6 text-xl">
                Arindam Sinharay : (+91) 94330 64476
              </p>
            </div>
          </div>

          <div className="divider divider-warning"></div>
          <div className="flex flex-column">
            <MdEmail
              className="mr-5 mt-1 text-5xl"
              style={{
                color: '#074081',
              }}
            />
            <p className="py-4 flex flex-row text-xl">fiem@teamfuture.in</p>
          </div>
          <div className="divider divider-warning"></div>
          <div className="flex flex-column">
            <BsGlobe
              className="mr-5 mt-1 text-5xl"
              style={{
                color: '#074081',
              }}
            />
            <p className="py-4 flex flex-row text-xl">fiem@teamfuture.in</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ContactUs;
