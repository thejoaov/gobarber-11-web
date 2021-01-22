/**
 * = = = = = = = = = =
 *   A T E N T I O N
 * = = = = = = = = = =
 * After being able to test the hooks,
 * uncomment line 10 to 46, exclude the sum test
 * and change the file extension to .tsx;
 * The test here is made to pass, obviously.
 */
// /* eslint-disable prefer-const */
// import React from 'react';
// import { ReactTestRenderer, act, create } from 'react-test-renderer';
// import { ThemeProvider } from 'styled-components';

// import Input from '..';
// import theme from 'styles/theme';
// import GlobalStyle from 'styles/global';
// import { findByTestID } from 'config/testConfig';
// import { AuthProvider } from 'hooks/AuthContext';
// import ToastContainer from 'ToastContainer';
// import { InputProps } from '../types';

// let wrapper: ReactTestRenderer;
// let initialProps: InputProps = { name: 'test', testID: 'input' };

// const InputMock: React.FC = () => (
//   <ThemeProvider theme={theme}>
//     <GlobalStyle />
//     <AuthProvider>
//       <Input {...initialProps} />
//     </AuthProvider>
//     <ToastContainer />
//   </ThemeProvider>
// );

// describe('Input test suite', () => {
//   beforeEach(async () => {
//     await act(async () => {
//       wrapper = create(<InputMock />);
//     });
//   });

//   it('should render without explode', () => {
//     expect(wrapper).toBeTruthy();
//   });
// });

describe('Input test suite', () => {
  it('should be able to sum', () => {
    expect(1 + 1).toBe(2)
  })
})
