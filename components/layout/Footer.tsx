export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="container">
        <div className="text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col justify-between lg:justify-self-start lg:col-span-3">
            <img
              className="mb-7 w-40"
              src="images/footerlogo.jpg"
              alt="Trybae logo"
            />
            <div className="flex justify-evenly items-center">
              <a href="https://m.facebook.com/trybae.official" target="_blank">
              <svg
                className="text-white hover:text-green-400 fill-current cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <title>Facebook</title>
                <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/trybae-enterprise-75b357281" target="_blank">
              <svg
                className="text-white hover:text-green-400 fill-current cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
              >
                <title>LinkedIn</title>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              </a>
              <a href="https://www.instagram.com/trybae.zm/" target="_blank">
              <svg
                className="text-white hover:text-green-400 fill-current cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
              >
                <title>Instagram</title>
                <path d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
              </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 py-1 lg:grid-rows-3 text-white text-sm lg:text-left lg:justify-self-start lg:col-span-5 lg:gap-x-24 lg:grid-flow-col-dense">
            <a className="hover:text-green-400" href="#">
              About Us
            </a>
            <a className="hover:text-green-400" href="mailto:davjeev@gmail.com" >
              Contact
            </a>
            
            <a className="hover:text-green-400" href="#">
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col justify-between items-center lg:items-end lg:justify-self-end lg:col-span-4">
           \

            <p className="text-neutral-grayish-blue text-sm">
              © TryBae. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
