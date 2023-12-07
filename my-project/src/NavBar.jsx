import React from "react";
import { Img } from "./Componet/img";
import { Text } from "./Componet/text";


const NavBar =()=>{


    return(
        <div>
           <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-indigo-600_7f border-solid flex flex-row items-center justify-start p-2.5 shadow-bs w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-[85px] w-[92%]">
                            <Img
                              className="h-[57px] sm:h-auto object-cover w-[14%] md:w-full"
                              src="images/img_plandetravail.png"
                              alt="plandetravail"
                            />
                            <Text
                              className="md:ml-[0] ml-[52px] text-lg text-light_blue-500"
                              size="txtNeufreitBold18"
                            >
                              Carpool
                            </Text>
                            <Img
                              className="h-8 md:ml-[0] ml-[510px] w-8"
                              src="images/img_search.svg"
                              alt="search"
                            />
                            <Text
                              className="ml-3 md:ml-[0] text-lg text-light_blue-500"
                              size="txtNeufreitBold18"
                            >
                              Search
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[143px] text-lg text-light_blue-500"
                              size="txtNeufreitBold18"
                            >
                              Publish a Ride
                            </Text>
                            <div className="flex flex-row items-start justify-evenly md:ml-[0] ml-[50px] w-[7%] md:w-full">
                              <Img
                                className="h-14 md:h-auto object-cover w-[61%]"
                                src="images/img_plandetravail_56x50.png"
                                alt="plandetravail_One"
                              />
                              <Img
                                className="h-8 mt-[5px] w-[31px]"
                                src="images/img_arrowdown.svg"
                                alt="arrowdown"
                              />
                            </div>
                            </div>
                            </div>
                            </div>
        </div>
    )
}
export default NavBar


























