import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DotMatrix from '../components/Background';

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col min-h-screen bg-background justify-center'>
			<Header />
			<DotMatrix></DotMatrix>
			<main className='flex-1 flex flex-col z-1 w-full py-10 max-w-4/5 mx-auto'>{children}</main>
			<Footer />
		</div>
	);
}