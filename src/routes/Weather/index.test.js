import { renderHook } from '@testing-library/react-hooks';

import { api } from '../../endpoints/services';
import { Weather } from '.';

jest.mock('../../endpoints/services/index.js');

describe('Weather', () => {

    it('проверка запроса getHistory', () => {
        renderHook(() => Weather());

        expect(api.getHistory).toHaveBeenCalledWith('London', '2022-02-08', '2022-02-11');
    });
})