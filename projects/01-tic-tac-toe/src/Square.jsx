export function Square({ children, isSelected, updateBoard, index }) {

    /**
     * * Agregamos una clase si está seleccionado
     * Si isSelected=true agregamos 'is-selected' para que visulamente
     * el usuario sepa que es su turno. Le pasamos la const a className
     */
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index);
    }

    

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}