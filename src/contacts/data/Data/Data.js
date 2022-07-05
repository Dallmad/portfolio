import React, {useEffect, useState} from 'react'
import s from './Data.module.scss';
import {v1} from "uuid";
import {api} from "../../../api/api";


export const Data = () => {

    const [inputValues, setInputValue] = useState({
        id: v1(),
        name: '',
        email: '',
        message: '',
    })
    const [validation, setValidation] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [disable, setDisable] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputValue({...inputValues, [name]: value})
    }

    const checkValidation = () => {
        let errors = validation

        //name validation
        const nameCond = /^([A-Z]{2,40})$/i
        if (!inputValues.name.trim()) {
            errors.name = 'You need to enter your name'
        } else if (!nameCond.test(inputValues.name)) {
            errors.name = 'Name must contain from 2 to 40 Latin letters'
        } else {
            errors.name = ''
        }

        //email validation
        const emailCond = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i
        if (!inputValues.email.trim()) {
            errors.email = 'Email is required'
        } else if (!inputValues.email.match(emailCond)) {
            errors.email = 'Please enter a valid email address'
        } else {
            errors.email = ''
        }

        //message validation
        if (!inputValues.message.trim()) {
            errors.message = 'Message is required'
        } else if (inputValues.message.length < 5) {
            errors.message = 'Message must be longer than 5 characters'
        } else if (inputValues.message.length > 300) {
            errors.message = 'Message must be shorter than 300 characters'
        } else {
            errors.message = ''
        }
        setValidation(errors)
    }
    const newMessage = {
        id: v1(),
        name: '',
        email: '',
        message: '',
    }

    useEffect(() => {
        checkValidation()
        if (validation.message
            || validation.email
            || validation.name) {
            setDisable(true)
        } else setDisable(false)
        //setInputValue(newMessage)
    }, [inputValues.message, inputValues.email, inputValues.name,
        validation.message, validation.email, validation.name
    ])
     const sendMessageTC = async (data) => {
        try {
            await api.sendMessage(data)
        } catch (error) {
            if (error instanceof Error) {
                console.log('error')
            }
        }
    }
        const handleSubmit = (e) => {
            sendMessageTC(inputValues)
            e.preventDefault()
        }
        return (
            <form
                className={s.data}
                id={'formMessage'}
                onSubmit={handleSubmit}
            >
                <div className={s.inputBlock}>
                    <input
                        type='text'
                        placeholder='Your Name'
                        className={s.input}
                        name={'name'}
                        onChange={(e) => handleChange(e)}
                    />
                    {validation.name && <p>{validation.name}</p>}
                    <input
                        type='email'
                        placeholder='Your Email'
                        className={s.input}
                        name={'email'}
                        onChange={(e) => handleChange(e)}
                    />
                    {validation.email && <p>{validation.email}</p>}
                </div>
                <textarea
                    placeholder='Your Message'
                    className={s.text}
                    name={'message'}
                    onChange={(e) => handleChange(e)}
                />
                {validation.message && <p>{validation.message}</p>}
                <button
                    type='submit'
                    className={s.button}
                    disabled={disable}
                >
                    Send Message
                </button>
            </form>
        )
    }
