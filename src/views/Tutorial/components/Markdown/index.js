import  React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { selectCurrentModule, nextModule, previousModule } from '../../../../slices/tutorialSlice'
import ReactMarkdown from 'react-markdown'
import Dropdown from '../../../../components/Dropdown';
import Button from '../../../../components/Button'
import './style.scss'

const items = [
  {
    id: 1,
    value: 'Pulp Fiction',
  },
  {
    id: 2,
    value: 'The Prestige',
  },
  {
    id: 3,
    value: 'Blade Runner 2049',
  },
];

function Markdown({ currentModule, nextModule, previousModule }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    (async function updateMarkdown() {
      const file = await import(`../../../../assets/tutorial/${currentModule}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setMarkdown(text)
    })()
    window.scrollTo(0, 0)
  });

  function next() {
    if (currentModule >= 25) return
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
    <div className="markdown__content--header">
      <Dropdown title="Teste" items={items}/>
    </div>
    <div className="markdown__content--body">
      <ReactMarkdown source={markdown} />
    </div>
    <div className="markdown__content--navigation">
      <Button onClick={previous} shadow>anterior</Button>
      <Button onClick={next} shadow>próximo</Button>
    </div>
  </div>
  );
}

const mapStateToProps = state => ({
  currentModule: selectCurrentModule(state)
});

const mapDispatchToProps = { nextModule, previousModule }

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);