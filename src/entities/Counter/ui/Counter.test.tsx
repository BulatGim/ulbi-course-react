import { fireEvent, render, screen } from '@testing-library/react';
import { RenderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
    test('first render', () => {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('counter')).toHaveTextContent('10');
    });
    test(' increment', () => {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter')).toHaveTextContent('11');
    });
    test('decrement', () => {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter')).toHaveTextContent('9');
    });
});
