import * as React from 'react';
import { createMemoryHistory } from 'history';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { AuthFunctionContext, UserContext } from '../../store/UserStore';
import { User } from '../../api/types';
import { AuthFunctionContextValue, LogoutReason, UserStoreValue } from '../../store/types';

export const renderWithRouterAndUser = (
  element: JSX.Element,
  testContext?: Partial<UserStoreValue<User>&AuthFunctionContextValue>,
  initialEntries: string[] = ['/auth/login'],
) => {
  const history = createMemoryHistory({ initialEntries });

  return ({
    history,
    ...render(
      <UserContext.Provider value={{ user: testContext?.user || null }}>
        <AuthFunctionContext.Provider
          value={{
            csrf: testContext?.csrf || '',
            loading: !!testContext?.loading,
            login: testContext?.login || jest.fn(),
            loggedIn: !!testContext?.user,
            logout: testContext?.logout || jest.fn(),
            justLoggedOut: testContext?.justLoggedOut || LogoutReason.NONE,
            activateEmailAddress: testContext?.activateEmailAddress || jest.fn(),
            apiUrl: testContext?.apiUrl || 'https://example.com/api/v1',
          }}
        >
          <Router history={history}>
            {element}
          </Router>
        </AuthFunctionContext.Provider>
      </UserContext.Provider>,
    ),
  });
};
