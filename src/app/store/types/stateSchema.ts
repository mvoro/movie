import { LayoutState } from '@/app/store/slices/types/layout';
import { movieApi } from '@/entities/movie/model/api/list/movieApi';

export interface StateSchema {
    layout: LayoutState;
    [movieApi.reducerPath]: ReturnType<typeof movieApi.reducer>;
}
