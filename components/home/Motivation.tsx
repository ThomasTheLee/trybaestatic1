const motivationItems = [
  {
    iconPath: '/icons/icon-online.svg',
    title: 'Seamless Convenience',
    subtitle:
      'Say goodbye to long queues and book tickets for your favorite events, concerts, and shows from the comfort of your home with just a few taps on our user-friendly app.',
  },
  {
    iconPath: '/icons/icon-budgeting.svg',
    title: 'Instant Access',
    subtitle:
      'Gain instant access to a diverse range of events, festivals, and attractions with real-time updates, ensuring you never miss out on the experiences that matter to you.',
  },
  {
    iconPath: '/icons/icon-onboarding.svg',
    title: 'Secure Transactions',
    subtitle:
      'Trust in our robust security measures that safeguard your personal and payment information, guaranteeing a worry-free ticket booking experience.',
  },
  {
    iconPath: '/icons/icon-api.svg',
    title: 'Exclusive Rewards',
    subtitle:
      'Enjoy special perks, discounts, and loyalty rewards as a valued member of our ticketing app community, enhancing your overall event-going journey ',
  },
];

export default function Motivation() {
  return (
    <section className="mt-5 py-14 bg-white lg:py-24">
      <div className="container text-center lg:text-left">
        <div className="grid lg:grid-cols-2 mb-12 lg:mb-16">
          <div className="col-span-1">
            <h2 className="text-3xl lg:text-4xl text-slate-700 pb-5">
              Why choose Trybae?
            </h2>
            <p className="text-slate-500 text-sm lg:text-base leading-5">
            Unlock the world of experiences with ease - Get your tickets hassle-free on our premier online ticketing platform!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4">
          {motivationItems.map((item) => (
            <div key={item.title} className="justify-center">
              <div className="flex justify-center lg:justify-start">
                <img src={item.iconPath} alt="" />
              </div>

              <h2 className="text-lg text-slate-700 py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
              <p className="text-slate-500 text-sm font-light lg:text-base leading-5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
