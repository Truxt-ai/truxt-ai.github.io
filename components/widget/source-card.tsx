import { ExternalLink, EyeIcon, Podcast, CircleChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import FileIconTemplate from './file-icon-template';
import { Sources } from '@/types/sources';

function isValidUrl(urlString: string) {
    try {
        new URL(urlString);
        return true;
    } catch {
        return false;
    }
}

const getFileExtension = (filename: string) => {
    return filename.split('.').pop();
};

export default function SourceCard({ sources }: { sources: Sources[] }) {
    console.log(sources)
    return (
        <>
            <h2 className='text-xl font-semibold flex items-center gap-2 px-2 my-3'>
                <Podcast className='size-5' /> Sources
            </h2>
            <ul className='no-scrollbar-source-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2   whitespace-nowrap w-auto'>
                {sources.slice(0, 3).map((item, index) => (
                    <li key={index} className='text-black bg-primaryWhite p-3 flex items-center justify-between rounded-md hover:bg-lightGray dark:text-gray-100 cursor-pointer dark:bg-secondary dark:hover:bg-gray-700'>
                        {isValidUrl(item.url) ? (
                            <Link href={item.url} target='_blank' className='w-full flex items-center justify-between'>
                                <img src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=128`} alt={item.title} width={128} height={128} className='size-6 rounded-full mr-2' />
                                <div className='w-11/12 overflow-hidden  whitespace-nowrap'>
                                    <p className='overflow-hidden text-ellipsis  whitespace-nowrap w-11/12'>{item.title}</p>
                                    <span className='w-10/12 overflow-hidden  text-xs text-muted-foreground pr-2'>{item.description}</span>
                                </div>
                                <ExternalLink className='size-4 inline-block' />
                            </Link>
                        ) : (
                            <Dialog modal={!isValidUrl(item.url)}>
                                <DialogTrigger asChild>
                                    <div className='w-full flex items-center justify-between'>
                                        <FileIconTemplate extension={`${getFileExtension(item.title)}`} />
                                        <p className='overflow-hidden text-ellipsis  whitespace-nowrap w-11/12'>{item.title}</p>
                                        <EyeIcon className='size-3 inline-block' />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className='sm:max-w-[425px]'>
                                    <DialogHeader>
                                        <DialogTitle className='break-words'>{item.title}</DialogTitle>
                                    </DialogHeader>
                                    <ScrollArea className='max-h-[400px] '>
                                        <div className='flex flex-col gap-y-4'>
                                            <div className='flex flex-col gap-y-2'>
                                                <Label className='text-muted-foreground'>Type of source</Label>
                                                <span className='capitalize'>{item?.type?.replaceAll('_', ' ')}</span>
                                            </div>
                                            <div className='flex flex-col gap-y-2'>
                                                <Label className='text-muted-foreground'>Description</Label>
                                                <span>{item.description}</span>
                                            </div>
                                            <div className='flex flex-col gap-y-2'>
                                                <Label className='text-muted-foreground'>Link</Label>

                                                <Link href={isValidUrl(item.url) ? item.url : ''} target={isValidUrl(item.url) ? '_blank' : '_self'} rel='noreferrer nofollow' className={cn(isValidUrl(item.url) && 'text-blue-500 hover:underline')}>
                                                    {item.url}
                                                </Link>
                                            </div>
                                        </div>
                                    </ScrollArea>
                                    <DialogFooter>
                                        <DialogTrigger>Close</DialogTrigger>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        )}
                    </li>
                ))}

               
            </ul>
        </>
    );
}

