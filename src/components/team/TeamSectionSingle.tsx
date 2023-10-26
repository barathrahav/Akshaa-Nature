"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import TeamPreloader from "@/preloaders/TeamPreloader";
import { teamData } from "@/data/json-data/team-data";
const TeamSectionSingle = () => {
  return (
    <section className="bd-team__area pt-115 pb-95">
      <div className="container small-container">
          <div className="row">
            { teamData?.length ?
            teamData.map((item, num) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={num}>
                <div className="bd-team__wrapper text-center mb-30">
                  <div className="bd-team__thumb w-img p-relative">
                    <Link href={`/team-details/${item?._id}`}>
                      <Image
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        src={item?.img}
                        alt="team-thumb"
                      />
                    </Link>
                    <div className="bd-content__inner">
                      <div className="bd-team__share">
                        <Link href="">
                          <i className="fa-light fa-share-nodes"></i>
                        </Link>
                        <div className="bd-team__action">
                       
                            
                              <Link href={item.facebook} target="_blank">
                                <i className="fab fa-facebook-f"></i>
                              </Link>
                            
                              <Link href={item.twitter} title="Twitter">
                                <i className="fab fa-twitter"></i>
                              </Link>
                            
                              <Link href={item.linkedin} title="Linkedin" target="_blank">
                                <i className="fab fa-linkedin"></i>
                              </Link>
                           
                              <Link href={item.instagram} target="_blank" title="Instagram">
                                <i className="fab fa-instagram"></i>
                              </Link>
                            
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-team__content">
                    <h4>
                      <Link href={`/team-details/${item._id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <span>{item.subTitle}</span>
                  </div>
                </div>
              </div>
            )):
            <>
             <TeamPreloader/>
            </>}
          </div>
    

      </div>
    </section>
  );
};

export default TeamSectionSingle;
