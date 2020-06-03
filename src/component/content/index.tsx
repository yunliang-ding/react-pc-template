import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI')
@observer
class Content extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-content'>
      <div>
        <img src='/static/image/icon.svg' style={{height: 200}} />
      </div>
    </div>
  }
}
export { Content }