'use client';

import { useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import { TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { Globe, FileText } from 'lucide-react';
import Logo03 from '@/public/images/logo-03.svg';
import Logo05 from '@/public/images/logo-05.svg';
import Logo06 from '@/public/images/logo-06.svg';
import Logo07 from '@/public/images/logo-07.svg';
import Logo09 from '@/public/images/logo-09.svg';

export default function BusinessCategories() {
    const tabsRef = useRef<HTMLDivElement>(null);
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <section>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div>
                    <TabGroup selectedIndex={selectedTab}>
                        <TabPanels className='relative flex h-[324px] items-center justify-center'>
                            {/* Small blue dots */}
                            <div className='absolute -z-10'>
                                <svg className='fill-blue-500' xmlns='http://www.w3.org/2000/svg' width={164} height={41} viewBox='0 0 164 41' fill='none'>
                                    <circle cx={1} cy={8} r={1} fillOpacity='0.24' />
                                    <circle cx={1} cy={1} r={1} fillOpacity='0.16' />
                                    <circle cx={1} cy={15} r={1} />
                                    <circle cx={1} cy={26} r={1} fillOpacity='0.64' />
                                    <circle cx={1} cy={33} r={1} fillOpacity='0.24' />
                                    <circle cx={8} cy={8} r={1} />
                                    <circle cx={8} cy={15} r={1} />
                                    <circle cx={8} cy={26} r={1} fillOpacity='0.24' />
                                    <circle cx={15} cy={15} r={1} fillOpacity='0.64' />
                                    <circle cx={15} cy={26} r={1} fillOpacity='0.16' />
                                    <circle cx={8} cy={33} r={1} />
                                    <circle cx={1} cy={40} r={1} />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 164 7)' fillOpacity='0.24' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 164 0)' fillOpacity='0.16' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 164 14)' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 164 25)' fillOpacity='0.64' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 164 32)' fillOpacity='0.24' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 157 7)' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 157 14)' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 157 25)' fillOpacity='0.24' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 150 14)' fillOpacity='0.64' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 150 25)' fillOpacity='0.16' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 157 32)' />
                                    <circle cx={1} cy={1} r={1} transform='matrix(-1 0 0 1 164 39)' />
                                </svg>
                            </div>
                            {/* Blue glow */}
                            <div className='absolute -z-10'>
                                <svg xmlns='http://www.w3.org/2000/svg' width={432} height={160} viewBox='0 0 432 160' fill='none'>
                                    <g opacity='0.6' filter='url(#filter0_f_2044_9)'>
                                        <path className='fill-blue-500' fillRule='evenodd' clipRule='evenodd' d='M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z' />
                                    </g>
                                    <defs>
                                        <filter id='filter0_f_2044_9' x={0} y={0} width={432} height={160} filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                            <feFlood floodOpacity={0} result='BackgroundImageFix' />
                                            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                                            <feGaussianBlur stdDeviation={32} result='effect1_foregroundBlur_2044_9' />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            {/* Horizontal lines */}
                            <div className='absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply'></div>
                            <div className='absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply'></div>
                            <div className='absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply'></div>
                            <div className='absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-blue-500'></div>
                            <div className='absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-blue-500'></div>
                            {/* Diagonal lines */}
                            <div className='absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply'></div>
                            <div className='absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply'></div>
                            {/* Vertical lines */}
                            <div className='absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply'></div>
                            <div className='absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply'></div>
                            {/* Logos */}
                            <div className='absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]'>
                                <div className='animate-[breath_8s_ease-in-out_infinite_both]'>
                                    <div className='flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]'>
                                        <Image className='relative' src={'https://res.cloudinary.com/dqumxmkt7/image/upload/v1729240685/t2wtznrhjqi5yffsoacv.webp'} width={32} height={32} alt='Logo 01' />
                                    </div>
                                </div>
                            </div>

                            <div className='relative flex flex-col' ref={tabsRef}>
                                <TabPanel as={Fragment} static={true}>
                                    <Transition as='div' show={selectedTab === 0} unmount={false} className='flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300' enter='transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first' enterFrom='opacity-0 scale-90' enterTo='opacity-100 scale-100' leave='transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-125'>
                                        <div className='absolute -translate-x-[136px]'>
                                            <div className='animate-[breath_7s_ease-in-out_3s_infinite_both]'>
                                                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]'>
                                                    <Image className='relative' src={'https://www.youtube.com/s/desktop/7565d93c/img/logos/favicon_144x144.png'} width={23} height={22} alt='Logo 02' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute translate-x-[136px]'>
                                            <div className='animate-[breath_7s_ease-in-out_3.5s_infinite_both]'>
                                                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]'>
                                                    <Image className='relative' src={Logo03} width={22} height={22} alt='Logo 03' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute -translate-x-[216px] -translate-y-[82px]'>
                                            <div className='animate-[breath_6s_ease-in-out_3.5s_infinite_both]'>
                                                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]'>
                                                    <Globe />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute -translate-y-[82px] translate-x-[216px]'>
                                            <div className='animate-[breath_6s_ease-in-out_1.5s_infinite_both]'>
                                                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]'>
                                                    <Image className='relative' src={Logo05} width={25} height={25} alt='Logo 05' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute translate-x-[216px] translate-y-[82px]'>
                                            <div className='animate-[breath_6s_ease-in-out_2s_infinite_both]'>
                                                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]'>
                                                    <img className='relative' src={'https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg'} width={32} height={32} alt='Logo 06' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute -translate-x-[216px] translate-y-[82px]'>
                                            <div className='animate-[breath_6s_ease-in-out_2.5s_infinite_both]'>
                                                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]'>
                                                    <FileText color='blue' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute -translate-x-[292px] opacity-40'>
                                            <div className='animate-[breath_6s_ease-in-out_2s_infinite_both]'>
                                                <div className='flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg'>
                                                    <Image className='relative' src={Logo03} width={22} height={22} alt='Logo 03' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='absolute translate-x-[292px] opacity-40'>
                                            <div className='animate-[breath_6s_ease-in-out_4s_infinite_both]'>
                                                <div className='flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg'>
                                                    <img className='relative' src={'https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png'} width={21} height={13} alt='Logo 09' />
                                                </div>
                                            </div>
                                        </div>
                                    </Transition>
                                </TabPanel>
                            </div>
                        </TabPanels>
                    </TabGroup>
                </div>
              <h2 className='text-center text-2xl mt-4'>How our engine works?</h2>
            </div>
        </section>
    );
}
