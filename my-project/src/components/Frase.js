import styles from  './Frase.module.css'

function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <h2>Aqui em baixo tem uma frase</h2>
            <p className={styles.fraseContent}>Componente com Frase</p>
        </div>
    )
}

export default Frase