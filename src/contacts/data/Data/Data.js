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
    const [feedback, setFeedback] = useState('')
    const [disable, setDisable] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputValue({...inputValues, [name]: value})
    }

    const newMessage = {
        id: v1(),
        name: '',
        email: '',
        message: '',
    }

    const sendMessage = async (data) => {
        setDisable(true)
        try {
            await api.sendMessage(data)
            setError(false)
            setDisable(false)
            setFeedback('Your message has been sent ')
            setInputValue(newMessage)
        } catch (err) {
            if (err instanceof Error) {
                setDisable(false)
                setError(true)
                setFeedback(`${err.message}`)
            }
        }
    }

    const handleSubmit = (e) => {
        sendMessage(inputValues)
        e.preventDefault()
    }

    useEffect(() => {
        if (feedback) {
            const timer = setTimeout(() => {
                setFeedback('')
                setError(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [feedback])

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
                    value={inputValues.name}
                />
                <input
                    type='email'
                    placeholder='Your email'
                    className={s.input}
                    name={'email'}
                    onChange={(e) => handleChange(e)}
                    value={inputValues.email}
                />
            </div>
            <textarea
                placeholder='Your Message'
                className={s.text}
                name={'message'}
                onChange={(e) => handleChange(e)}
                value={inputValues.message}
            />
            <button
                type='submit'
                className={s.button}
                disabled={disable}
            >
                Send Message
            </button>
            {feedback && <div className={error ? s.feedback_error : s.feedback}>{feedback}</div>}
        </form>
    )
}
