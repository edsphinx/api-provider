import '@/styles/globals.css';
import Providers from '@/components/providers';
import Navbar from '@/components/navbar';
import { Toaster } from '@/ui/toast';
import ClientOnly from '@/components/client-only';
import { font } from '@/lib/font';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<Providers>
						{/* @ts-expect-error Server Component */}
						<Navbar />
						<Toaster position='bottom-right' />
					</Providers>
				</ClientOnly>
				<main>{children}</main>
				{/* Allow for more height on mobile devices */}
				<div className='h-40 md:hidden'></div>
			</body>
		</html>
	);
}
