import { Link } from "react-scroll";
import { importIcon, importImg } from "../../utils";

const AllPage = () => {
  const { FaAngleUp, FaTwitter, FaInstagram } = importIcon();
  const { ocean, kohei, takahiro } = importImg();

  return (
    <>
      <main className="font-link">
        <div id="top" className="bg-architecture-img h-screen bg-cover">
          <div className="h-full flex flex-col text-center text-blue-50 justify-center items-center">
            <h2 className="font-bold text-7xl drop-shadow-2xl font-name">
              Kohei Miyoshi
            </h2>
            <h4 className="font-bold text-5xl drop-shadow-2xl font-name">&</h4>
            <h2 className="font-bold text-7xl drop-shadow-2xl font-name">
              Takahiro Terada
            </h2>
          </div>
        </div>

        <div id="about">
          <h3 className="font-bold text-center text-4xl my-14">About Us</h3>
          <div className="flex">
            <div className="flex flex-col justify-center items-center mx-20">
              <img
                src={kohei}
                alt="こうへいの写真"
                className="h-52 w-52 rounded-full"
              />
              <div>
                <h3 className="font-name text-2xl text-center my-9">
                  Kohei Miyoshi
                </h3>
                <div>
                  この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認する
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mx-20">
              <img
                src={takahiro}
                alt="たかひろの写真"
                className="h-52 w-52 rounded-full"
              />
              <div>
                <h3 className="font-name text-2xl text-center my-9">
                  Takahiro Terada
                </h3>
                <div>
                  この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認する
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="skill">
          <h3 className="font-bold text-center text-4xl my-14">Skills</h3>
          <div className="flex justify-center">
            <div className="mx-20">
              <h3 className="font-name text-2xl text-center my-9">
                Kohei Miyoshi
              </h3>

              <div className="flex my-5">
                <img
                  src={ocean}
                  alt="言語のアイコン"
                  className="h-16 w-16 rounded-full"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3>JavaScript</h3>
                  <div className="h-1.5 shadow-sm w-96 bg-gray-300 rounded ml-5">
                    <div className="h-1.5 bg-blue-600 w-11/12 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="flex my-5">
                <img
                  src={ocean}
                  alt="言語のアイコン"
                  className="h-16 w-16 rounded-full"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3>Vue.js</h3>
                  <div className="h-1.5 shadow-sm w-96 bg-gray-300 rounded ml-5">
                    <div className="h-1.5 bg-blue-600 w-11/12 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="flex my-5">
                <img
                  src={ocean}
                  alt="言語のアイコン"
                  className="h-16 w-16 rounded-full"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3>React.js</h3>
                  <div className="h-1.5 shadow-sm w-96 bg-gray-300 rounded ml-5">
                    <div className="h-1.5 bg-blue-600 w-11/12 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-20">
              <h3 className="font-name text-2xl text-center my-9">
                Takahiro Terada
              </h3>

              <div className="flex my-5">
                <img
                  src={ocean}
                  alt="言語のアイコン"
                  className="h-16 w-16 rounded-full"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3>JavaScript</h3>
                  <div className="h-1.5 shadow-sm w-96 bg-gray-300 rounded ml-5">
                    <div className="h-1.5 bg-blue-600 w-11/12 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="flex my-5">
                <img
                  src={ocean}
                  alt="言語のアイコン"
                  className="h-16 w-16 rounded-full"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3>Vue.js</h3>
                  <div className="h-1.5 shadow-sm w-96 bg-gray-300 rounded ml-5">
                    <div className="h-1.5 bg-blue-600 w-11/12 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="flex my-5">
                <img
                  src={ocean}
                  alt="言語のアイコン"
                  className="h-16 w-16 rounded-full"
                />
                <div className="flex flex-col justify-center items-center">
                  <h3>React.js</h3>
                  <div className="h-1.5 shadow-sm w-96 bg-gray-300 rounded ml-5">
                    <div className="h-1.5 bg-blue-600 w-11/12 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="works">
          <h3 className="font-bold text-center text-4xl my-14">Works</h3>
          <div className="flex justify-evenly">
            <div>
              <img
                src={ocean}
                alt="作成したアプリの写真"
                height={300}
                width={400}
              />
              {/* 画像にURLを設置して、クリックしたらサイトに飛ぶように設定 */}
              <h3 className="font-title">タイトル</h3>
              <div className="font-tag">
                Design / Coding(Responsive) / WordPress
              </div>
            </div>
            <div>
              <img
                src={ocean}
                alt="作成したアプリの写真"
                height={300}
                width={400}
              />
              {/* 画像にURLを設置して、クリックしたらサイトに飛ぶように設定 */}
              <h3 className="font-title">タイトル</h3>
              <div className="font-tag">
                Design / Coding(Responsive) / WordPress
              </div>
            </div>
            <div>
              <img
                src={ocean}
                alt="作成したアプリの写真"
                height={300}
                width={400}
              />
              {/* 画像にURLを設置して、クリックしたらサイトに飛ぶように設定 */}
              <h3 className="font-title">title</h3>
              <div className="font-tag">
                Design / Coding(Responsive) / WordPress
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-center text-4xl my-14">Contact</h3>
          <h4 className="my-6">
            お問い合わせは、SNSまたはメールにてお願いします。
          </h4>
          <div className="flex mb-20">
            <div className="mr-6 font-sans">
              <a
                href="https://twitter.com/tkhrtrd0710"
                className="hover:text-blue-500 flex justify-center items-center"
              >
                <FaTwitter className="mr-1" />
                Twitter
              </a>
            </div>
            <div className="mr-6 font-sans">
              <a
                href="https://www.instagram.com/fennecnoprograming/"
                className="hover:text-blue-500 flex justify-center items-center"
              >
                <FaInstagram className="mr-1" />
                Instagram
              </a>
            </div>
            <div className="mr-6 font-sans">
              <a
                href="mailto:teradatakahiro16@gmail.com"
                className="hover:text-blue-500"
              >
                こうへいのメアド
              </a>
              &nbsp;/&nbsp;
              <a
                href="mailto:teradatakahiro16@gmail.com"
                className="hover:text-blue-500"
              >
                teradatakahiro16@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col justify-center items-center font-link bg-blue-400 py-7">
        <Link
          to="top"
          smooth={true}
          offset={-150}
          className="hover:text-blue-500 cursor-pointer"
        >
          <FaAngleUp size={30} />
        </Link>
        <ul className="flex my-6">
          <li className="mr-6">
            <Link
              to="top"
              smooth={true}
              className="hover:text-blue-500 cursor-pointer"
            >
              TOP
            </Link>
          </li>

          <li className="mr-6">
            <Link
              to="about"
              smooth={true}
              offset={-150}
              className="hover:text-blue-500 cursor-pointer"
            >
              ABOUT
            </Link>
          </li>

          <li className="mr-6">
            <Link
              to="skill"
              smooth={true}
              offset={-150}
              className="hover:text-blue-500 cursor-pointer"
            >
              SKILL
            </Link>
          </li>

          <li className="mr-6">
            <Link
              to="works"
              smooth={true}
              offset={-150}
              className="hover:text-blue-500 cursor-pointer"
            >
              WORKS
            </Link>
          </li>

          <li className="mr-6">
            <Link
              to="contact"
              smooth={true}
              offset={-150}
              className="hover:text-blue-500 cursor-pointer"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <small>© Kohei Miyoshi & Takahiro Terada. All Rights Reserved.</small>
      </footer>
    </>
  );
};

export default AllPage;
