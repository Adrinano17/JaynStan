import { Mail, Sparkles } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Hero.png"
            alt="Hero Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in text-white">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/30">
                  <Sparkles size={16} />
                  <span>JaynStan Espire Enclave</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  A{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                    Creative Hub
                  </span>{" "}
                  for Visionaries
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                  Designs | Arts | Tech | Management | Fashion | Lifestyle
                </p>
              </div>
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn btn-outline btn-lg rounded-full gap-2 bg-base"
                >
                  <Mail size={18} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
