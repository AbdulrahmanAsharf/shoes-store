import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const UserButton  = () =>  {

    return (<>
        <div className="flex gap-2 item-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex item-center">
                        <Button variant='ghost' className='relative border w-8 h-8 rounded-full ml-2 flex item-center justify-center bg-gray-300'>
                            
                        </Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 md:mr-4">
                    <DropdownMenuLabel className="w-56">
                        <div className="flex flex-col space-y-1">
                            <div className="text-sm font-bold leading-none">
                                
                            </div>
                            <div className="text-sm font-normal leading-none text-gray-600">
                                
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="p-0 mb-1">
                        <form className="w-full">
                            <Button variant='ghost' className='w-full py-4 px-2 h-4 justify-start'>
                                Sign Out
                            </Button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </>)
}

export default UserButton;