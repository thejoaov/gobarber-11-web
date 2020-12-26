import React from 'react'
import Toast from '../Toast'

import { Container } from './styles'

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast title="Info toast" testID="toast-info" type="info" />
      <Toast
        title="Info toast with description"
        testID="toast-info"
        type="info"
        description="Sie das essen und wir sind die jäger!"
      />
      <Toast title="Success toast" testID="toast-success" type="success" />
      <Toast
        title="Success toast with description"
        description="Sie das essen und wir sind die jäger!"
        testID="toast-success"
        type="success"
      />
      <Toast title="Error toast" testID="toast-error" type="error" />
      <Toast
        title="Error toast with description"
        description="Sie das essen und wir sind die jäger!"
        testID="toast-error"
        type="error"
      />
      <Toast title="Warning toast" testID="toast-warning" type="warning" />
      <Toast
        title="Warning toast with description"
        description="Sie das essen und wir sind die jäger!"
        testID="toast-warning"
        type="warning"
      />
    </Container>
  )
}

export default ToastContainer
