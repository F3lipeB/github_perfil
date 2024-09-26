import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    // const usuario = {                                UMA FORMA
    //     nome: 'Felipe Brito',
    //     avatar: 'https://github.com/F3lipeB.png'
    // }
    
    // const {endereco, nome} = props;                  OUTRA FORMA
    
    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)}                 PARTE DA OUTRA FORMA*/}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil