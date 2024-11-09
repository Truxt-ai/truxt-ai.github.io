import React from 'react'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Dropdown from '../dropdown'

type NavItem = {
  title: string
  href: string
}

type DropdownItem = {
  title: string
  items: NavItem[]
}

type NavItems = (NavItem | DropdownItem)[]

const navigationData: NavItems = [
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'DevOpsGPT',
    href: '/devops-gpt',
  },
  {
    title: 'Playground',
    href: '/playground',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Resources',
    items: [
      // { title: 'Blogs', href: '/blogs' },
      // { title: 'Docs', href: '/docs' },
      { title: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Company',
    items: [
      // { title: 'About Truxt', href: '/about' },
      // { title: 'Team', href: '/team' },
      { title: 'Contact Us', href: '/contact-us' },
    ],
  },
]

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp"
                alt="Truxt"
                width={32}
                height={32}
              />
              <h2 className="text-2xl">Truxt</h2>
            </Link>
          </div>

          <nav className="hidden md:flex items-center md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              {navigationData.map((item, index) => (
                <li key={index} className="px-3 py-1">
                  {'href' in item ? (
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 transition hover:text-gray-900"
                    >
                      {item.title}
                      {item.title === 'DevOps GPT' ? (
                        <div className="relative left-1 bottom-2 bg-gradient-to-tr from-blue-600 to-blue-300 px-2 text-xs text-white">
                          New
                        </div>
                      ) : null}
                    </Link>
                  ) : (
                    <Dropdown title={item.title}>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="">
                          <Link
                            href={subItem.href}
                            className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </Dropdown>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop sign in link */}
          <div className="flex flex-1 items-center justify-end">
            <Link
              href="https://app.truxt.xyz"
              className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
            >
              Login / Register
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}