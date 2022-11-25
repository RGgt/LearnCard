import { MarkdownParser } from '../../utils/markdown/markdown-parser';
import React, { useEffect, useState } from 'react';
// I could import katex css directly here instead of adding it to index.html...
// import 'katex/dist/katex.min.css';

const MarkdownToHtml: React.FC<{ children: string }> = props => {
	const [data, setData] = useState('loading text...');
	useEffect(() => {
		const generateHtml = MarkdownParser.Parse(props.children);
		generateHtml.then(value => {
			setData(value);
		});
		generateHtml.catch(console.error);
	}, []);
	return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default MarkdownToHtml;
