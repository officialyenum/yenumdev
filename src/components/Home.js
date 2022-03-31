// import image from "../assets/images/portfolio.jpg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Yenum.dev|Home Page</title>
        <meta property="og:title" content="Yenum's Portfolio Page" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C5603AQHng9Yw9HfvoA/profile-displayphoto-shrink_200_200/0/1636095704799?e=1642032000&v=beta&t=IHfrbn1CzVPqwAU14FIpuQUrJf1QSKtCGsT2Et4xhFo"
        />
        <meta property="og:description" content="Software Developer" />
        <meta
          name="description"
          content="Yenum.dev is a Software developer writer and a creative nomad"
        />
        <meta property="og:url" content="https://yenum.dev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        {/* <img
          src={image}
          alt="bg img"
          className="absolute object-cover w-full h-full"
        /> */}
        {/* <section className="relative flex justify-center min-h-screen pt-32 md:pt-32 lg:pt-32 px-8">
          <div className="row">
            <div className="col-12">
              <h1 className="text-6xl text-blue-500 text-center  font-bold cursive leading-none lg:leading-snug lg:home-name">
                Yenum Opone
              </h1>
            </div>
            <div className="col-12">
              <p className="text-2xl text-gray-200 pt-12 cursive text-center">
                Software Developer | Aspiring Game Programmer
              </p>
            </div>
            <br />
            <div className="col-12">
              <span className="text-center">
                <a href="https://wakatime.com/@13233379-b294-4919-aa78-a47fd8c24385">
                  <img
                    src="https://wakatime.com/badge/user/13233379-b294-4919-aa78-a47fd8c24385.svg"
                    alt="Total time coded since Nov 20 2021"
                  />
                </a>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="col-start-1 col-end-4">
                <a
                  href="https://play.unity.com/u/officialyenum"
                  alt="Play My Games On Unity"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className="mx-1"
                >
                  <IconBtn
                    icon="mdi:unity"
                    color="blue"
                    text="My Games On"
                    clickUrl="https://play.unity.com/u/officialyenum"
                  />
                </a>
              </div>
              <div className="col-end-6 col-span-1">
                <a
                  href="https://officialyenum.medium.com/"
                  alt="Read My Stories on medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className="mx-1"
                >
                  <IconBtn
                    icon="mdi:medium"
                    color="gray"
                    text="My Articles on"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
        </section>

        <section className="relative flex justify-center bg-dark min-h-screen pt-32 md:pt-32 lg:pt-32 px-8">
          <div className="row">
            <div className="col-12">
              <h1 className="text-6xl text-blue-500 text-center  font-bold cursive leading-none lg:leading-snug lg:home-name">
                Wakatime Stats
              </h1>
            </div>
            <div className="col-12">
              <div className ="col-6">
              <a href="https://wakatime.com"><img src="https://wakatime.com/share/@officialyenum/6261e188-93e0-4cf9-b498-32181362e3e2.png" /></a>
              </div>
              <br />
              <br />
              <br />
              <div className ="col-6">
              <a href="https://wakatime.com"><img src="https://wakatime.com/share/@officialyenum/1c36889e-6cec-48ec-830b-fffb8644ae9b.png" /></a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex justify-center min-h-screen pt-32 md:pt-32 lg:pt-32 px-8">
          <div className="row">
            <div className="col-12">
              <h1 className="text-6xl text-blue-500 text-center  font-bold cursive leading-none lg:leading-snug lg:home-name">
                Ride 4 Life
              </h1>
            </div>
            <div className="col-12">
              <p className="text-2xl text-dark-500 pt-12 cursive text-center">
                Built with Unity C# | Tap to play
              </p>
            </div>
            <div className="col-12">
              <iframe
                id="webgl_iframe"
                title="ride4life"
                frameborder="0"
                allow="autoplay; fullscreen; vr"
                allowfullscreen="true"
                allowvr="false"
                mozallowfullscreen="true"
                src="https://play.unity3dusercontent.com/webgl/d28277a3-d0bd-4712-b2f0-9c02441f4394?screenshot=false&embedType=embed"
                width="405"
                height="640"
                onmousewheel=""
                webkitallowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Home;
