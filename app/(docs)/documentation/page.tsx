import DocumentationTabs from '@/components/documentation-tabs';
import LargeHeading from '@/ui/large-heading';
import Paragraph from '@/ui/paragraph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Similarity API | Documentation',
	description: 'Open Source text similarity API',
};

const Page = ({}) => {
	return (
		<div className='container max-w-7xl mx-auto mt-12'>
			<div className='flex flex-col items-center gap-6'>
				<LargeHeading>Making a request</LargeHeading>
				<Paragraph>api/v1/similarity</Paragraph>

				<DocumentationTabs />
			</div>
		</div>
	);
};

export default Page;
