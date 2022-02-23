import { Error, ErrorTestIds } from '.';
import { render, fireEvent, act } from '@testing-library/react';

describe('Error', () => {
    it('нажата кнопка, вызов кастомной функции', () => {
        const onButtonClick = jest.fn();
        const component = render(<Error buttonClick={onButtonClick} />);

        act(() => {
            fireEvent.click(component.queryByTestId(ErrorTestIds.btn));
        });

        expect(onButtonClick).toBeCalled();
    });

})