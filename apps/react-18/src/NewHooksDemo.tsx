import {
  Suspense,
  useDeferredValue,
  useId,
  useMemo,
  useState,
  useTransition,
} from "react";

export const TransactionDemo = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c) => c + 1);
    });
  }

  return (
    <div>
      <p>
        <code>useTransition()</code>
      </p>
      {isPending && <span>Loading...</span>}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export function CheckboxIdDemo() {
  const id = useId();
  return (
    <div>
      <p>
        <code>useId()</code>
      </p>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </div>
  );
}

function SearchSuggestions({ query }: { query: string }) {
  // NOTE: Components can now render undefined
  if (!query) return null;

  return (
    <p>
      Looking suggestions for ...
      <pre>{query}</pre>
    </p>
  );
}

export function DeferredValueDemo() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  // Memoizing tells React to only re-render when deferredQuery changes,
  // not when query changes.
  const suggestions = useMemo(
    () => <SearchSuggestions query={deferredQuery} />,
    [deferredQuery]
  );

  return (
    <div>
      <p>
        <code>useDeferredValue()</code>
      </p>
      <label htmlFor="keyword">Search</label>
      <input
        name="keyword"
        placeholder="Type something..."
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
      />
      <Suspense fallback="Loading results...">{suggestions}</Suspense>
    </div>
  );
}
