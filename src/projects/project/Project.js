import s from './Project.module.scss';
import {Modal} from "../../components/Modal/Modal";
import {useState} from "react";

export const Project = ({title, description, logo, linkToGHPage, linkToCode}) => {

    const [showModal, setShowModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [answer, setAnswer] = useState('')

    const editShowModal = (value) => {
        setShowModal(value)
    }
    const editShowSecondModal = (value) => {
        setShowModal(false)
        setShowSecondModal(value)
    }
    const logoHandler = () => {
        window.open(linkToGHPage)
    }
    const toCodeHandler = () => {
        if (answer.trim() === '4') {
            window.open(linkToCode)
        } else {
            editShowSecondModal(true)
        }
        setShowModal(false)
        setAnswer('')
    }
    const toPageHandler = () => {
        setShowModal(true)
        setShowSecondModal(false)
    }
    return (
        <div className={s.project}>
                <img
                    src={logo}
                    alt={'project logo'}
                    className={s.logo}
                    onClick={logoHandler}
                />
            <h3 className={s.title}>
                {title}
            </h3>
            <div className={s.description}>
                {description}
                <button onClick={() => editShowModal(true)} className={s.link}>. . . more</button>
            </div>
            <div  className={s.containerModal}>
                <Modal editShowModal={editShowModal} showModal={showModal}>
                    <div className={s.bigModal}>
                        <div className={s.titleModal}>
                            This link for true dev
                        </div>
                        I need check you skill)
                        <div>2 * 2 = ?</div>
                        <input value={answer} onChange={(e) => setAnswer(e.currentTarget.value)}/>
                        <div className={s.containerBtn}>
                            <button onClick={() => editShowModal(false)}>return</button>
                            <button onClick={toCodeHandler}>check my skill</button>
                        </div>
                    </div>
                </Modal>
                <Modal editShowModal={editShowSecondModal} showModal={showSecondModal}>
                    <div className={s.bigModal}>
                        <div className={s.titleModal}>
                            Incorrect answer
                        </div>
                        <div>
                            <button onClick={() => editShowSecondModal(false)}>return</button>
                            <button onClick={toPageHandler}>try again</button>
                        </div>
                    </div>
                </Modal>
            </div>

        </div>

    );
}