import React from "react";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import SearchBar from "../components/search-bar/SearchBar";
import experienceImg from "../assets/images/experience.png";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex py-10">
          <div className="flex-1">
            <div>
              <h1 className="text-4xl font-bold">
                Traveling opens the door to creating{" "}
                <span className="text-current">memories</span>
              </h1>
            </div>
            <div className="mt-10">
              <span className="text-xs">
                Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                metinler olarak kullanılmıştır.
              </span>
            </div>
          </div>
          <div className="flex-1 flex gap-5">
            <div className="flex-1">
              <img
                src={heroImg}
                alt=""
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <video
                className="object-cover w-full h-full rounded-2xl"
                controls
              >
                <source src={heroVideo} type="video/mp4"></source>
              </video>
            </div>
            <div className="flex-1">
              <img
                src={heroImg02}
                alt=""
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
        <SearchBar />
        <section>
          <div className="py-10">
            <div className="container mx-auto">
              <div>
                <h2 className="text-2xl font-semibold">Our Featured Tours</h2>
              </div>
              <FeaturedTourList />
            </div>
          </div>
        </section>
        <section>
          <div className="py-10">
            <div className="container mx-auto">
              <div className="flex max-sm:flex-col">
                <div className="flex-1">
                  <h1 className="font-bold text-3xl leading-10">
                    With out all experience we will serve you
                  </h1>
                  <p className="mt-5">
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                    hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                    alarak karıştırdığı 1500'lerden beri endüstri standardı
                    sahte metinler olarak kullanılmıştır.
                  </p>
                  <div className="flex justify-between mt-5">
                    <div className="text-center">
                      <div className="text-center bg-current text-[#fff] rounded-tl-md rounded-br-md inline-block p-4 font-bold">
                        12k+
                      </div>
                      <div>Successful trip</div>
                    </div>
                    <div className="text-center">
                      <div className="text-center bg-current text-[#fff] rounded-tl-md rounded-br-md inline-block p-4 font-bold">
                        12k+
                      </div>
                      <div>Successful trip</div>
                    </div>
                    <div className="text-center">
                      <div className="text-center bg-current text-[#fff] rounded-tl-md rounded-br-md inline-block p-4 font-bold">
                        12k+
                      </div>
                      <div>Successful trip</div>
                    </div>
                  </div>
                </div>
                <div className="flex-[2_2_0]">
                  <div className="flex items-center justify-center">
                    <img src={experienceImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
