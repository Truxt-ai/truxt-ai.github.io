import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowRight, Database, Globe, Layers, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const searchOptions = [
    {
        value: 'web',
        label: 'Web',
        icon: Globe
    },
    {
        value: 'internal',
        label: 'Internal Data',
        icon: Database
    }
];

interface SearchContainerProps {
    searchType: string;
    setSearchType: (type: string) => void;
    inputDisabled: boolean;
    sendMessage: (query: string) => void;
    textAreaInputValue: string;
    setTextAreaInputValue: (data: string) => void;
}

function SearchContainer({ searchType, setSearchType, inputDisabled, sendMessage,  textAreaInputValue, setTextAreaInputValue }: SearchContainerProps) {
    const handleKeyDownFunction = (event: React.KeyboardEvent<HTMLTextAreaElement>, query: string) => {
        if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
            event.preventDefault();
            sendMessage(query);
        }
    };

    return (
        <div className='p-4 border-t border-gray-200 bg-white'>
            <div className='flex items-center gap-2'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className='outline-none border-none px-1 focus:outline-none focus:ring-0' variant={'ghost'}>
                            {searchOptions.map((option) =>
                                searchType === option.value ? (
                                    <div key={option.value} className='flex p-1 hover:bg-lightGray rounded-md dark:hover:bg-gray-700'>
                                        <Globe className={cn('cursor-pointer', searchType == 'all' || searchType == 'web' ? 'text-blue-500' : 'text-muted-foreground')} />
                                        <Database className={cn('cursor-pointer ml-1', searchType == 'all' || searchType == 'internal' ? 'text-blue-500' : 'text-muted-foreground')} />
                                    </div>
                                ) : null
                            )}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56'>
                        <DropdownMenuLabel>Search Context</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={searchType} onValueChange={setSearchType}>
                            {searchOptions.map((option) => (
                                <DropdownMenuRadioItem key={option.value} value={option.value} className='font-semibold'>
                                    {option.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <textarea 
                    placeholder='Ask a query' 
                    className={cn(
                        'w-full rounded-lg resize-none outline-none placeholder:text-sm text-sm bg-transparent',
                        'max-h-[200px] pt-3',
                        'max-h-[50px] min-h-[10px]'
                    )} 
                    onChange={(event) => setTextAreaInputValue(event.target.value)} 
                    onKeyDown={(event) => handleKeyDownFunction(event, textAreaInputValue)} 
                    value={textAreaInputValue}
                ></textarea>
                <button
                    className={cn(
                        'rounded-full bg-primary group hover:bg-gray-300 transition-all duration-200 dark:bg-darkGray',
                        'p-1',
                        'p-2',
                        'dark:bg-darkGray dark:text-white'
                    )}
                    onClick={() => {
                        sendMessage(textAreaInputValue);
                    }}
                >
                    {inputDisabled ? 
                        <Square role='icon' className='size-4 invert group-hover:invert-0 dark:invert-0' /> : 
                        <ArrowRight role='icon' className='size-5 invert dark:invert-0 group-hover:invert-0' />
                    }
                </button>
            </div>
            <div className='mt-2 text-xs text-center text-gray-500'>Powered by Truxt</div>
        </div>
    );
}

export default SearchContainer;

