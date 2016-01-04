import TestUtils from 'react-addons-test-utils'
import CoreLayout from 'layouts/CoreLayout'
import { App } from 'react-toolbox'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<CoreLayout {...props} />)
}

describe('(Layout) Core', function () {
  let _component
  let _props
  let _child

  beforeEach(function () {
    _child = <h1 className='child'>Child</h1>
    _props = {
      children: _child
    }

    _component = shallowRenderWithProps(_props)
  })

  it("Should render as React-Toolbox's <App>.", function () {
    expect(_component.type).to.equal(App)
  })
})
