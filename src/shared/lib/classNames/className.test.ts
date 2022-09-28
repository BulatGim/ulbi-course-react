import { classNames } from './classNames';

describe('classNames', () => {
    test('first class', () => {
        expect(classNames('className')).toBe('className');
    });
    test('additional classes', () => {
        expect(
            classNames('className', {}, ['someClass', 'someAdditionalClass']),
        )
            .toBe('className someClass someAdditionalClass');
    });
    test('single mods', () => {
        expect(
            classNames('className', { modeClass0: true, modeClass1: true }),
        ).toBe('className modeClass0 modeClass1');
    });
    test('mods undefined, false', () => {
        expect(
            classNames('className', {
                modeClass0: true,
                modeClass1: false,
                modeClass2: undefined,
            }),
        ).toBe('className modeClass0');
    });
    test('mods with additional classes', () => {
        expect(
            classNames('className', {
                modeClass0: true,
                modeClass1: true,
            }, ['additionalClass0', 'additionalClass1']),
        ).toBe(
            'className additionalClass0 additionalClass1 modeClass0 modeClass1',
        );
    });
});
