'use client';

import 'simplebar-react/dist/simplebar.min.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import SimpleBar from 'simplebar-react';
import Code from '@/components/code';
import { nodejs, python } from '@/helpers/documentation-code';

const DocumentationTabs = () => {
	return (
		<Tabs
			defaultValue='nodejs'
			className='max-w-2xl w-full'
		>
			<TabsList>
				<TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
				<TabsTrigger value='python'>Python</TabsTrigger>
			</TabsList>
			<TabsContent value='nodejs'>
				<SimpleBar>
					<Code
						language='jsx'
						code={nodejs}
						show
						animated
					/>
				</SimpleBar>
			</TabsContent>
			<TabsContent value='python'>
				<SimpleBar>
					<Code
						language='tsx'
						code={python}
						show
						animated
					/>
				</SimpleBar>
			</TabsContent>
		</Tabs>
	);
};

export default DocumentationTabs;
