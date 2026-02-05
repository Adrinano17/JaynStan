import React from "react";
import {
  Sparkles,
  Users,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  Calendar,
  ArrowRight,
  Award,
  Eye,
  Palette,
} from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      role: "Creative Director",
      description:
        "Leading the charge in artistic direction, our Creative Director combines a keen sense of style with an innovative approach to projects, ensuring each concept resonates with our brand's essence.",
      icon: Palette,
    },
    {
      role: "Brand Strategist",
      description:
        "Our Brand Strategist crafts compelling narratives that connect our audience with our vision, employing a blend of market insight and creativity to build a powerful brand presence.",
      icon: Target,
    },
    {
      role: "Media Producer",
      description:
        "With a passion for storytelling, our Media Producer transforms ideas into captivating visuals, using cutting-edge techniques to bring our creative projects to life.",
      icon: Eye,
    },
  ];

  const coreValues = [
    {
      title: "Creativity",
      description:
        "At the heart of Jaynstan Espire Enclave lies an unwavering commitment to creativity. We believe in pushing boundaries and exploring new ideas, allowing our artistic spirits to shine and inspire others. Each project reflects our dedication to innovation and self-expression.",
      icon: Lightbulb,
    },
    {
      title: "Integrity",
      description:
        "Integrity is the foundation of our operations. We engage transparently with our clients, partners, and community, cultivating trust through ethical practices and high-quality work. Our commitment to honesty and accountability guides every decision we make.",
      icon: Shield,
    },
    {
      title: "Cultural Enrichment",
      description:
        "We recognize the importance of cultural diversity and actively seek to enrich our community through our projects. By celebrating various cultural influences, we create an inclusive space that honors creativity in all its forms, fostering unity and appreciation.",
      icon: Globe,
    },
  ];

  const culturalPosts = [
    {
      title: "Fashion as a Cultural Statement",
      date: "February 4, 2026",
    },
    {
      title: "Art and Activism: A Powerful Alliance",
      date: "February 4, 2026",
    },
    {
      title: "Engaging with Emerging Artists",
      date: "February 4, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section - The Genesis */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary font-semibold text-sm border border-primary/30">
              <Sparkles size={16} />
              <span>The Genesis of Jaynstan Espire Enclave</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where art meets ambition—our creative journey begins.
            </h1>
          </div>
        </div>
      </section>

      {/* A Vision Realized Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary font-semibold text-sm">
                <Heart size={16} />
                <span>A Vision Realized</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Founded on a passion for creativity
              </h2>
              <p className="text-lg text-base-content/80 leading-relaxed">
                Jaynstan Espire Enclave emerged from the collective dreams of
                artists and innovators who sought to redefine the boundaries of
                arts and fashion. Our journey is one of perseverance and
                inspiration, reflecting a vibrant tapestry of cultural
                influences.
              </p>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <Sparkles className="w-16 h-16 mx-auto text-primary" />
                <p className="text-base-content/70 italic">
                  Section image placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones of Creativity */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-base-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm">
              <Award size={16} />
              <span>Milestones of Creativity</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Milestones of Creativity
            </h2>
            <p className="text-lg text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Over the years, we have celebrated numerous milestones, from
              launching groundbreaking fashion lines to producing captivating
              media projects. Each achievement is a testament to our commitment
              to quality and artistic expression, continually pushing the
              envelope of what is possible.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-linear-to-br from-secondary/20 to-accent/20 flex items-center justify-center order-2 md:order-1">
              <div className="text-center space-y-4 p-8">
                <Target className="w-16 h-16 mx-auto text-secondary" />
                <p className="text-base-content/70 italic">
                  Section image placeholder
                </p>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm">
                <Target size={16} />
                <span>Looking Ahead</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Looking Ahead
              </h2>
              <p className="text-lg text-base-content/80 leading-relaxed">
                As we move forward, our vision remains clear: to elevate
                creative expression in every form, bridging the worlds of art,
                fashion, and entertainment while fostering a community that
                thrives on innovation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Creative Minds */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-base-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm">
              <Users size={16} />
              <span>Our Creative Minds</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Meet the visionaries shaping our brand's future.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={index}
                  className="group bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 hover:border-primary/50"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10 mb-6 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <p className="absolute bottom-2 text-xs text-base-content/50 italic">
                      Section image
                    </p>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{member.role}</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Core of Our Brand */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary font-semibold text-sm">
              <Heart size={16} />
              <span>The Core of Our Brand</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Guided by our principles, we strive for excellence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 hover:border-secondary/50"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden bg-linear-to-br from-secondary/10 to-accent/10 mb-6 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <p className="absolute bottom-2 text-xs text-base-content/50 italic">
                      Section image
                    </p>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Conversations */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-base-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm">
              <Globe size={16} />
              <span>Cultural Conversations</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Exploring our role in shaping cultural narratives.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {culturalPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-base-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-base-300 hover:border-accent/50 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm text-base-content/60">{post.date}</p>
                    <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
