/*useMemo dusara Performance hook hai. jo kisi opration ko yaad rakhane ki facility deta hai.
Memoization ki wajha se hum expensive calculations ka jo result aaya tha usko yaad rakha sakte hai. jo calculation pahale se hi ho gai ho usko fir se karne ki jarurat nahi hai.

useEffect, useCallback, ki tarha hi useMemo bhi array dipendancy leta hai. hala ki indone "useEffect, useCallback" se ulta ye value return karta hai.

Note: aap ko value ko return keyword ke sath wapas karna hoga. jiske liye hum arrow function use kar sakte hai(seen below). */

import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

function Post({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
