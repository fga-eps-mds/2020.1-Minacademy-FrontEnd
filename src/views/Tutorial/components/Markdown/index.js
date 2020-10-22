import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import {
  selectCurrentModule,
  selectMarkdown,
  setCurrentModule,
  selectModuleList
} from '../../../../slices/tutorialSlice'
import { updateMarkdown, getModules } from '../../../../services/tutorialServices'
import Dropdown from '../../../../components/Dropdown';
import Button from '../../../../components/Button'

import './style.scss'
/* eslint-disable no-shadow */
function Markdown({ markdown, setCurrentModule, currentModule, updateMarkdown, getModules, modulesList }) {
  useEffect(() => {
    getModules()
  }, [])

  useEffect(() => {
    updateMarkdown(currentModule)
    window.scrollTo(0, 0) // eslint-disable-line no-undef
  }, [currentModule]);

  function next() {
    if (currentModule >= 25) return
    setCurrentModule(currentModule+1)
  }
  function previous() {
    if (currentModule === 1) return
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

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired,
  currentModule: PropTypes.number.isRequired,
  getModules: PropTypes.func.isRequired,
  setCurrentModule: PropTypes.func.isRequired,
  modulesList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired
};

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