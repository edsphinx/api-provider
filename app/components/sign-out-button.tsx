'use client';

import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import Button from '@/ui/button';
import { toast } from '@/ui/toast';

interface SignOutButtonProps {}

const SignOutButton = ({}: SignOutButtonProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const signUserGoogle = async () => {
		setIsLoading(true);
		try {
			await signOut();
		} catch (error) {
			toast({
				title: 'Error sign out',
				message: 'Please try again later',
				type: 'error',
			});
		}
	};
	return <Button onClick={signUserGoogle}>Sign Out</Button>;
};

export default SignOutButton;
