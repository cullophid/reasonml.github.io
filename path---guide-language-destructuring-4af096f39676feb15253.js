webpackJsonp([0xacc0e2e4a83e2800],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-destructuring.json":function(e,s){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:11}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:12}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}}]},file:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{html:'<p>"Destructuring" is a visually concise way of extracting fields from a data structure while binding them to variables. You can use destructuring anywhere you\'d normally use a variable. To destructure, instead\nof writing the variable name as usual, write out the shape of the object.</p>\n<p>The following binds variables: <code>ten = 10</code>, <code>twenty = 20</code></p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> someInts = (<span class="hljs-number">10</span>, <span class="hljs-number">20</span>);\n<span class="hljs-keyword">let</span> (ten, twenty) = someInts;</code></pre>\n      </div>\n<p>The following binds variables: <code>n = "Guy"</code>, <code>a = 30</code></p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {name: string, age: int};\n<span class="hljs-keyword">let</span> somePerson = {name: <span class="hljs-string">"Guy"</span>, age: <span class="hljs-number">30</span>};\n<span class="hljs-keyword">let</span> {name: n, age: a} = somePerson;</code></pre>\n      </div>\n<p>Destructuring also allows type annotations.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (ten: int, twenty: int) = someInts;\n<span class="hljs-keyword">let</span> {name: (n:string), age: (a:int)} = somePerson;</code></pre>\n      </div>\n<p>Destructuring labeled arguments is also possible.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {name: string, age: int};\n\n<span class="hljs-keyword">let</span> someFunction person::{name} =&gt; {\n  <span class="hljs-comment">/* you can use `name` here */</span>\n}\n\n<span class="hljs-keyword">let</span> otherFunction person::({name} <span class="hljs-keyword">as</span> thePerson) =&gt; {\n  <span class="hljs-comment">/* you can use both `name` and the whole record as `thePerson` here */</span>\n}</code></pre>\n      </div>\n<p>A more advanced form of destructuring is called <strong>pattern matching</strong>. The latter looks like destructuring, but comes with even more help from the type system. Consider a variant:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> payload =\n| <span class="hljs-type">BadResult</span> int\n| <span class="hljs-type">GoodResult</span> string\n| <span class="hljs-type">NoResult</span>;</code></pre>\n      </div>\n<p>While using the <code>switch</code> expression on it, you can "destructure" it:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> data = <span class="hljs-type">GoodResult</span> <span class="hljs-string">"Product shipped!"</span>;\n\n<span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; <span class="hljs-string">"Success! "</span> ^ theMessage\n  | <span class="hljs-type">BadResult</span> errorCode =&gt;\n    <span class="hljs-string">"Something\'s wrong. The error code is: "</span> ^ (string_of_int errorCode)\n  };</code></pre>\n      </div>\n<p>Notice how we\'ve destructured <code>data</code> while handling each different case. The above <code>switch</code> will give you a compiler warning:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-type">Warning</span> <span class="hljs-number">8</span>: this pattern-matching <span class="hljs-keyword">is</span> not exhaustive.\n<span class="hljs-type">Here</span> <span class="hljs-keyword">is</span> an example <span class="hljs-keyword">of</span> a value that <span class="hljs-keyword">is</span> not matched:\n<span class="hljs-type">NoResult</span></code></pre>\n      </div>\n<p>Isn\'t that great? While matching on the shape of your data, the type system warned of an unhandled case. This <strong>conditional</strong> aspect is the essence of pattern matching. Most data structures with a "if this then that" aspect works with it:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> myList {\n| [] =&gt; print_endline <span class="hljs-string">"Empty list"</span>\n| [a, ...theRest] =&gt;\n  print_endline (<span class="hljs-string">"list with the head value "</span> ^ a)\n};\n\n<span class="hljs-keyword">switch</span> myArray {\n| [|<span class="hljs-number">1</span>, <span class="hljs-number">2</span>|] =&gt; print_endline <span class="hljs-string">"This is an array with item 1 and 2"</span>\n| <span class="hljs-number">_</span> =&gt; print_endline <span class="hljs-string">"This is an array"</span>\n}</code></pre>\n      </div>\n<p>You can even switch on string, int and others. You can even have many patterns going to the same result!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> reply =\n  <span class="hljs-keyword">switch</span> message {\n  | <span class="hljs-string">"Reason\'s pretty cool"</span> =&gt; <span class="hljs-string">"Yep"</span>\n  | <span class="hljs-string">"good night"</span> =&gt; <span class="hljs-string">"See ya!"</span>\n  | <span class="hljs-string">"hello"</span>\n  | <span class="hljs-string">"hi"</span>\n  | <span class="hljs-string">"heya"</span>\n  | <span class="hljs-string">"hey"</span> =&gt; <span class="hljs-string">"hello to you too!"</span>\n  | <span class="hljs-number">_</span> =&gt; <span class="hljs-string">"Nice to meet you!"</span>\n  };</code></pre>\n      </div>\n<p>Combined with other data structures, pattern matching can produce extremely concise, compiler-verified, performant code:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; <span class="hljs-string">"Success! "</span> ^ theMessage\n  | <span class="hljs-type">BadResult</span> (<span class="hljs-number">0</span> | <span class="hljs-number">1</span> | <span class="hljs-number">5</span>) =&gt; <span class="hljs-string">"Something\'s wrong. It\'s a server side problem."</span>\n  | <span class="hljs-type">BadResult</span> errorCode =&gt; <span class="hljs-string">"Unknown error occurred. Code: "</span> ^ string_of_int errorCode\n  | <span class="hljs-type">NoResult</span> =&gt; <span class="hljs-string">"Things look fine"</span>\n  };</code></pre>\n      </div>\n<p>When you really need to use arbitrary logic with an otherwise clean pattern match, you can slip in some <code>when</code> clauses, which are basically <code>if</code> sugar:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> data {\n  | <span class="hljs-type">GoodResult</span> theMessage =&gt; ...\n  | <span class="hljs-type">BadResult</span> errorCode when isServerError errorCode =&gt; ...\n  | <span class="hljs-type">BadResult</span> errorCode =&gt; ... <span class="hljs-comment">/* otherwise */</span>\n  | <span class="hljs-type">NoResult</span> =&gt; ...\n  };</code></pre>\n      </div>',frontmatter:{title:"Destructuring & Pattern Matching"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/destructuring.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-destructuring-4af096f39676feb15253.js.map