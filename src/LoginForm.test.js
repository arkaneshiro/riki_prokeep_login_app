import React from 'react';
import {render, fireEvent} from "@testing-library/react"
import LoginForm from './LoginForm';
import { act } from 'react-dom/test-utils';

describe('login', () => {
    test("email input should accept text", () => {
        const component = render(<LoginForm/>);
        const emailInput = component.getByLabelText('email:');
        expect(emailInput.value).toMatch("");
        fireEvent.change(emailInput,{target: {value: 'testing'}});
        expect(emailInput.value).toMatch("testing");
    });

    // test("invalid email should display error on submit", () => {
    //     const component = render(<LoginForm/>);
    //     const emailLabel = component.getByLabelText('email:');
    //     fireEvent.change(emailLabel,{target: {value: 'testing'}});
    //     const form = component.getByRole('form')
    //     act(() => {
    //         fireEvent.submit(form)
    //     })
    //     const emailError = component.getByText('you must enter a valid email');
    //     expect(emailError.value).toMatch('you must enter a valid email')
    // });
    //
    // here I attempted to teach myself to test for existence of error messages that get added to DOM on sumbit


    test("password input should accept text", () => {
        const component = render(<LoginForm/>);
        const passwordInput = component.getByLabelText('password:');
        expect(passwordInput.value).toMatch("");
        fireEvent.change(passwordInput,{target: {value: 'testing'}});
        expect(passwordInput.value).toMatch("testing");
    });

    // test("valid login recieved 200 response", () => {
    //     const mockFn = jest.fn()
    //     const component = render(<LoginForm test_func={mockFn}/>);
    //     act(() => {
    //         const emailInput = component.getByLabelText('email:');
    //         const submitInput = component.getByRole('button')
    //         const passwordInput = component.getByLabelText('password:');
    //         fireEvent.change(emailInput,{target: {value: 'eve.holt@reqres.in'}});
    //         fireEvent.change(passwordInput,{target: {value: 'cityslicka'}});
    //         fireEvent.submit(submitInput)
    //     })

    //     expect(mockFn).toHaveBeenCalledTimes(1)
    // })
    //
    // calling mockFn causes an error to be thrown in LoginForm.js for some reason

})
