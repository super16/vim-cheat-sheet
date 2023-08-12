import { MDXProvider } from '@mdx-js/preact';
import Content from './content.mdx';
import './app.css';

export function App() {
  return (
    <article>
      <span className="pre-title">
        Personal collection of commands, which I sometimes forget.
      </span>
      <MDXProvider>
        <Content />
      </MDXProvider>
    </article>
  );
}
