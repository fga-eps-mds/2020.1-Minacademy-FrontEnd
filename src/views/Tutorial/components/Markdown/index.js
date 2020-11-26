import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import {
  selectCurrentModule,
  selectMarkdown,
  setCurrentModule as setCurrentModuleImport,
  selectModuleList,
  isUpdatingMarkdown as isUpdatingMarkdownImport
} from '../../../../slices/tutorialSlice'
import { updateMarkdown as updateMarkdownImport, getModules as getModulesImport } from '../../../../services/tutorialServices'
import Dropdown from '../../../../components/Dropdown';
import Button from '../../../../components/Button'
import Loader from '../../../../components/Loader'

import './style.scss'
/* eslint-disable no-shadow */
function Markdown({ markdown, setCurrentModule, currentModule, updateMarkdown, getModules, modulesList, isUpdatingMarkdown }) {
  useEffect(() => {
    getModules()
  }, [])

  useEffect(() => {
    updateMarkdown(currentModule)
    window.scrollTo(0, 0) // eslint-disable-line no-undef
  }, [currentModule]);

  function LinkRenderer({ href, children }) { // eslint-disable-line react/prop-types
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  }

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
      {!isUpdatingMarkdown
      ? <>
        <ReactMarkdown source={markdown} renderers={{link: LinkRenderer}} />
        <div className="markdown__content--navigation">
          <Button onClick={previous} shadow>anterior</Button>
          <Button onClick={next} shadow>próximo</Button>
        </div>
        </>
      : <Loader big />
      }
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
  modulesList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  isUpdatingMarkdown: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentModule: selectCurrentModule(state),
  markdown: selectMarkdown(state),
  modulesList: selectModuleList(state),
  isUpdatingMarkdown: isUpdatingMarkdownImport(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown: (moduleNumber) => dispatch(updateMarkdownImport(moduleNumber)),
  getModules: () => dispatch(getModulesImport()),
  setCurrentModule: (moduleNumber) => dispatch(setCurrentModuleImport(moduleNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Markdown);