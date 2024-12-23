'use client';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import Layout from '@/widgets/layout';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <Layout>{children}</Layout>
        </Provider>
    );
};
export default Providers;
