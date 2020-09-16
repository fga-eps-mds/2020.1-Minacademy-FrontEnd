import  React, { useState } from 'react';
import { connect } from 'react-redux'
import { selectCurrentModule, nextModule, previousModule } from '../../../../slices/tutorialSlice'
import ReactMarkdown from 'react-markdown'
import Button from '../../../../components/Button/index'
import MD from '../../../../assets/tutorial/2.md'
import './style.scss'

function Markdown({module, nextModule, previousModule }) {
  const [markdown, setMarkdown] = useState(MD);

  async function next() {
    console.log("NEXT");
    nextModule()
    // fetch(MD).then(res => res.text()).then(text => setModule(text));
    const file = await import(`../../../../assets/tutorial/${module}.md`);
    const response = await fetch(file.default);
    const text = await response.text();
    setMarkdown(text)
  }
  function back() {
    if (module === 1) return
    console.log("PREVIOUS");
    previousModule()
    const file = await import(`../../../../assets/tutorial/${module}.md`);
    const response = await fetch(file.default);
    const text = await response.text();
    setMarkdown(text)
  }

  return (
  <div className="markdown">
    <ReactMarkdown source={markdown} />
    <Button onClick={next}>LOAD</Button>
    <p>Current module: {module}</p>
  </div>
  );
}

const mapStateToProps = state => ({
  module: selectCurrentModule(state)
});

const mapDispatchToProps = { nextModule, previousModule }

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);