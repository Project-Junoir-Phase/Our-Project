import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './WholePage'
import { Link } from 'react-router-dom'

const Profile = ({handlePages}) => {
const {userData} =  useContext(UserContext)

  return (
    <main className="profile-page">
      <section className="relative block h-500-px">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80)'}} >
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" >
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img alt="/vector1.svg" src={userData.picProf} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button className="bg-blue-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => handlePages("Edit")} type="button">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{userData.gender}</span><span className="text-sm text-blueGray-400">Gender</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{userData.phoneNum}</span><span className="text-sm text-blueGray-400">Phone Number</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{userData.review}</span><span className="text-sm text-blueGray-400">Review</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {userData.name + " " + userData.lastName} 
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  {userData.email}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  {userData.dateOfBirth}
                </div>
                <div className="mb-2 text-blueGray-600">
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {userData.bio}
                    </p>
                    <Link to='/LandingPage' className="font-normal text-blue-500" onClick={() => localStorage.clear()}>Log out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Profile
            </div>
          </div>
        </div>
      </div>
    </footer>
      </section>
    </main>
  )
}

export default Profile