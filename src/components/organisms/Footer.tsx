import { footerProps } from "../../utils/constantData";

const Footer = () => {
  return (
    <footer className="bg-[#162448] text-center py-3 px-4">
      <div className="grid sm:grid-cols-12">
        <div className="text-white text-sm text-left grid grid-cols-2 sm:grid-cols-4 col-span-8 gap-6 py-8 px-3">
          {footerProps?.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="uppercase text-gray-400 mb-2">{item?.title}</h3>
                {item?.content?.map((itm, idx) => {
                  return (
                    <p className="mt-2 hover:cursor-pointer" key={idx}>
                      {itm?.title}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 col-span-4 border-t-1 sm:border-t-0 border-l-0 sm:border-l-1 border-gray-300 py-8 px-3 gap-4">
          <div className="text-white text-xs sm:text-sm text-left sm:ml-3">
            <h3 className="uppercase text-gray-400 mb-2">Mail Us</h3>
            <p className="w-40 sm:w-60">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </p>
            <div className="mt-3">
              <p className="uppercase text-gray-400 mb-2">Social</p>
              <div className="flex gap-4 text-white">
                <i className="ri-facebook-box-line text-2xl hover:cursor-pointer"></i>
                <i className="ri-twitter-x-line text-2xl hover:cursor-pointer"></i>
                <i className="ri-youtube-line text-2xl hover:cursor-pointer"></i>
                <i className="ri-instagram-line text-2xl hover:cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="text-white text-xs sm:text-sm text-left ml-3">
            <h3 className="uppercase text-gray-400 mb-2">Mail Us</h3>
            <p className="w-40 sm:w-60">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India <br /> CIN :
              U51109KA2012PTC066107 <br />
              Telephone: 044-45614700 / 044-67415800
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-white mt-2">
        <h3 className="text-sm text-white mt-3">
          &copy; 2025 - All rights reserved - Made with ❤️ India
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
