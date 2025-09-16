"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#052C3B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/media/images/brand-logos/Greenpledge logo 3-05.svg"
              alt="Greenpledge Logo"
              width={190}
              height={100}
              className=""
            />
          </div>
          <p className="mt-4 text-sm text-gray-300">
            We are a community-powered platform that connects you directly with
            smallholder farmers across Nigeria. Your support helps farmers
            complete their farm cycles and you receive real food as
            appreciation.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex gap-4">
            <Link href="#">
              <i className="fab fa-facebook-f text-xl hover:text-green-400"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-x-twitter text-xl hover:text-green-400"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-instagram text-xl hover:text-green-400"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-linkedin-in text-xl hover:text-green-400"></i>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/how-it-works" className="hover:text-green-400">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/support-farm" className="hover:text-green-400">
                Support a Farm Cycle
              </Link>
            </li>
            <li>
              <Link href="/marketplace" className="hover:text-green-400">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/verified-farmer" className="hover:text-green-400">
                Become a Verified Farmer
              </Link>
            </li>
            <li>
              <Link href="/impact-stories" className="hover:text-green-400">
                Community Impact Stories
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-green-400">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Resources */}
        <div>
          <h3 className="font-semibold mb-4">Popular Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/why-food-security" className="hover:text-green-400">
                Why Food Security Matters
              </Link>
            </li>
            <li>
              <Link href="/safety" className="hover:text-green-400">
                Safety & Vetting Process
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-green-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-green-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Contact */}
        <div>
          <h3 className="font-semibold mb-4">Stay in the Loop</h3>
          <p className="text-sm text-gray-300">
            Join our community newsletter for farm updates, produce delivery
            windows, and new support cycles.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md text-white font-semibold"
            >
              Subscribe
            </button>
          </form>

          {/* Address + Contact */}
          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <MapPin size={16} />
              <span>GreenPledge NG Headquarters, Abuja, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:hello@greenpledge.ng">hello@greenpledge.ng</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+23467465673431">+234-674-6567-3431</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        <p>© 2025 GreenPledge NG. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/terms" className="hover:text-green-400">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-green-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
