import React from "react";

interface Props {
  title: string;
}

const Heading: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="justify-center" style={{ fontFamily: "blanka" }}>
        <div className="gird grid-row-2 grid-flow-col justify-center text-center w-30">
          {title === "INSTITUTE COLLABORATORS" ? (
          <div>
            <p className="font-bold text-5xl text-[#AAE6FF]">INSTITUTE</p>
            <p className="font-bold lg:indent-[30%] text-5xl text-white">
              COLLABORATORS
            </p>
          </div>
            ) : (
              <div>
              <p className="font-bold text-5xl text-[#AAE6FF]">ACM STUDENT CHAPTER</p>
              <p className="font-bold lg:indent-[30%] text-5xl text-white">
                COLLABORATORS
              </p>
            </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Heading;
