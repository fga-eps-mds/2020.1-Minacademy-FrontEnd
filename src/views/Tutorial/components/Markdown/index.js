import  React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { selectCurrentModule, selectMarkdown, nextModule, previousModule } from '../../../../slices/tutorialSlice'
import { updateMarkdown } from '../../../../services/modulesServices'
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

function Markdown({ markdown, currentModule, nextModule, previousModule, updateMarkdown }) {

  useEffect(() => {
    updateMarkdown(currentModule)
    window.scrollTo(0, 0)
  }, [currentModule]);

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
  currentModule: selectCurrentModule(state),
  markdown: selectMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  nextModule: () => dispatch(nextModule()),
  previousModule: () => dispatch(previousModule()),
  updateMarkdown: (moduleNumber) => dispatch(updateMarkdown(moduleNumber))

})

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);