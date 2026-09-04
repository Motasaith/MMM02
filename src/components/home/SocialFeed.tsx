"use client";

import { useState } from "react";
import Link from "next/link";
import { socialFeeds, socialChannels, type Platform, type SocialPost } from "@/data/socialFeeds";
import { Reveal } from "../Reveal";
import { Arrow } from "../ui";

// SVG Brand Icons
function YouTubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function XIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const platformIcons: Record<Platform, React.ComponentType<{ className?: string }>> = {
  youtube: YouTubeIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
};

const platformBadgeClasses: Record<Platform, { bg: string; text: string; label: string }> = {
  youtube: { bg: "bg-[#FF0000]/10 border-[#FF0000]/25", text: "text-[#FF0000]", label: "YouTube Video" },
  facebook: { bg: "bg-[#1877F2]/10 border-[#1877F2]/25", text: "text-[#1877F2]", label: "Facebook Post" },
  instagram: { bg: "bg-[#E1306C]/10 border-[#E1306C]/25", text: "text-[#E1306C]", label: "Instagram Dispatch" },
  x: { bg: "bg-slate-900/10 border-slate-900/25", text: "text-slate-900", label: "X Update" },
};

export function SocialFeed() {
  const [activeTab, setActiveTab] = useState<"all" | Platform | "embed">("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredPosts =
    activeTab === "all" || activeTab === "embed"
      ? socialFeeds
      : socialFeeds.filter((p) => p.platform === activeTab);

  return (
    <section id="social-feed" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DCE2EA]">
      <div className="shell-wide">
        {/* Section Header with Live Sync Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCE2EA] pb-8">
          <div>
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-[#FFECE8] px-3.5 py-1 text-xs font-bold text-[#EF3B19] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF3B19] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF3B19]" />
              </span>
              <span>LIVE SOCIAL FEED • براہ راست سوشل میڈیا فیڈ</span>
            </div>

            <h2 className="font-display text-[clamp(2.05rem,3.4vw,2.85rem)] leading-[1.1] font-black tracking-tight text-[#0A1020]">
              Follow Muslim Medical Mission in the Field
            </h2>
            <p className="mt-2.5 max-w-2xl text-[1.04rem] sm:text-[1.12rem] leading-relaxed text-[#4B5563]">
              Real-time video documentaries, emergency flood alerts, surgical camp dispatches, and volunteer stories auto-synced from our verified accounts.
            </p>
          </div>

          {/* Live Sync Status */}
          <div className="flex shrink-0 items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#72C94D]/40 bg-[#72C94D]/10 px-3 py-1.5 text-xs font-bold text-[#36952D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#36952D] animate-pulse" />
              Live Sync Active
            </span>
          </div>
        </div>

        {/* 4 Official Social Channels Subscription Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {socialChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-[#DCE2EA] bg-[#F5F7FA] p-4.5 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#075BD6]/50 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-xs"
                  style={{ backgroundColor: channel.color }}
                >
                  {channel.id === "youtube" && <YouTubeIcon className="h-5 w-5" />}
                  {channel.id === "facebook" && <FacebookIcon className="h-5 w-5" />}
                  {channel.id === "instagram" && <InstagramIcon className="h-5 w-5" />}
                  {channel.id === "x" && <XIcon className="h-4 w-4" />}
                </div>
                <span className="text-[0.72rem] font-bold text-[#6B7280]">
                  {channel.followers}
                </span>
              </div>

              <div className="mt-3.5">
                <h3 className="font-display text-[0.98rem] font-bold text-[#0A1020] group-hover:text-[#075BD6] transition-colors">
                  {channel.name}
                </h3>
                <p className="text-xs text-[#6B7280] truncate">{channel.handle}</p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#DCE2EA] pt-3 text-xs font-bold text-[#075BD6] group-hover:text-[#0649B8]">
                <span>{channel.cta}</span>
                <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Platform Tabs Switcher */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#DCE2EA] pb-3">
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`cursor-pointer rounded-full px-4 py-2 font-display text-xs sm:text-sm font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#075BD6] text-white shadow-xs"
                  : "bg-[#F5F7FA] text-[#4B5563] hover:bg-[#DCE6FB] hover:text-[#075BD6]"
              }`}
            >
              All Channels ({socialFeeds.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("youtube")}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-display text-xs sm:text-sm font-bold transition-all ${
                activeTab === "youtube"
                  ? "bg-[#FF0000] text-white shadow-xs"
                  : "bg-[#F5F7FA] text-[#4B5563] hover:bg-red-50 hover:text-[#FF0000]"
              }`}
            >
              <YouTubeIcon className="h-4 w-4" />
              <span>YouTube</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("facebook")}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-display text-xs sm:text-sm font-bold transition-all ${
                activeTab === "facebook"
                  ? "bg-[#1877F2] text-white shadow-xs"
                  : "bg-[#F5F7FA] text-[#4B5563] hover:bg-blue-50 hover:text-[#1877F2]"
              }`}
            >
              <FacebookIcon className="h-4 w-4" />
              <span>Facebook</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("instagram")}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-display text-xs sm:text-sm font-bold transition-all ${
                activeTab === "instagram"
                  ? "bg-gradient-to-r from-amber-500 via-pink-600 to-purple-600 text-white shadow-xs"
                  : "bg-[#F5F7FA] text-[#4B5563] hover:bg-pink-50 hover:text-[#E1306C]"
              }`}
            >
              <InstagramIcon className="h-4 w-4" />
              <span>Instagram</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("x")}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-display text-xs sm:text-sm font-bold transition-all ${
                activeTab === "x"
                  ? "bg-black text-white shadow-xs"
                  : "bg-[#F5F7FA] text-[#4B5563] hover:bg-slate-200 hover:text-black"
              }`}
            >
              <XIcon className="h-3.5 w-3.5" />
              <span>X (Twitter)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("embed")}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-display text-xs sm:text-sm font-bold transition-all ${
                activeTab === "embed"
                  ? "bg-[#0649B8] text-white shadow-xs"
                  : "bg-[#F3F7FF] text-[#075BD6] border border-[#DCE6FB] hover:bg-[#075BD6] hover:text-white"
              }`}
            >
              <span>Official Live Widgets</span>
            </button>
          </div>

          <span className="text-xs text-[#6B7280]">
            Showing {filteredPosts.length} recent field updates
          </span>
        </div>

        {/* Official Live Widgets Tab Content */}
        {activeTab === "embed" ? (
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* Embedded Video Showcase */}
            <div className="lg:col-span-7 rounded-2xl border border-[#DCE2EA] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#DCE2EA] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <YouTubeIcon className="h-5 w-5 text-[#FF0000]" />
                  <h3 className="font-display text-[1.12rem] font-bold text-[#0A1020]">
                    YouTube Live Showcase: Muslim Medical Mission
                  </h3>
                </div>
                <a
                  href="https://youtube.com/@mmmpakofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#FF0000] hover:underline"
                >
                  Visit Channel →
                </a>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0"
                  title="Muslim Medical Mission Video Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-xs text-[#6B7280]">
                Official YouTube channel feed for field documentaries, doctor interviews, and flood camp dispatches.
              </p>
            </div>

            {/* Embedded X / Twitter & Facebook Box */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-2xl border border-[#DCE2EA] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#DCE2EA] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <XIcon className="h-4 w-4 text-black" />
                    <h3 className="font-display text-[1.05rem] font-bold text-[#0A1020]">
                      Official X Timeline (@MMMPakOfficial)
                    </h3>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[#72C94D]" />
                </div>
                <div className="space-y-3">
                  <p className="text-xs sm:text-[0.88rem] leading-relaxed text-[#4B5563]">
                    Emergency dispatches, volunteer alerts, and breaking humanitarian updates are broadcast directly on our official X handle.
                  </p>
                  <a
                    href="https://x.com/MMMPakOfficial"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800"
                  >
                    <XIcon className="h-3.5 w-3.5" />
                    <span>Follow @MMMPakOfficial on X</span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-[#DCE2EA] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#DCE2EA] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <FacebookIcon className="h-4 w-4 text-[#1877F2]" />
                    <h3 className="font-display text-[1.05rem] font-bold text-[#0A1020]">
                      Facebook Page Community
                    </h3>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[#72C94D]" />
                </div>
                <div className="space-y-3">
                  <p className="text-xs sm:text-[0.88rem] leading-relaxed text-[#4B5563]">
                    Join over 42,000 members of our Facebook community for daily photos, medical camp rotas, and live patient feedback.
                  </p>
                  <a
                    href="https://facebook.com/MMMPakOfficial"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-700"
                  >
                    <FacebookIcon className="h-3.5 w-3.5" />
                    <span>View Official Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Multi-Platform Feed Cards Grid */
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPosts.map((post, i) => {
              const Icon = platformIcons[post.platform];
              const badge = platformBadgeClasses[post.platform];

              return (
                <Reveal key={post.id} delay={i * 60} amount={0.08} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCE2EA] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#075BD6]/50 hover:shadow-lg">
                    {/* Card Top: Author Lockup & Platform Badge */}
                    <div className="flex items-center justify-between border-b border-[#DCE2EA]/60 p-4">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-8 w-8 shrink-0 rounded-full object-contain border border-[#DCE2EA]"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="truncate text-xs font-bold text-[#0A1020]">
                              {post.author.name}
                            </span>
                            {post.author.verified && (
                              <svg className="h-3.5 w-3.5 shrink-0 text-[#075BD6]" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="block text-[0.7rem] text-[#6B7280] truncate">
                            {post.author.handle}
                          </span>
                        </div>
                      </div>

                      <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[0.68rem] font-bold ${badge.bg} ${badge.text}`}>
                        <Icon className="h-3 w-3" />
                        <span className="hidden sm:inline">{badge.label.split(" ")[0]}</span>
                      </span>
                    </div>

                    {/* Media Container */}
                    {post.media && (
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={post.media.thumbnail || post.media.url}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />

                        {/* YouTube Video Overlay Play Button */}
                        {post.platform === "youtube" && (
                          <button
                            type="button"
                            onClick={() => setSelectedVideo(post.media?.youtubeId || "dQw4w9WgXcQ")}
                            className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors group-hover:bg-black/20 cursor-pointer"
                            aria-label="Play video"
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                              <svg className="h-5 w-5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            {post.media.duration && (
                              <span className="absolute bottom-2.5 right-2.5 rounded bg-black/80 px-2 py-0.5 text-[0.7rem] font-bold text-white">
                                {post.media.duration}
                              </span>
                            )}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Text Body */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <p className="line-clamp-4 text-xs sm:text-[0.88rem] leading-relaxed text-[#0A1020]">
                        {post.content}
                      </p>

                      {/* Hashtags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((t) => (
                          <span key={t} className="text-[0.7rem] font-semibold text-[#075BD6]">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Post Footer with Metrics & External Link */}
                      <div className="mt-auto pt-4 border-t border-[#DCE2EA]/60 flex items-center justify-between gap-2">
                        <span className="text-[0.72rem] text-[#6B7280]">
                          {post.relativeTime}
                        </span>

                        <a
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#075BD6] hover:text-[#0649B8] transition-colors"
                        >
                          <span>Open post</span>
                          <Arrow className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black cursor-pointer"
              >
                ✕
              </button>
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
