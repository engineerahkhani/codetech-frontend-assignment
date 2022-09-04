import MainTemplate from '@core/components/templates/MainLayout';
import ErrorBoundary from '@core/components/atoms/ErrorBoundary';
import { createUseStyles } from '@core/utils/makeStyle';
import cssReset from '@core/utils/cssReset';
import globalCss from '@core/utils/globalCss';
import { ITheme } from './@core/types/theme';
import Routes from './Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import ShoppingBasketProvider from '@core/contexts/ShoppingBasket/shoppingBasket.provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

function App() {
  useStyles();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        {/*// @ts-ignore*/}
        <ShoppingBasketProvider>
          <MainTemplate>
            <Routes />
          </MainTemplate>
        </ShoppingBasketProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const useStyles = createUseStyles(({ colors }: ITheme) => ({
  '@global': {
    ...cssReset,
    ...globalCss,
    script: {
      display: 'none',
    },
    body: {
      background: colors.background,
    },
  },
}));

export default App;
