'use client';

import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Sun, Moon } from 'lucide-react';
import Button from '@/ui/button';

interface ThemeToggleProps {}

const ThemeToggle = ({}: ThemeToggleProps) => {
	const { setTheme } = useTheme();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='sm'
				>
					<Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:.text-slate-100' />
					<Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
				</Button>
			</DropdownMenuTrigger>
		</DropdownMenu>
	);
};

export default ThemeToggle;
