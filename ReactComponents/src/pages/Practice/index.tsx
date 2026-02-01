import { ChangeEvent } from "preact/compat";
import { useEffect, useRef, useState } from "preact/hooks";

import useDebounce from './hooks/useDebounce';
import useBoolean from "./hooks/useBoolean";
import useCounter from "./hooks/useCounter";
import checkboxData from "../../assets/checkboxData.json"
import { on } from "events";

function ToggleBoolean() {
  const { value, setTrue, setFalse } = useBoolean();
  const toggle = () => {
    if (value) {
      setFalse();
    } else {
      setTrue();
    }
  }
  return (
    <div>
      <p>{value ? 'enabled' : 'disabled'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function Counter() {
  const { count, increment, decrement, reset, setCount } = useCounter();

  return (
    <div>
      <p>Counter: {count}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

function Accordion() {
  const [htmlToggle, setHtmlToggle] = useState(false);
  const [cssToggle, setCssToggle] = useState(false);
  const [jsToggle, setJsToggle] = useState(false);
  return (
    <div>
      <div>
        <div onClick={() => setHtmlToggle(!htmlToggle)}>
          HTML
          <span
            aria-hidden={true}
            className={
              htmlToggle
                ? "accordion-icon accordion-icon--rotated"
                : "accordion-icon accordion-icon--default"
            }
          />
        </div>
        {htmlToggle && (
          <div>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => setCssToggle(!cssToggle)}>
          CSS{" "}
          <span
            aria-hidden={true}
            className={
              cssToggle
                ? "accordion-icon accordion-icon--rotated"
                : "accordion-icon accordion-icon--default"
            }
          />
        </div>
        {cssToggle && (
          <div>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => setJsToggle(!cssToggle)}>
          JavaScript{" "}
          <span
            aria-hidden={true}
            className="accordion-icon accordion-icon--default"
          />
        </div>
        {jsToggle && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        )}
      </div>
    </div>
  );
}

function Tabs() {
  const [value, setValue] = useState("html");
  return (
    <div>
      <div>
        <button onClick={(e) => setValue("html")}>HTML</button>
        <button onClick={(e) => setValue("css")}>CSS</button>
        <button onClick={(e) => setValue("js")}>JavaScript</button>
      </div>
      <div>
        {value === "html" && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}

        {value === "css" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}

        {value === "js" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}

function Debounce() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 1000);

  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword((e.target as HTMLInputElement).value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
    </div>
  );
}


export const Practice = () => {
  return (
    <div>
      <p>Counter:</p>
      <Counter/>
      <p>Boolen hook:</p>
      <ToggleBoolean/>
      <p>Accordion:</p>
      <Accordion/>
      <p>Tabs:</p>
      <Tabs/>
      <p>Debounce:</p>
      <Debounce/>
    </div>
  )
}