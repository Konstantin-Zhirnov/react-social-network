import ProfileStatus from "./ProfileStatus";
import React from "react";
import { create } from 'react-test-renderer'


describe('Тест для компоненты ProfileStatus', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Test ProfileStatus' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Test ProfileStatus')
    })

    test('Добавляется <span> элемент', () => {
        const component = create(<ProfileStatus status='Test ProfileStatus' />)
        const root = component.root
        let span = root.findAllByType('span')
        expect(span).not.toBeNull()
    })

    // test('Проверка на отсутствие <input>', () => {
    //     const component = create(<ProfileStatus status='Test ProfileStatus' />)
    //     const root = component.root
    //
    //     expect(() => {
    //         root.findAllByType('input')
    //     }).toThrow()
    // })

    // test('<span> отображает корректный статус', () => {
    //     const component = create(<ProfileStatus status='Test ProfileStatus' />)
    //     const root = component.root
    //     let span = root.findAllByType('span')
    //     span.props.onDoubleClick()
    //     let input = root.findAllByType('input')
    //
    //     expect(input.props.value).toBe('Test ProfileStatus')
    // })
})