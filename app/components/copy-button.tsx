'use client';

import React, { ButtonHTMLAttributes } from 'react';
import Button from '@/ui/button';
import { toast } from './ui/toast';
import { Copy } from 'lucide-react';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	valueToCopy: string;
}

const CopyButton = ({ valueToCopy, className, ...props }: CopyButtonProps) => {
	return (
		<Button
			{...props}
			onClick={() => {
				navigator.clipboard.writeText(valueToCopy);
				toast({
					title: 'Copied!',
					message: 'API key copied to clipboard',
					type: 'success',
				});
			}}
			variant='ghost'
			className={className}
		>
			<Copy className='h-5 w-5' />
		</Button>
	);
};

export default CopyButton;
