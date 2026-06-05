import '@servicenow/sdk/global'
import { UIComponent } from '@servicenow/sdk/core'
import { createElement } from '@servicenow/ui-renderer'
import App from './components/App'

UIComponent({
  $id: Now.ID['ui0'],
  name: 'x-sp-app',
  component: App
})