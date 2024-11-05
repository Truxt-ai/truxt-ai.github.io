import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Database, Cog } from 'lucide-react';

export default function Component() {
    return (
        <section className='max-w-7xl m-auto py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='flex items-center gap-2 mb-8'>
                    <span className='text-xl font-bold text-center bold uppercase tracking-wide text-gray-900'>WHY CHOOSE US</span>
                </div>

                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-8'>
                        <h2 className='text-3xl font-bold tracking-tighter text-navy-900 md:text-4xl/tight'>High Accuracy & Performance</h2>
                        <p className='text-gray-500 md:text-lg'>Our multi-LLM system and real-time updates ensure higher accuracy and relevance than standard models.</p>

                        <div className='grid sm:grid-cols-2 gap-6'>
                            <Card className='border-none shadow-none'>
                                <CardContent className='p-6 text-center'>
                                    <div className='mb-4 flex justify-center'>
                                        <div className='rounded-lg p-3 bg-blue-50'>
                                            <Zap className='h-6 w-6 text-blue-900' />
                                        </div>
                                    </div>
                                    <h3 className='text-lg font-semibold mb-2'>Multi-LLM System</h3>
                                    <p className='text-sm'>Uses multiple language models for higher accuracy than standard models.</p>
                                </CardContent>
                            </Card>

                            <Card className='border-none shadow-none'>
                                <CardContent className='p-6 text-center'>
                                    <div className='mb-4 flex justify-center'>
                                        <div className='rounded-lg p-3 bg-blue-50'>
                                            <Database className='h-6 w-6 text-blue-900' />
                                        </div>
                                    </div>
                                    <h3 className='text-lg font-semibold mb-2 text-navy-900'>Multimodal Data Support</h3>
                                    <p className='text-sm text-gray-500'>Include video and YouTube content in the Knowledge Hub.</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-xl font-semibold text-navy-900'>Security</h3>
                            <ul className='space-y-2 text-gray-500'>
                                <li className='flex items-center gap-2'>
                                    <Shield className='h-5 w-5 text-blue-900' />
                                    <span>Data Security: Keeps all enterprise data within organizational boundaries.</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Cog className='h-5 w-5 text-blue-900' />
                                    <span>On-Premises Option: Available for clients needing full control over data.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='relative h-[600px] w-full overflow-hidden rounded-2xl'>
                            <img alt='AI-powered system visualization' className='object-cover w-full h-full' src='https://static.wixstatic.com/media/cf9793_1dcf5895e918419a86fc88c21eea797f~mv2.jpeg/v1/fill/w_2940,h_1558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cf9793_1dcf5895e918419a86fc88c21eea797f~mv2.jpeg' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}