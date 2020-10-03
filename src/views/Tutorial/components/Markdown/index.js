import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {
  selectCurrentModule,
  selectMarkdown,
  setCurrentModule,
  selectModuleList
} from '../../../../slices/tutorialSlice'
import { updateMarkdown, getModules } from '../../../../services/tutorialServices'
import ReactMarkdown from 'react-markdown'
import Dropdown from '../../../../components/Dropdown';
import Button from '../../../../components/Button'
import './style.scss'

function Markdown({ markdown, setCurrentModule, currentModule, updateMarkdown, getModules, modulesList }) {

  useEffect(() => {
    getModules()
  }, [])

  useEffect(() => {
    updateMarkdown(currentModule)
    window.scrollTo(0, 0)
  }, [currentModule]);

  function next() {
    if (currentModule >= 25) return
    console.log("NEXT");
    setCurrentModule(currentModule+1)
  }
  function previous() {
    if (currentModule === 1) return
    console.log("PREVIOUS");
    setCurrentModule(currentModule-1)
  }

  function changeModule(module) {
    setCurrentModule(module.moduleNumber)
  }

  return (
    <div className="markdown">
      <div className="markdown__content--header">
        <Dropdown items={modulesList} initialSelection={currentModule} toggleItem={changeModule}/>
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
  markdown: selectMarkdown(state),
  modulesList: selectModuleList(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown: (moduleNumber) => dispatch(updateMarkdown(moduleNumber)),
  getModules: () => dispatch(getModules()),
  setCurrentModule: (moduleNumber) => dispatch(setCurrentModule(moduleNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);