'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import Button from '@/ui/button';
import { toast } from '@/ui/toast';

interface SignInButtonProps {}

const SignInButton = ({}: SignInButtonProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const signInWithGoogle = async () => {
		setIsLoading(true);
		try {
			await signIn('google');
		} catch (error) {
			toast({
				title: 'Error sign in',
				message: 'Please try again later',
				type: 'error',
			});
		}
	};
	return <Button onClick={signInWithGoogle}>Sign In</Button>;
};

export default SignInButton;
