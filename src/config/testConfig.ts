import { ReactTestInstance } from 'react-test-renderer'

/**
 * Get an instace by testID
 */
export const findByTestID = (instance: ReactTestInstance, testID: string): ReactTestInstance =>
  instance.findByProps({ testID })

/**
 * Get all instaces by testID
 */
export const findAllByTestID = (instance: ReactTestInstance, testID: string): ReactTestInstance[] =>
  instance.findAllByProps({ testID })
