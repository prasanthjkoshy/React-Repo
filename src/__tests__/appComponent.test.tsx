import React, { PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'
import { State, AppStore } from '../app/store';
import productsReducer from '../features/products/productsSlice'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
test('renders product listing and search', () => {

  interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<State>
    store?: AppStore
  }
  function renderComponentWithProviders(
    ui: React.ReactElement,
    {
      preloadedState ,
      // Automatically create a store instance if no store was passed in
      store = configureStore({ reducer: { products: productsReducer }, preloadedState }),
      ...renderOptions
    }: ExtendedRenderOptions = {}
  ) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
      return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  }
  renderComponentWithProviders(<App />);

  const screenTitle = screen.getByText(/Makeover Studio/);
  expect(screenTitle).toBeTruthy();
  expect(screenTitle).toBeInTheDocument();

});