import { MarkdownParserReact } from '../../utils/markdown/markdown-parser-to-react-element';
import React, { useEffect, useState } from 'react';
import { ReactElement } from 'rehype-react/lib';
// I could import katex css directly here instead of adding it to index.html...
// import 'katex/dist/katex.min.css';

const MarkdownToHtml: React.FC<{ children: string }> = props => {
	const [data, setData] = useState<ReactElement>(React.createElement('div'));
	useEffect(() => {
		const generateHtml = MarkdownParserReact.Parse(props.children);
		generateHtml.then(value => {
			setData(value);
		});
		generateHtml.catch(console.error);
	}, []);
	return <div>{data}</div>;
};

export default MarkdownToHtml;
