import {
  Building,
  Code2,
  ImageIcon,
  Mail,
  Palette,
  Sparkles,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
            <div className="space-y-8 text-primary animate-[slideInLeft_0.8s_ease-out_both]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm border border-white/30">
                  <Sparkles size={16} />
                  <span>JaynStan Espire Enclave</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  A{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-white">
                    Creative Hub for Visionaries
                  </span>{" "}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                  Designs | Arts | Tech | Management | Fashion | Lifestyle
                </p>
              </div>
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="btn btn-outline btn-primary bg-base"
                >
                  <Mail size={18} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services*/}
      <section className="py-16 md:py-16 bg-base-300">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 animate-[fallIn_0.6s_ease-out_0.1s_both]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Services
            </h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              We bring your vision to life with our comprehensive range of
              creative and technical services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Software Development Card */}
            <div className="card bg-base-200 hover:shadow-xl transition-shadow animate-[fallIn_0.6s_ease-out_0.1s_both]">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-4">
                  <Code2 size={24} className="text-success" />
                </div>
                <h3 className="card-title text-xl mb-2">
                  Software Development
                </h3>
                <p className="text-base-content/70">
                  Custom software solutions tailored to your business needs with
                  cutting-edge technology
                </p>
              </div>
            </div>

            {/* Graphic Design Card */}
            <div className="card bg-base-200 hover:shadow-xl transition-shadow animate-[fallIn_0.6s_ease-out_0.2s_both]">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mb-4">
                  <ImageIcon size={24} className="text-warning" />
                </div>
                <h3 className="card-title text-xl mb-2">Graphic Design</h3>
                <p className="text-base-content/70">
                  Eye-catching visual designs that communicate your brand's
                  message effectively
                </p>
              </div>
            </div>

            {/* Painting Card */}
            <div className="card bg-base-200 hover:shadow-xl transition-shadow animate-[fallIn_0.6s_ease-out_0.3s_both]">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-info/20 flex items-center justify-center mb-4">
                  <Palette size={24} className="text-info" />
                </div>
                <h3 className="card-title text-xl mb-2">Artwork | Painting</h3>
                <p className="text-base-content/70">
                  Professional painting services that transform spaces with
                  color and creativity
                </p>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="card bg-base-200 hover:shadow-xl transition-shadow animate-[fallIn_0.6s_ease-out_0.4s_both]">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-error/20 flex items-center justify-center mb-4">
                  <Building size={24} className="text-error" />
                </div>
                <h3 className="card-title text-xl mb-2">Architecture</h3>
                <p className="text-base-content/70">
                  Innovative architectural designs that blend functionality with
                  aesthetic appeal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Divider.png"
            alt="Divider Background"
            className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-base/60 via-black/20 to-black/50"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>
      {/*  */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden"></section>

      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <img
          src="/Group.png"
          alt="Divider Background"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        />

       
      </section>
    </div>
  );
};

export default HomePage;
