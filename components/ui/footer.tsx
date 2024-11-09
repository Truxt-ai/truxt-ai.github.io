import Link from 'next/link';

interface LinkItem {
    label: string;
    href: string;
    iconPath?: string;
}

interface FooterSection {
    title: string;
    links: LinkItem[];
}

interface FooterProps {
    border?: boolean;
}

const footerLinks: FooterSection[] = [
    {
        title: 'Product',
        links: [
            { label: 'Public Pages', href: '/public-pages' },
            { label: 'Sandbox', href: '/sandbox' },
            { label: 'Docs Instance', href: '/docs-instance' }
        ]
    },
    {
        title: 'Company',
        links: [
            { label: 'Team', href: '/team' },
            { label: 'FAQ', href: '/faq' }
        ]
    },
    {
        title: 'Social',
        links: [
            { label: 'Linkedin', href: 'https://www.linkedin.com/company/truxt-ai/', iconPath: '/images/linkedin.png' },
            { label: 'Twitter', href: 'https://x.com/truxtai', iconPath: '/images/twitter.png' }
        ]
    }
];

const Footer: React.FC<FooterProps> = ({ border = false }) => {
    return (
        <footer>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? 'border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]' : ''}`}>
                    <div className='space-y-2 sm:col-span-1 lg:col-span-4'>
                        <img src={'https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp'} alt='Truxt' width={32} height={32} />
                        <div className='text-sm text-gray-600'>&copy; Truxt.ai - All rights reserved.</div>
                    </div>

                    {footerLinks.map((section, index) => (
                        <div key={index} className={`space-y-2 ${section.title === 'Social' ? 'sm:col-span-6 md:col-span-3 lg:col-span-2' : 'sm:col-span-6 md:col-span-3 lg:col-span-2'}`}>
                            <h3 className='text-sm font-medium'>{section.title}</h3>
                            <ul className={section.title === 'Social' ? 'flex gap-1' : 'space-y-2 text-sm'}>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {section.title === 'Social' && link.iconPath ? (
                                            <Link className='flex items-center justify-center text-blue-500 transition hover:text-blue-600' href={link.href} aria-label={link.label} target='_blank'>
                                                <img src={link.iconPath} alt='Error in loading' className='size-6' />
                                            </Link>
                                        ) : (
                                            <Link className='text-gray-600 transition hover:text-gray-900' href={link.href}>
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='relative -mt-16 h-60 w-full -z-10' aria-hidden='true'>
                <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Truxt'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Truxt'] after:[text-shadow:0_1px_0_white]"></div>
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3' aria-hidden='true'>
                    <div className='h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]'></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
