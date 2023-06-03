import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '@/ui/button';
import SignInButton from '@/components/sign-in-button';
import SignOutButton from '@/components/sign-out-button';
import ThemeToggle from '@/components/theme-toggle';
import { authOptions } from '@/lib/auth';

const Navbar = async () => {
	const session = await getServerSession(authOptions);
	return (
		<div
			className='
    fixed 
    backdrop-blur-sm 
    bg-white/75 
    dark:bg-slate-900/75
    z-50
    top-0
    left-0
    right-0
    h-20
    border-b
    border-slate-300
    dark:border-slate-700
    shadow-sm
    flex
    items-center
    justify-between
    '
		>
			<div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
				<Link
					as='/'
					href='/'
					className={buttonVariants({ variant: 'link' })}
					rel='stylesheet preload'
				>
					Text Compare
				</Link>

				<div className='md:hidden'>
					<ThemeToggle />
				</div>
				<div className='hidden md:flex gap-4'>
					<ThemeToggle />
					<Link
						as='/documentation'
						href='/documentation'
						className={buttonVariants({ variant: 'ghost' })}
						rel='stylesheet preload'
					>
						Documentation
					</Link>

					{session ? (
						<>
							<Link
								as='/dashboard'
								href='/dashboard'
								className={buttonVariants({ variant: 'ghost' })}
								rel='stylesheet preload'
							>
								Dashboard
							</Link>
							<SignOutButton />
						</>
					) : (
						<SignInButton />
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
