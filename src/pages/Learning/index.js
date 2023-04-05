import React, { useState } from "react";
import NavComponents from "../../components/NavComponents";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Vocabulary from "./vocabulary";

const Learning = () => {
  const { id } = useParams();
  console.log(id);
  const [video, setVideo] = useState(0);

  const setVideoNum = (number) => {
    setVideo(number);
  };
  const unit1 = ["幫忙", "算", "開始", "連續", "下一個", "公園"];
  return (
    <>
      {" "}
      <NavComponents />
      <div className="flex flex-wrap h-[80vh] px-[auto] justify-center min-h-[80vh]">
        <div className="left w-[350px]  flex flex-col justify-center items-center">
          <div className="flex justify-center items-center bg-[#20639E] w-[250px] h-[3rem] rounded-t-lg text-white text-[1.5rem]">
            單元 {id} 詞彙
          </div>{" "}
          <div className="bg-[#C6D8EA] flex flex-col  cursor-pointer items-center overflow-scroll w-[250px] h-[350px] text-[2rem]">
            {" "}
            {unit1.map((word, index) => {
              console.log(index);
              return (
                <Vocabulary
                  vocabulary={word}
                  setVideoNum={setVideoNum}
                  num={index}
                />
              );
            })}
          </div>
        </div>
        <div className="flex items-center right w-[724px] my-4 ">
          <video
            src={require(`../../video/unit1/${video}.mp4`)}
            className=" w-[800px] h-[410px]"
            autoplay="true"
            controls="true"
          ></video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Learning;