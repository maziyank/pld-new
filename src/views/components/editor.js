import { Component } from 'react'
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'

export default class Editor extends Component {
  render() {
    return (
      <div>
        <EditorJs tools={EDITOR_JS_TOOLS} />;
      </div>
    )
  }
}
