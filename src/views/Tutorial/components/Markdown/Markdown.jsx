import  React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { selectCurrentModule, nextModule, previousModule } from '../../../../slices/tutorialSlice'
import ReactMarkdown from 'react-markdown'
import Button from '../../../../components/Button/index'
import './style.scss'

function Markdown({ currentModule, nextModule, previousModule }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    (async function updateMarkdown() {
      const file = await import(`../../../../assets/tutorial/${currentModule}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setMarkdown(text)
    })()
  });

  function next() {
    if (currentModule > 25) return
    console.log("NEXT");
    nextModule()
  }
  function previous() {
    if (currentModule === 1) return
    console.log("PREVIOUS");
    previousModule()
  }

  return (
  <div className="markdown">
    <ReactMarkdown source={markdown} />
    <div className="markdown__navigation">
      <Button onClick={previous}>anterior</Button>
      <Button onClick={next}>próximo</Button>
    </div>
  </div>
  );
}

const mapStateToProps = state => ({
  currentModule: selectCurrentModule(state)
});

const mapDispatchToProps = { nextModule, previousModule }

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);