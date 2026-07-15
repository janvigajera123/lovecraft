import {
    Camera,
    Video,
    Heart,
    Music,
    Palette,
    ShieldCheck,
  } from "lucide-react";
  
  const features = [
    {
      icon: Camera,
      title: "Photos",
      desc: "Store your favorite memories forever.",
    },
    {
      icon: Video,
      title: "Videos",
      desc: "Relive unforgettable moments anytime.",
    },
    {
      icon: Heart,
      title: "Love Letters",
      desc: "Write heartfelt messages for your loved ones.",
    },
    {
      icon: Music,
      title: "Music",
      desc: "Attach songs that bring back memories.",
    },
    {
      icon: Palette,
      title: "Themes",
      desc: "Choose beautiful themes for every occasion.",
    },
    {
      icon: ShieldCheck,
      title: "Private",
      desc: "Your memories stay secure and protected.",
    },
  ];
  
  export default function Features() {
    return (
      <section
        id="features"
        className="bg-white py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
  
            <p className="font-semibold text-indigo-600">
              FEATURES
            </p>
  
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Why Choose LoveCraft?
            </h2>
  
            <p className="mt-4 text-gray-600">
              Everything you need to preserve memories beautifully.
            </p>
  
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  
            {features.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-indigo-100 p-4 text-indigo-600">
                    <Icon size={30} />
                  </div>
  
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
  
                  <p className="mt-3 leading-7 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
  
          </div>
  
        </div>
      </section>
    );
  }