import React from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Dropdown from '../dropdown';
import { Badge } from '@/components/ui/badge';

type NavItem = {
    title: string;
    href: string;
};

type DropdownItem = {
    title: string;
    href?: string;
    items: NavItem[];
};

type NavItems = (NavItem | DropdownItem)[];

const navigationData: NavItems = [
    {
        title: 'Products',
        href: '/products',
        items: [
            { title: 'DevOpsGPT', href: '/devops-gpt' },
            { title: 'Truxt GEN AI Platform', href: '/truxt-gen-ai' }
        ]
    },
    {
        title: 'Solutions',
        href: '/solutions'
    },
    {
        title: 'Sandbox',
        href: '/sandbox'
    },
    // {
    //     title: 'Pricing',
    //     href: '/pricing'
    // },
    {
        title: 'Resources',
        items: [{ title: 'FAQ', href: '/faq' }]
    },
    {
        title: 'Company',
        items: [{ title: 'Contact Us', href: '/contact-us' }]
    }
];

export default function Component() {
    return (
        <header className='fixed top-2 z-30 w-full md:top-6'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm'>
                    {/* Site branding */}
                    <div className='flex flex-1 items-center'>
                        <Link href='/' className='flex items-center gap-2'>
                            <img src='https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp' alt='Truxt' width={32} height={32} />
                            <h2 className='text-2xl font-bold'>Truxt.ai</h2>
                        </Link>
                    </div>

                    <nav className='hidden md:flex items-center md:grow'>
                        <ul className='flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8'>
                            {navigationData.map((item, index) => (
                                <li key={index} className='px-3 py-1'>
                                    {'items' in item ? (
                                        <Dropdown title={item.title} href={item.href}>
                                            {item.items.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.href} className='flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap'>
                                                        {subItem.title === 'DevOpsGPT' ? (
                                                            <>
                                                                DevOpsGPT <sup className="text-xs font-normal ml-1 px-2 py-1 text-blue-600 bg-blue-50 rounded-sm">New</sup>
                                                            </>
                                                        ) : (
                                                            subItem.title
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </Dropdown>
                                    ) : (
                                        <Link href={item.href} className='flex items-center text-gray-700 transition hover:text-gray-900'>
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop sign in link */}
                    <ul className='flex flex-1 items-center justify-end gap-3'>
                        <li>
                            <Link href='https://app.truxt.xyz' className='btn-sm bg-white text-gray-800 shadow hover:bg-gray-50'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact-us?subject=Request-Demo' className='btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900'>
                                Request Demo
                            </Link>
                        </li>
                    </ul>

                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}