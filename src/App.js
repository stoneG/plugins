import React from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import createLinkifyPlugin from 'draft-js-linkify-plugin'

const inlineToolbarPlugin = createInlineToolbarPlugin()
const { InlineToolbar } = inlineToolbarPlugin

const linkifyPlugin = createLinkifyPlugin()

const customPlugin = {
  decorators: [
    {
      strategy: () => { debugger },
      component: () => <div />,
    },
  ],
}

const plugins = [
  customPlugin,
  linkifyPlugin,
  inlineToolbarPlugin,
]

class App extends React.Component {

  state = {
    editorState: EditorState.createEmpty()
  }

  componentDidMount() {
    this.editor.focus()
  }

  onChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {
    return (
      <div>
        <Editor
          ref={n => this.editor = n}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
        <InlineToolbar />
      </div>
    )
  }

}

export default App
