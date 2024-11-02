import React from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Dropdown from '../dropdown';

// Define types for our navigation items
type NavItem = {
    title: string;
    href: string;
};

type DropdownItem = {
    title: string;
    items: NavItem[];
};

type NavItems = (NavItem | DropdownItem)[];

// JSON structure for navigation items
const navigationData: NavItems = [
    // {
    //     title: 'Docs',
    //     href: '/documentation'
    // },
    // {
    //     title: 'Integrations',
    //     href: '/integrations'
    // },
    {
        title: 'Public Pages',
        href: '/public-pages'
    },
    {
        title: 'Sandbox',
        href: '/sandbox'
    },
    {
        title: 'Docs Instance',
        href: '/docs-instance'
    },

    // {
    //     title: 'Products',
    //     items: [
    //         { title: 'Public Pages', href: '/public-pages' },
    //         { title: 'Sandbox', href: '/sandbox' },
    //         { title: 'Docs Instance', href: '/docs-instance' }
    //     ]
    // },
    {
        title: 'Team',
        href: '/team'
    },
    {
        title: 'FAQ',
        href: '/faq'
    }
];

export default function Header() {
    return (
        <header className='fixed top-2 z-30 w-full md:top-6'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'>
                    {/* Site branding */}
                    <div className='flex flex-1 items-center'>
                        <Link href='/'>
                            <img src={'https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp'} alt='Truxt' width={32} height={32} />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className='hidden md:flex md:grow'>
                        {/* Desktop menu links */}
                        <ul className='flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8'>
                            {navigationData.map((item, index) => (
                                <li key={index} className='px-3 py-1'>
                                    {'href' in item ? (
                                        <Link href={item.href} className='flex items-center text-gray-700 transition hover:text-gray-900'>
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <Dropdown title={item.title}>
                                            {item.items.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.href} className='flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100'>
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

                    {/* Desktop sign in links */}
                    <ul className='flex flex-1 items-center justify-end gap-3'>
                        <li>
                            <Link href='https://app.truxt.xyz' className='btn-sm bg-white text-gray-800 shadow hover:bg-gray-50'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href='https://app.truxt.xyz/' className='btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900'>
                                Register
                            </Link>
                        </li>
                    </ul>

                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
