'use client';
import { Provider } from 'react-redux';
import { makeStore } from '@/app/store';
import Layout from '@/widgets/layout';
import { useRef } from 'react';
import { AppStore } from '@/app/store/helpers/hooks';

const Providers = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<AppStore>(undefined);

    if (!storeRef?.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            <Layout>{children}</Layout>
        </Provider>
    );
};
export default Providers;
