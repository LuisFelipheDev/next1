import styles from "../styles/entradaNumerica.module.css"

interface EntradaNumemericaProps{
    value: number
    text:string
    onChange: (newValue: number)=>void
}

export default function EntradaNumerica(props:EntradaNumemericaProps) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return(
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}