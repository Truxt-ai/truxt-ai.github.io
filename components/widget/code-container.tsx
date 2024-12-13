import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Copy } from "lucide-react";

const copyToClipboard = (code: string) => {
  navigator.clipboard.writeText(code).catch(err => {
    console.error("Failed to copy text: ", err);
  });
};

// Props type for CodeContainer
interface CodeContainerProps {
  code: string;
  language?: string;
}

const CodeContainer: React.FC<CodeContainerProps> = ({ code, language }) => {
  const showLineNumbers = code.split("\n").length > 1;

  return (
    <div className="code-container bg-primaryWhite rounded-md">
      {language && (
        <div className="top-bar flex justify-between p-4 pb-2 pt-2">
          <span className="language">{language}</span>
          <button className="copy-button" onClick={() => copyToClipboard(code)}>
            <Copy style={{ height: "14px", width: "14px" }} />
          </button>
        </div>
      )}
      <SyntaxHighlighter language={language || "text"} showLineNumbers={showLineNumbers} className={"rounded-md p-0 bg-black"}>
        {code}
      </SyntaxHighlighter>
      {!language && (
        <div className="single-line-copy">
          <button className="copy-button-inside" onClick={() => copyToClipboard(code)}>
            <Copy style={{ height: "14px", width: "14px" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeContainer;